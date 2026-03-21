import React from "react";
import Link from "next/link";
import { ArrowLeft, Sun, Moon } from "lucide-react";

interface AuthLayoutProps {
    children: React.ReactNode;
    isDark: boolean;
    toggleDark: () => void;
    image: string;
    title: string;
    subtitle: string;
    colors: {
        bg: string;
        card: string;
        input: string;
        text: string;
        subtext: string;
    };
}

export default function AuthLayout({ children, isDark, toggleDark, image, title, subtitle, colors }: AuthLayoutProps) {
    return (
        <main className={`min-h-screen ${colors.bg} ${colors.text} flex transition-colors duration-500 relative overflow-x-hidden`}>
            {/* LEFT SIDE: HD IMAGE - Hidden on Mobile */}
            <div className="hidden lg:block w-1/2 relative overflow-hidden group">
                <img src={image} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Cover" />
                <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-transparent to-[#020617]' : 'from-transparent to-[#f8fafc]'}`} />
                <div className="absolute bottom-20 left-20 z-10 max-w-md">
                    <div className={`w-10 h-1 mb-6 rounded-full ${isDark ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                    <h2 className="text-5xl font-black italic tracking-tighter leading-none mb-4 text-white uppercase" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">{subtitle}</p>
                </div>
            </div>

            {/* RIGHT SIDE: FORM CONTENT */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative p-6 md:p-12">
                {/* Theme Toggle - Positioned safely for notch */}
                <button
                    onClick={toggleDark}
                    className={`absolute top-14 right-6 md:top-10 md:right-10 p-4 rounded-2xl border transition-all active:scale-95 group/toggle z-30 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 shadow-xl'}`}
                >
                    {isDark ? <Sun className="w-5 h-5 text-indigo-400 group-hover/toggle:rotate-45 transition-transform" /> : <Moon className="w-5 h-5 text-indigo-600 group-hover/toggle:-rotate-12 transition-transform" />}
                </button>

                <div className="w-full max-w-md relative z-10 pt-20 md:pt-0">
                    {/* Return Portal - Aggressive safe-area spacing */}
                    <div className="mb-10 pl-2">
                        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-500 transition-colors group">
                            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                            Return Portal
                        </Link>
                    </div>

                    <div className={`backdrop-blur-3xl rounded-[3rem] p-8 md:p-14 border ${colors.card} shadow-2xl`}>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}