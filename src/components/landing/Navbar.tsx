"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap, Sun, Moon, Github, Globe } from "lucide-react";

export default function Navbar({ isDark, toggleMode, colors }: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed top-0 inset-x-0 z-50 p-6 md:p-10 flex items-center bg-transparent backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 fill-white text-white" />
                    </div>
                    <span className="text-sm font-black italic tracking-tighter uppercase">vibecheck.</span>
                </div>
            </nav>
        );
    }

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 p-6 md:px-14 md:py-8 flex items-center bg-gradient-to-b ${colors.navbar} to-transparent backdrop-blur-md transition-all duration-500`}>
            {/* BRAND AREA */}
            <div className="flex items-center gap-3 group cursor-default shrink-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)] group-hover:rotate-12 transition-transform">
                    <Zap className="w-5 h-5 fill-white text-white" />
                </div>
                <span className={`text-[12px] md:text-[15px] font-black italic tracking-tighter uppercase ${colors.text}`}>vibecheck.</span>
            </div>

            {/* SPACER */}
            <div className="flex-1" />

            {/* ACTION AREA */}
            <div className="flex items-center gap-4 md:gap-8">
                {/* Explore Link */}
                <Link href="/discovery" className={`text-[10px] font-black uppercase tracking-[0.3em] ${colors.subtext} hover:text-indigo-500 transition-all flex items-center gap-2`}>
                    <Globe className="w-5 h-5 md:hidden text-indigo-500" />
                    <span className="hidden md:block">Explore</span>
                </Link>

                {/* Utils */}
                <div className="flex items-center gap-3">
                    <button onClick={toggleMode} className={`p-3 rounded-2xl border transition-all active:scale-90 shadow-sm ${isDark ? 'bg-white/5 border-white/10 text-indigo-400' : 'bg-slate-50 border-slate-200 text-indigo-600'}`}>
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <Link href="https://github.com/ihksanblny/vibecheck-app" target="_blank" className={`hidden md:block p-3 rounded-2xl border transition-all active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'} hover:text-indigo-500`}>
                        <Github className="w-4 h-4" />
                    </Link>
                </div>

                {/* Sync Button - High Contrast Premium */}
                <Link href="/login" className={`text-[9px] font-black uppercase tracking-[0.25em] px-8 py-4 rounded-3xl transition-all active:scale-95 shadow-2xl hover:scale-105 ${isDark ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-950 text-white shadow-slate-900/20'}`}>
                    Sync
                </Link>
            </div>
        </nav>
    );
}