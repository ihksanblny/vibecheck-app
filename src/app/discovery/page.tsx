"use client";

import { useState } from "react";
import Discovery from "@/src/components/landing/Discovery";
import Navbar from "@/src/components/landing/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DiscoveryPage() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const colors = {
        bg: isDarkMode ? "bg-[#020617]" : "bg-[#f8fafc]",
        text: isDarkMode ? "text-white" : "text-[#0f172a]",
        subtext: isDarkMode ? "text-slate-400" : "text-slate-500",
        card: isDarkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200 shadow-sm",
        navbar: isDarkMode ? "from-[#020617]/80" : "from-[#f8fafc]/80",
        buttonPrimary: isDarkMode ? "bg-white text-[#020617]" : "bg-[#020617] text-white",
        buttonSecondary: isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200",
    };

    return (
        <main className={`min-h-screen ${colors.bg} ${colors.text} selection:bg-indigo-500/30 overflow-x-hidden relative transition-colors duration-500 pb-20`}>
            {/* Ambient background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/${isDarkMode ? '10' : '5'} via-transparent to-transparent opacity-50 blur-[120px]`} />
            </div>

            <Navbar isDark={isDarkMode} toggleMode={() => setIsDarkMode(!isDarkMode)} colors={colors} />

            <div className="container mx-auto px-6 pt-32 lg:pt-40">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-500 transition-colors mb-12 group">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    Return to Hub
                </Link>

                <div className="animate-in fade-in slide-in-from-bottom duration-1000">
                    <Discovery isDark={isDarkMode} />
                </div>
            </div>
        </main>
    );
}
