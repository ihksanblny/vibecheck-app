"use client";

import { Share2, Zap, ShieldCheck } from "lucide-react";

const FEATURES = [
    { icon: <Share2 className="w-6 h-6 text-indigo-500" />, title: "Instant Share.", desc: "Broadcast your status anywhere with a custom high-res image export." },
    { icon: <Zap className="w-6 h-6 text-emerald-500" />, title: "Pulse Presets.", desc: "Switch your vibe instantly with one-tap status presets for any mission." },
    { icon: <ShieldCheck className="w-6 h-6 text-rose-500" />, title: "Cloud Sync.", desc: "Your historical vibe logs stored securely in the mission archives." }
];

export default function Features({ colors }: any) {
    return (
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-6 mx-auto relative z-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            {FEATURES.map((f, i) => (
                <div key={i} className={`border p-10 rounded-[3rem] text-left hover:-translate-y-1 transition-all group ${colors.card}`}>
                    <div className="mb-8 group-hover:scale-110 transition-transform">{f.icon}</div>
                    <h3 className="font-black text-sm uppercase tracking-widest mb-4">{f.title}</h3>
                    <p className={`text-[11px] leading-[1.8] font-medium ${colors.subtext}`}>{f.desc}</p>
                </div>
            ))}
        </div>
    );
}
