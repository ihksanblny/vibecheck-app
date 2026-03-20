"use client";

import React, { useState } from "react";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import Link from "next/link";

export default function GuestView() {
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
    <main className={`min-h-screen ${colors.bg} ${colors.text} selection:bg-indigo-500/30 overflow-x-hidden relative transition-colors duration-500`}>
      {/* Background Ambience Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/${isDarkMode ? '10' : '5'} via-transparent to-transparent opacity-50 blur-[120px]`} />
        {isDarkMode && <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />}
      </div>

      <Navbar isDark={isDarkMode} toggleMode={() => setIsDarkMode(!isDarkMode)} colors={colors} />

      <div className="flex flex-col items-center">
        <Hero isDark={isDarkMode} colors={colors} />
        <Features colors={colors} />

        {/* Simple Footer under 100 lines limit */}
        <footer className={`mt-64 pb-12 w-full flex flex-col md:flex-row justify-between items-center font-black tracking-[0.2em] text-[8px] uppercase border-t pt-12 px-6 max-w-7xl mx-auto relative z-10 ${isDarkMode ? 'border-white/5 text-slate-700' : 'border-slate-200 text-slate-400'}`}>
          <p>&copy; 2026 VibeCheck Protocol. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <Link href="#" className="hover:text-indigo-500 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-indigo-500 transition-colors">Docs</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}