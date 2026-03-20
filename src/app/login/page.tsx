"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { LogIn, Loader2, ArrowLeft } from "lucide-react";
import { useLogin } from "@/src/hooks/useLogin";

export default function LoginPage() {
    const { formData, loading, error, handleLogin, updateForm } = useLogin();

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[#0f172a] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 rounded-full bg-fuchsia-500 blur-[120px]" />
            </div>

            <div className="w-full max-w-md relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-all text-xs font-bold uppercase tracking-widest group px-2">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    Home
                </Link>

                <div className="bg-white/[0.02] backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                    <header className="text-center mb-10">
                        <h1 className="text-3xl font-black text-white italic tracking-tighter italic uppercase">Vibe Check.</h1>
                        <p className="text-slate-500 text-sm mt-2 font-medium">Welcome back, creator.</p>
                    </header>

                    {error && (
                        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-6 text-center animate-pulse">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <InputField label="Username" placeholder="vibe_user" value={formData.username} onChange={(val: string) => updateForm("username", val)} />
                        <InputField label="Password" placeholder="••••••••" type="password" value={formData.password} onChange={(val: string) => updateForm("password", val)} />

                        <button disabled={loading} className="w-full bg-white text-indigo-950 hover:bg-indigo-50 py-5 rounded-2xl font-black transition-all mt-4 flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50">
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <LogIn className="w-5 h-5" />}
                            Sign In
                        </button>
                        <button 
                            onClick={() => signIn("google", { callbackUrl: "/" })} 
                            className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 py-4 rounded-2xl font-bold transition-all text-sm mb-4"
                        >
                            <img 
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                                className="w-5 h-5" 
                                alt="Google" 
                            />
                            Continue with Google
                        </button>
                    </form>

                    <footer className="text-center mt-8 pt-4">
                        <p className="text-xs text-slate-500 font-bold">
                            New here? <Link href="/register" className="text-indigo-400 hover:underline underline-offset-4 font-bold tracking-tight">Create Account</Link>
                        </p>
                    </footer>
                </div>
            </div>
        </main>
    );
}

function InputField({ label, placeholder, value, onChange, type = "text" }: any) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{label}</label>
            <input
                type={type} required value={value}
                onChange={(e: any) => onChange(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-indigo-500/50 outline-none transition-all placeholder:text-slate-800 text-sm"
                placeholder={placeholder}
            />
        </div>
    );
}