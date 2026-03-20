"use client";

import Link from "next/link";
import { Zap, Sun, Moon, Github } from "lucide-react";

export default function Navbar({ isDark, toggleMode, colors }: any) {
    return (
        <nav className={`fixed top-0 inset-x-0 z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b ${colors.navbar} to-transparent backdrop-blur-sm`}>
            <div className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:rotate-12 transition-transform">
                    <Zap className="w-5 h-5 fill-white text-white" />
                </div>
                <span className={`text-sm font-black italic tracking-tighter uppercase ${colors.text}`}>vibecheck.</span>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
                <button onClick={toggleMode} className={`p-2.5 rounded-xl border ${colors.buttonSecondary} hover:scale-110 active:scale-95 transition-all text-indigo-500`}>
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <div className="hidden md:flex items-center gap-6 pr-6 border-r border-slate-500/10">
                    <Link href="#" className={`${colors.subtext} hover:text-indigo-500 transition-colors`}><Github className="w-5 h-5" /></Link>
                </div>
                <Link href="/login" className={`text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 border rounded-full transition-all active:scale-95 shadow-sm ${colors.buttonSecondary} hover:border-indigo-500/30`}>
                    Start Sync
                </Link>
            </div>
        </nav>
    );
}
