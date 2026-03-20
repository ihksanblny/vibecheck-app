"use client";

import React, { forwardRef } from "react";
import { Battery, Zap, Heart, Activity } from "lucide-react";

interface VibeCardProps {
  battery: number;
  mood: string;
  activity: string;
  username: string;
  musicUrl?: string; // TAMBAHKAN INI
}

const VibeCard = forwardRef<HTMLDivElement, VibeCardProps>(
  ({ battery, mood, activity, username, musicUrl }, ref) => {

    // Fungsi untuk Convert Link Spotify/Apple jadi Embed
    const getEmbedUrl = (url: string) => {
      if (!url) return null;
      if (url.includes("spotify.com")) {
        return url.replace("open.spotify.com/", "open.spotify.com/embed/");
      }
      if (url.includes("music.apple.com")) {
        return url.replace("music.apple.com/", "embed.music.apple.com/");
      }
      return null;
    };

    const embedUrl = getEmbedUrl(musicUrl || "");
    // Tentukan warna berdasarkan level baterai
    const getTheme = (level: number) => {
      if (level > 70) return { grad: "from-emerald-400 to-cyan-400", text: "text-emerald-400", fill: "fill-emerald-400/20" };
      if (level > 30) return { grad: "from-indigo-400 to-violet-400", text: "text-indigo-400", fill: "fill-indigo-400/20" };
      return { grad: "from-rose-400 to-orange-400", text: "text-rose-400", fill: "fill-rose-400/20" };
    };

    const theme = getTheme(battery);

    return (
      <div
        ref={ref}
        className="relative w-full h-auto min-h-[550px] bg-[#1e293b]/40 backdrop-blur-3xl rounded-[3rem] p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden group transition-all duration-500 hover:border-white/20"
      >
        {/* Dynamic Glow Background */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${theme.grad} opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity`} />

        {/* Content Header */}
        <div className="relative z-10 flex justify-between items-center mb-8 sm:mb-12">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Live Status</p>
            <h3 className="text-lg sm:text-xl font-black italic tracking-tighter text-white">@{username || "human"}</h3>
          </div>
          <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md shadow-inner">
            <Zap className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.text} ${theme.fill}`} />
          </div>
        </div>

        {/* Big Battery Percentage */}
        <div className="relative z-10 flex flex-col items-center justify-center my-6 sm:my-10">
          <div className="relative inline-block w-full text-center">
            <span className={`text-7xl sm:text-[120px] font-black italic tracking-tighter leading-none bg-gradient-to-b ${theme.grad} bg-clip-text text-transparent opacity-90 block`}>
              {battery}%
            </span>

            {/* Visual Bar Subtitle */}
            <div className="mt-8 mx-auto w-full max-w-[200px] h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${theme.grad} transition-all duration-1000 ease-out`}
                style={{ width: `${battery}%` }}
              />
            </div>
          </div>
          <p className="mt-6 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 text-center">Social energy</p>
        </div>

        {/* Mood & Activity - Optimized for Mobile Stack */}
        <div className="relative z-10 mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-white/5 border border-white/5 p-4 sm:p-5 rounded-[2rem] space-y-2 group/item hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-2 text-rose-400">
              <Heart className="w-3 h-3 fill-rose-400/20" />
              <span className="text-[8px] font-black uppercase tracking-widest">Mood</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-white leading-tight capitalize truncate">{mood}</p>
          </div>

          <div className="bg-white/5 border border-white/5 p-4 sm:p-5 rounded-[2rem] space-y-2 group/item hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400">
              <Activity className="w-3 h-3" />
              <span className="text-[8px] font-black uppercase tracking-widest">Doing</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-white leading-tight capitalize truncate">{activity}</p>
          </div>
        </div>

        {/* Music Player Section */}
        {embedUrl && (
          <div className="relative z-10 mt-4 sm:mt-6 animate-in fade-in zoom-in-95 duration-700">
            <div className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src={embedUrl}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="mix-blend-lighten opacity-90 hover:opacity-100 transition-opacity rounded-2xl"
              />
            </div>
          </div>
        )}

        {/* Footer Details */}
        <div className="relative z-10 mt-8 sm:mt-12 flex justify-between items-center opacity-30 pb-4">
          <div className="hidden sm:flex gap-1">
            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white"></div>)}
          </div>
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] leading-none text-center w-full sm:w-auto">VibeCheck Engine v2.0</p>
        </div>
      </div>
    );
  }
);

VibeCard.displayName = "VibeCard";
export default VibeCard;