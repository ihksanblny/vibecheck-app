"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";

export default function Hero({ isDark, colors }: any) {
    return (
        <section className="relative z-10 pt-32 md:pt-52 pb-24 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-20">
            {/* LEFT SIDE: TEXT CONTENT */}
            <div className="flex-1 text-center lg:text-left">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-10 animate-in fade-in slide-in-from-bottom duration-1000 ${isDark ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Live Engine v2.0</span>
                </div>

                <h1 className="text-5xl md:text-[100px] font-black italic tracking-[-0.05em] leading-[0.85] mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                    SYNC YOUR <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-indigo-400 via-indigo-200 to-indigo-500' : 'from-indigo-600 via-indigo-400 to-indigo-700'}`}>ENERGY.</span>
                </h1>

                <p className={`max-w-xl mx-auto lg:mx-0 ${colors.subtext} text-sm md:text-md leading-relaxed mb-16 px-4 lg:px-0 animate-in fade-in slide-in-from-bottom duration-1000 delay-300`}>
                    The minimalist social portal to broadcast your social battery level and mood. Built for creators who value authentic, visual status syncing.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-8 lg:justify-start justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                    <Link href="/register" className={`group relative flex items-center justify-between gap-12 px-8 py-5 rounded-[2rem] font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-xl ${colors.buttonPrimary}`}>
                        <span>Initialize Identity</span>
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>

                    <div className="flex -space-x-3 items-center">
                        {[1, 2, 3, 4].map((i) => (
                            <img
                                key={i}
                                src={`https://i.pravatar.cc/150?u=${i + 10}`}
                                className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover ring-2 ring-indigo-500/20 shadow-xl"
                                alt="avatar"
                            />
                        ))}
                        <div className="pl-6">
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Joined by 2k+ <br />Early Syncers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: HUMAN ELEMENT HD */}
            <div className="hidden lg:flex flex-1 relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                    {/* Floating Decorative Card */}
                    <div className="absolute -top-10 -left-10 w-48 h-64 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] z-20 shadow-2xl p-6 hidden xl:block animate-bounce-slow">
                        <div className="flex justify-between items-start mb-10">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <User className="w-5 h-5 text-orange-500" />
                            </div>
                            <span className="text-[10px] font-black italic text-orange-500">98%</span>
                        </div>
                        <p className="text-xs font-black text-white italic mb-2">Feeling Zen.</p>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-orange-500" />
                        </div>
                    </div>

                    {/* Main Hero Image */}
                    <div className="absolute inset-0 rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(79,70,229,0.1)] group">
                        <Image
                            src="https://images.unsplash.com/photo-1539130560464-90209ae89868?q=80&w=1974&auto=format&fit=crop"
                            alt="Stylized Person"
                            fill
                            priority
                            className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
                    </div>

                    {/* Aesthetic Circles */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px]" />
                    <div className="absolute top-1/2 -left-20 w-32 h-32 bg-violet-600/20 rounded-full blur-[60px]" />
                </div>
            </div>
        </section>
    );
}
