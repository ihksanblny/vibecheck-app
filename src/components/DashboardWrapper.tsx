"use client";

import { useVibe } from "@/src/hooks/useVibe";
import DashboardView from "./DashboardView";
import { Loader2 } from "lucide-react";

export default function DashboardWrapper({ session }: { session: any }) {
    const vibeData = useVibe();

    // Jika data utama belum siap, tampilkan loading yang estetik (Gelap & Glassy)
    if (!vibeData.vibe && !vibeData.history) {
        return (
            <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center gap-4">
                <div className="relative">
                    <div className="w-12 h-12 border-2 border-indigo-500/20 rounded-full animate-ping absolute" />
                    <Loader2 className="w-12 h-12 text-indigo-500 animate-spin relative" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 animate-pulse">Establishing Sync...</p>
            </div>
        );
    }

    return <DashboardView session={session} {...vibeData} />;
}
