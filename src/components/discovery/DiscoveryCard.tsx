"use client";

import Link from "next/link";
import { Zap, ArrowRight, Heart, Share2, MessageCircle } from "lucide-react";

interface UserVibe {
    id: string;
    username: string;
    vibes: Array<{
        batteryLevel: number;
        moodText: string;
        currentActivity: string | null;
        createdAt: string;
    }>;
}

const getVibeTheme = (battery: number) => {
    if (battery > 70) return { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-500/20' };
    if (battery > 30) return { color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-500/20' };
    return { color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-500/20' };
};

export default function DiscoveryCard({ user, isDark }: { user: UserVibe; isDark: boolean }) {
    const latestVibe = user.vibes[0];
    if (!latestVibe) return null;

    const theme = getVibeTheme(latestVibe.batteryLevel);

    return (
        <div className="group relative animate-in fade-in zoom-in-95 duration-500">
            <div className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.2)] 
        ${isDark ? 'bg-[#1e293b]/40 backdrop-blur-3xl border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>

                {/* Header: User Info & Battery */}
                <div className="p-5 md:p-8 flex justify-between items-start gap-2">
                    <div className="flex gap-3 md:gap-4 min-w-0">
                        <div className="relative shrink-0">
                            <div className={`absolute -inset-1 rounded-full blur-[4px] opacity-40 animate-pulse ${theme.bg}`} />
                            <div className={`w-11 h-11 md:w-14 md:h-14 rounded-full border-2 p-1 ${theme.border}`}>
                                <div className={`w-full h-full rounded-full flex items-center justify-center font-black italic text-[10px] md:text-sm ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800'}`}>
                                    {user.username.slice(0, 2).toUpperCase()}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-0.5 md:space-y-1 min-w-0">
                            <Link href={`/profile/${user.username}`} className={`block text-[15px] md:text-lg font-black italic truncate transition-colors hover:text-indigo-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                @{user.username}
                            </Link>
                            <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-500">Active Now</p>
                        </div>
                    </div>
                    <div className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-xl border flex items-center gap-1.5 md:gap-2 shrink-0 ${theme.bg} ${theme.border}`}>
                        <Zap className={`w-2.5 h-2.5 md:w-3 md:h-3 ${theme.color} fill-current`} />
                        <span className={`text-[9px] md:text-[10px] font-black ${theme.color}`}>{latestVibe.batteryLevel}%</span>
                    </div>
                </div>

                {/* Content: Mood & Activity */}
                <div className="px-5 md:px-8 pb-6 md:pb-8 space-y-4">
                    <div className={`p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-l-4 ${theme.border} ${isDark ? 'bg-white/5' : 'bg-slate-50'}`}>
                        <p className={`text-sm md:text-md font-bold leading-relaxed italic ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                            "{latestVibe.moodText}"
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="truncate">Doing {latestVibe.currentActivity || "Living Life"}</span>
                    </div>
                </div>

                {/* Footer: Actions */}
                <div className={`px-5 md:px-8 py-5 md:py-6 border-t flex justify-between items-center gap-4 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <div className="flex items-center gap-4 md:gap-6 text-slate-500">
                        <button className="transition-colors hover:text-rose-500 active:scale-125"><Heart className="w-4 h-4 md:w-5 md:h-5" /></button>
                        <button className="transition-colors hover:text-indigo-400"><MessageCircle className="w-4 h-4 md:w-5 md:h-5" /></button>
                        <button className="transition-colors hover:text-cyan-400"><Share2 className="w-4 h-4 md:w-5 md:h-5" /></button>
                    </div>
                    <Link href={`/profile/${user.username}`} className="shrink-0">
                        <div className="flex items-center gap-1.5 md:gap-2 group/link cursor-pointer">
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover/link:text-indigo-500 transition-colors">Portal</span>
                            <ArrowRight className="hidden sm:block w-3 h-3 text-slate-600 group-hover/link:text-indigo-500 group-hover/link:translate-x-1 transition-all" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}