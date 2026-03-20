"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRegister } from "@/src/hooks/useRegister";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import AuthLayout from "@/src/components/auth/AuthLayout";

export default function RegisterPage() {
  const { formData, loading, error, handleRegister, updateForm } = useRegister();
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
    <AuthLayout
      isDark={isDark} toggleDark={() => setIsDark(!isDark)} colors={colors}
      image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
      title="START YOUR <br/> JOURNEY." subtitle="Establish Identity v1.0"
    >
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-6 group-hover:rotate-12 transition-transform">
          <CheckCircle2 className="w-6 h-6 fill-white text-white" />
        </div>
        <h1 className="text-3xl font-black italic tracking-tighter mb-2 underline decoration-emerald-500/20 underline-offset-8 uppercase">Establish.</h1>
        <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${colors.subtext}`}>Sync your social energy</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Universal ID</label>
          <input type="text" placeholder="pixel_ghost" value={formData.username} onChange={(e) => updateForm("username", e.target.value)} className={`w-full px-6 py-4 rounded-2xl border outline-none font-bold text-sm transition-all focus:ring-4 ${colors.input}`} required />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-4">Portal Email</label>
          <input type="email" placeholder="name@portal.com" value={formData.name} onChange={(e) => updateForm("name", e.target.value)} className={`w-full px-6 py-4 rounded-2xl border outline-none font-bold text-sm transition-all focus:ring-4 ${colors.input}`} required />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-4 mr-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Security Key</label>
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-500 hover:text-emerald-500 transition-all font-black text-[8px] uppercase">{showPassword ? "Hide" : "Show"}</button>
          </div>
          <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={(e) => updateForm("password", e.target.value)} className={`w-full px-6 py-4 rounded-2xl border outline-none font-bold text-sm transition-all focus:ring-4 ${colors.input}`} required />
        </div>

        {error && <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest text-center animate-pulse">{error}</p>}

        <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 py-5 rounded-2xl font-black text-white text-sm tracking-widest uppercase transition-all shadow-xl shadow-emerald-600/20 active:scale-95 flex items-center justify-center gap-2 group mt-4">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Establish Profile"}
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-white/5" /><span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-700">Rapid Registry</span><div className="h-[1px] flex-1 bg-white/5" />
      </div>

      <button onClick={(e) => { e.preventDefault(); signIn("google", { callbackUrl: "/" }); }} className={`w-full flex items-center justify-center gap-4 py-4 rounded-2xl border font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-200'}`}>
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" /> Sign up with Google
      </button>

      <p className="mt-10 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
        Got an identity? <Link href="/login" className="text-white hover:text-emerald-400 font-black underline decoration-emerald-500/50 underline-offset-4 decoration-2">Access</Link>
      </p>
    </AuthLayout>
  );
}