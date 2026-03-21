"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap, Sun, Moon, Github, Globe } from "lucide-react";

export default function Navbar({ isDark, toggleMode, colors }: any) {
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted to prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed top-0 inset-x-0 z-50 p-6 md:p-10 flex items-center bg-transparent backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-3 group cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 fill-white text-white" />
                    </div>
                    <span className="text-[12px] md:text-sm font-black italic tracking-tighter uppercase">vibecheck.</span>
                </div>
            </nav>
        );
    }

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 p-6 md:p-10 flex items-center bg-gradient-to-b ${colors.navbar} to-transparent backdrop-blur-sm transition-all duration-500`}>
            {/* BRAND AREA */}
            <div className="flex items-center gap-2 md:gap-3 group cursor-default">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:rotate-12 transition-transform shrink-0">
                    <Zap className="w-5 h-5 fill-white text-white" />
                </div>
                <span className={`text-[12px] md:text-sm font-black italic tracking-tighter uppercase ${colors.text} shrink-0`}>vibecheck.</span>
            </div>

            {/* SPACER */}
            <div className="flex-1" />

            {/* ACTION AREA */}
            <div className="flex items-center gap-2 md:gap-10">
                <Link href="/discovery" className={`text-slate-500 hover:text-indigo-500 transition-all active:scale-95 flex items-center gap-2 px-1`}>
                    <Globe className="w-5 h-5 md:hidden" />
                    <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.3em]">Explore</span>
                </Link>

                <div className="flex items-center gap-2 md:gap-4">
                    <button onClick={toggleMode} className={`p-2 rounded-xl border ${colors.buttonSecondary} hover:scale-110 active:scale-95 transition-all text-indigo-500 shadow-sm shrink-0`}>
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <Link href="https://github.com/ihksanblny/vibecheck-app" target="_blank" className={`hidden xs:block ${colors.subtext} hover:text-indigo-500 transition-all hover:scale-110 active:scale-95 shrink-0`}>
                        <Github className="w-5 h-5" />
                    </Link>
                </div>

                <Link href="/login" className={`text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] px-4 py-3 md:px-8 md:py-3.5 border rounded-full transition-all active:scale-95 shadow-lg ${colors.buttonPrimary || 'bg-indigo-600 text-white'} hover:opacity-90 shrink-0`}>
                    Sync
                </Link>
            </div>
        </nav>
    );
}