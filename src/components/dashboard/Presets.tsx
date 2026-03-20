"use client";

import { Zap } from "lucide-react";
import { PRESETS } from "@/src/hooks/useVibe";

export default function Presets({ applyPreset }: any) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
                <Zap className="w-3 h-3 text-indigo-400 fill-indigo-400/20" />
                <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Quick Presets</h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {PRESETS.map((p) => (
                    <button
                        key={p.label}
                        onClick={() => applyPreset(p)}
                        className="group flex flex-col items-center gap-3 bg-[#1e293b]/40 backdrop-blur-xl border border-white/5 py-5 rounded-[2.5rem] hover:bg-white/10 hover:border-white/20 transition-all active:scale-90 shadow-lg"
                    >
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{p.emoji}</span>
                        <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500 group-hover:text-white transition-colors">{p.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
