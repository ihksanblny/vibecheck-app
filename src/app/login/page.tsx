"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useLogin } from "@/src/hooks/useLogin";
import { Zap, ArrowLeft, Loader2, Eye, EyeOff, Sun, Moon } from "lucide-react";

export default function LoginPage() {
    const { formData, loading, error, handleLogin, updateForm } = useLogin();
    const [showPassword, setShowPassword] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const colors = {
        bg: isDark ? "bg-[#020617]" : "bg-[#f8fafc]",
        card: isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200 shadow-xl",
        input: isDark ? "bg-white/5 border-white/5 focus:border-indigo-500/50" : "bg-slate-50 border-slate-200 focus:border-indigo-500",
        text: isDark ? "text-white" : "text-slate-900",
        subtext: isDark ? "text-slate-500" : "text-slate-400"
    };

    return (
        <main className={`min-h-screen ${colors.bg} ${colors.text} flex transition-colors duration-500 relative overflow-hidden`}>
            {/* LEFT SIDE: HD IMAGE COVER */}
            <div className="hidden lg:block w-1/2 relative overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
                    alt="Cyber Vibe"
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-transparent to-[#020617]' : 'from-transparent to-[#f8fafc]'}`} />
                <div className="absolute bottom-20 left-20 z-10 max-w-md">
                    <div className="w-10 h-1 h-1 bg-indigo-500 mb-6 rounded-full" />
                    <h2 className="text-5xl font-black italic tracking-tighter leading-none mb-4 text-white">SYNC YOUR <br />REALITY.</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-white/50">VibeCheck Protocol v2.0</p>
                </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`absolute top-10 right-10 p-3 rounded-2xl border transition-all active:scale-90 z-20 ${isDark ? 'bg-white/5 border-white/10 text-indigo-400' : 'bg-slate-100 border-slate-200 text-indigo-600'}`}
                >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <div className="w-full max-w-md relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-500 transition-colors mb-8 group pl-2">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        Vibe Entry
                    </Link>

                    <div className={`backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 border ${colors.card}`}>
                        <div className="flex flex-col items-center text-center mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20 mb-6 group-hover:rotate-12 transition-transform">
                                <Zap className="w-6 h-6 fill-white text-white" />
                            </div>
                            <h1 className="text-3xl font-black italic tracking-tighter mb-2 underline decoration-indigo-500/20 underline-offset-8">Initialize.</h1>
                            <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${colors.subtext}`}>Sync your social energy</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Access Point (Username)</label>
                                <input
                                    type="text"
                                    placeholder="pixel_ghost"
                                    value={formData.username}
                                    onChange={(e) => updateForm("username", e.target.value)}
                                    className={`w-full px-6 py-4 rounded-2xl border outline-none font-bold text-sm transition-all focus:ring-4 focus:ring-indigo-500/10 ${colors.input}`}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-4 mr-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Security Key</label>
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-500 hover:text-indigo-500 transition-colors">
                                        {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                                    </button>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => updateForm("password", e.target.value)}
                                    className={`w-full px-6 py-4 rounded-2xl border outline-none font-bold text-sm transition-all focus:ring-4 focus:ring-indigo-500/10 ${colors.input}`}
                                    required
                                />
                            </div>

                            {error && (
                                <div className="bg-rose-500/10 border border-rose-500/20 px-4 py-3 rounded-2xl">
                                    <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest text-center">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 py-5 rounded-2xl font-black text-white text-sm tracking-widest uppercase transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center justify-center gap-2 group"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access System"}
                                {!loading && <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>

                        <div className="my-10 flex items-center gap-4">
                            <div className="h-[1px] flex-1 bg-white/5" />
                            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-700">Rapid Entry</span>
                            <div className="h-[1px] flex-1 bg-white/5" />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <button
                                onClick={(e) => { e.preventDefault(); signIn("google", { callbackUrl: "/" }); }}
                                className={`flex items-center justify-center gap-4 py-4 rounded-2xl border font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-white'}`}
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                                Sign in with Google
                            </button>
                        </div>

                        <p className="mt-12 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            No energy signature?{" "}
                            <Link href="/register" className="text-indigo-500 hover:underline decoration-white/10 decoration-2 font-black">Initialize</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}