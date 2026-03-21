"use client";

import { LogOut, ArrowRight, Share2, Check, Globe } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Header({ session, copyProfileLink, copied }: any) {
    return (
        <div className="w-full max-w-sm flex justify-between items-center mb-12 relative z-10 animate-in fade-in slide-in-from-top duration-1000">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] opacity-80">Online Portal</p>
                </div>
                <Link href={`/profile/${session.user?.username}`} className="group flex items-center gap-1.5 transition-all text-sm font-black text-white/90 hover:text-white">
                    <span className="underline underline-offset-4 decoration-white/10 lowercase">@{session.user?.username}</span>
                    <ArrowRight className="w-3 h-3 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>

            <div className="flex items-center gap-3">
                <Link href="/discovery" className="flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-indigo-400 transition-all active:scale-90 group relative">
                    <Globe className="w-4 h-4" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-black uppercase tracking-tighter pointer-events-none whitespace-nowrap shadow-xl">Explore</span>
                </Link>
                <button onClick={() => copyProfileLink(session.user?.username)} className={`flex items-center justify-center p-3 rounded-2xl border transition-all active:scale-90 ${copied ? 'bg-green-500/20 border-green-500/40 text-green-400' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}>
                    {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button onClick={() => signOut()} className="p-3 rounded-2xl bg-white/5 hover:bg-rose-500/10 transition-all border border-white/5 group shadow-xl hover:border-white/10 active:scale-95">
                    <LogOut className="w-4 h-4 text-slate-500 group-hover:text-rose-400 font-black" />
                </button>
            </div>
        </div>
    );
}
