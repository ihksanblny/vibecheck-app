"use client";

import { Save, Download, Loader2, Settings } from "lucide-react";
import VibeCard from "./VibeCard";
import VibeControls from "./VibeControls";
import Header from "./dashboard/Header";
import Presets from "./dashboard/Presets";
import History from "./dashboard/History";

interface DashboardViewProps {
  session: any; vibe: any; setVibe: (v: any) => void; cardRef: any;
  handleSave: () => void; handleDownload: (u: string) => void;
  loading: boolean; history: any[]; copyProfileLink: (u: string) => void;
  copied: boolean; applyPreset: (p: any) => void;
}

export default function DashboardView(props: DashboardViewProps) {
  const { session, vibe, setVibe, cardRef, handleSave, handleDownload, loading, history, copyProfileLink, copied, applyPreset } = props;

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center p-4 sm:p-6 md:p-12 pb-32 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <Header session={session} copyProfileLink={copyProfileLink} copied={copied} />

      <div className="w-full max-w-sm space-y-12 relative z-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
        <VibeCard
          ref={cardRef}
          {...vibe}
          musicUrl={vibe.music}
          username={session.user?.username}
        />
        <Presets applyPreset={applyPreset} />

        <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-white/5 p-8 rounded-[3rem] space-y-8 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/5 pb-4">
            <Settings className="w-3 h-3 text-slate-500" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Fine Tune</h3>
          </div>
          <VibeControls {...vibe} setVibe={setVibe} />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button onClick={handleSave} disabled={loading} className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 py-4 rounded-2xl font-black transition-all shadow-xl shadow-indigo-500/20 active:scale-95 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {loading ? <Loader2 className="animate-spin w-5 h-5 opacity-50" /> : <Save className="w-5 h-5" />}
              Capture
            </button>
            <button onClick={() => handleDownload(session.user?.username)} className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 py-4 rounded-2xl border border-white/10 font-bold transition-all active:scale-95 shadow-lg group">
              <Download className="w-5 h-5 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
              Export
            </button>
          </div>
        </div>

        <History history={history} />
      </div>
    </main>
  );
}