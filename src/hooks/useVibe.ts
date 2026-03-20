import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-hot-toast";

export const PRESETS = [
  { emoji: "⚡", label: "Bersinar", battery: 100, mood: "Full Power!", activity: "Menghajar Deadline" },
  { emoji: "🧘", label: "Zen", battery: 80, mood: "Chill & Damai", activity: "Meditasi Coding" },
  { emoji: "🪫", label: "Kritis", battery: 15, mood: "Butuh Istirahat", activity: "Hanya Bernafas" },
  { emoji: "🎮", label: "Gaming", battery: 60, mood: "Lagi Fokus Main", activity: "Push Rank" },
];

export function useVibe(initialVibe = { battery: 50, mood: "Lagi Gabut", activity: "Ngedit Web" }) {
  const [vibe, setVibe] = useState(initialVibe);
  const [loading, setLoading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);

  // --- FUNGSI UTAMA ---

  // 1. Ambil Data Histori
  const fetchHistory = async () => {
    try {
      const res = await fetch("/api/vibe/history");
      if (res.ok) {
        const data = await res.json();
        setHistory(data);
      }
    } catch (err) {
      console.error("Gagal ambil riwayat:", err);
    }
  };

  // 2. Ambil Data Latest Vibe
  const fetchLatestVibe = async () => {
    try {
      const res = await fetch("/api/vibe");
      if (res.ok) {
        const data = await res.json();
        setVibe({
          battery: data.batteryLevel,
          mood: data.moodText,
          activity: data.currentActivity || "Ngedit Web"
        });
      }
    } catch (err) {
      console.error("Gagal ambil data vibe:", err);
    }
  };

  // 3. Terapkan Preset
  const applyPreset = (preset: typeof PRESETS[0]) => {
    setVibe({
      battery: preset.battery,
      mood: preset.mood,
      activity: preset.activity
    });
  };

  // --- EFFECTS ---
  useEffect(() => {
    fetchLatestVibe();
    fetchHistory();
  }, []);


  // --- HANDLERS ---
  const copyProfileLink = (username: string) => {
    const url = `${window.location.host}/profile/${username}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async (username: string) => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3, cacheBust: true });
      const link = document.createElement("a");
      link.download = `vibe-${username || "check"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/vibe", {
        method: "POST",
        body: JSON.stringify({
          batteryLevel: vibe.battery,
          moodText: vibe.mood,
          currentActivity: vibe.activity,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        toast.success("MANTAP! Vibe sudah tersimpan.");
        fetchHistory();
      } else {
        toast.error("Gagal simpan vibe.");
      }
    } catch (err) {
      toast.error("Terjadi kesalahan sistem!");
    } finally {
      setLoading(false);
    }
  };

  return { vibe, setVibe, cardRef, handleDownload, handleSave, loading, history, copyProfileLink, copied, applyPreset };
}