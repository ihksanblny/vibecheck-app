"use client";

import { User } from "lucide-react";

export default function History({ history }: any) {
    return (
        <div className="pt-6 space-y-6">
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-slate-500" />
                    <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Mission Logs</h3>
                </div>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/5 to-transparent"></div>
            </div>

            <div className="space-y-4">
                {history.length > 0 ? (
                    history.map((h: any) => (
                        <div key={h.id} className="bg-[#1e293b]/20 hover:bg-[#1e293b]/40 border border-white/5 p-5 rounded-[2rem] flex items-center justify-between group transition-all hover:-translate-y-1 hover:border-white/10">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-black text-white/90 capitalize tracking-tight">{h.moodText}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest leading-none">
                                        {new Date(h.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
                                    </span>
                                    <div className="w-[1px] h-2 bg-white/10" />
                                    <span className="text-[9px] text-slate-600 font-bold truncate max-w-[120px]">{h.currentActivity}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-end gap-1">
                                    <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000" style={{ width: `${h.batteryLevel}%` }} />
                                    </div>
                                    <span className="text-[9px] font-black italic text-indigo-400">{h.batteryLevel}%</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-[#1e293b]/10 border border-dashed border-white/10 py-16 rounded-[3rem] text-center opacity-30">
                        <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em] italic">No Signal Detected</p>
                    </div>
                )}
            </div>
        </div>
    );
}
