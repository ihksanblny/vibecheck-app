"use client";

import { useEffect, useState } from "react";
import DiscoveryCard from "../discovery/DiscoveryCard";

export default function Discovery({ isDark }: { isDark: boolean }) {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVibes = async () => {
            try {
                const res = await fetch("/api/vibes/all");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error("Discovery error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchVibes();
    }, []);

    if (loading) return (
        <div className="py-20 text-center flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Syncing Network...</p>
        </div>
    );

    return (
        <section className="pt-32 pb-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-indigo-500 rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500">Social Discovery</span>
                        </div>
                        <h2 className={`text-4xl md:text-7xl font-black italic tracking-tighter leading-[1] md:leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            PULSE OF THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-600">COMMUNITY.</span>
                        </h2>
                    </div>
                </div>

                {/* Modular Feed Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {users.map((user) => (
                        <DiscoveryCard key={user.id} user={user} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
}