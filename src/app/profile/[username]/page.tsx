import { prisma } from "@/src/lib/prisma";
import VibeCard from "@/src/components/VibeCard";
import Link from "next/link";
import { ArrowLeft, User, ArrowRight } from "lucide-react";
import { Metadata } from "next";

// DINAMIC METADATA UNTUK SEO & SOCIAL SHARING
export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const username = resolvedParams.username;
    return {
        title: `${username}'s Vibe | VibeCheck`,
        description: `Check out ${username}'s current social battery and mood on VibeCheck.`,
    };
}

export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
    const resolvedParams = await params;
    const { username } = resolvedParams;

    const user = await prisma.user.findFirst({
        where: {
            username: username
        },
        include: {
            vibes: {
                orderBy: { createdAt: "desc" },
                take: 1,
            },
        },
    });

    if (!user) {
        return (
            <main className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 text-white text-center">
                <h1 className="text-4xl font-black mb-2 italic tracking-tighter">Who's that?</h1>
                <p className="text-slate-400 text-sm">Username <span className="text-indigo-400 font-bold">@{username}</span> not found.</p>
                <Link href="/" className="mt-8 text-[10px] font-black uppercase tracking-widest text-indigo-400 border border-indigo-400/20 px-8 py-4 rounded-full hover:bg-indigo-400 hover:text-white transition-all">Go Home</Link>
            </main>
        );
    }

    const latestVibe = user.vibes[0];
    const vibe = {
        battery: latestVibe?.batteryLevel ?? 50,
        mood: latestVibe?.moodText ?? "Lagi Malu (Belum Update)",
        activity: latestVibe?.currentActivity ?? "Hanya Menunggu"
    };

    return (
        <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6 md:p-12">
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[40%] rounded-full bg-indigo-500 blur-[150px]" />
            </div>

            <div className="w-full max-w-sm relative z-10 space-y-10 group">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">
                        <User className="w-3 h-3" />
                        Live Status
                    </div>
                    <h2 className="text-2xl font-black italic tracking-tighter">@{user.username}'s Vibe.</h2>
                </div>

                <VibeCard
                    battery={vibe.battery}
                    mood={vibe.mood}
                    activity={vibe.activity}
                    username={user.username || ""}
                />

                <div className="pt-8 text-center px-4">
                    <Link
                        href="/register"
                        className="flex items-center justify-between w-full bg-white text-[#0f172a] p-6 rounded-[2rem] font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/10 group-hover:-translate-y-1"
                    >
                        <div className="flex flex-col items-start leading-tight">
                            <span className="text-[10px] uppercase opacity-50 tracking-tighter italic">Powered by VibeCheck.</span>
                            <span className="text-sm">Create your own?</span>
                        </div>
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                    </Link>
                </div>
            </div>
        </main>
    );
}