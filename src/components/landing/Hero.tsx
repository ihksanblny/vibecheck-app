"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero({ isDark, colors }: any) {
    return (
        <section className="relative z-10 pt-44 md:pt-64 pb-24 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-10 animate-in fade-in slide-in-from-bottom duration-1000 ${isDark ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Live Engine v2.0</span>
            </div>

            <h1 className="text-6xl md:text-[110px] font-black italic tracking-[-0.05em] leading-[0.85] mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                SYNC YOUR <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-indigo-400 via-indigo-200 to-indigo-500' : 'from-indigo-600 via-indigo-400 to-indigo-700'}`}>ENERGY.</span>
            </h1>

            <p className={`max-w-xl ${colors.subtext} text-sm md:text-md leading-relaxed mb-16 px-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300`}>
                The minimalist social portal to broadcast your social battery level and mood. Built for creators who value authentic, visual status syncing.
            </p>

            <Link href="/register" className={`group relative flex items-center justify-between gap-12 px-8 py-5 rounded-[2rem] font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-xl ${colors.buttonPrimary} animate-in fade-in slide-in-from-bottom duration-1000 delay-500`}>
                <span>Initialize Identity</span>
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
        </section>
    );
}
