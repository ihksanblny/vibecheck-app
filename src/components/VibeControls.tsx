"use client";

interface VibeControlsProps {
  battery: number;
  mood: string;
  activity: string;
  setVibe: (vibe: any) => void;
}

export default function VibeControls({ battery, mood, activity, setVibe }: VibeControlsProps) {
  return (
    <div className="space-y-5 bg-white/[0.02] border border-white/5 p-6 rounded-[2rem]">
      <div className="space-y-1">
        <div className="flex justify-between items-end">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Battery Power</label>
          <span className="text-xs font-black text-indigo-400">{battery}%</span>
        </div>
        <input 
          type="range" value={battery} 
          onChange={(e) => setVibe({ battery: Number(e.target.value), mood, activity })}
          className="w-full accent-indigo-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer mt-1"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Vibe Description</label>
        <input 
          type="text" value={mood} 
          onChange={(e) => setVibe({ battery, mood: e.target.value, activity })}
          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 transition-all outline-none"
          placeholder="What's the mood?"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">The Scene</label>
        <input 
          type="text" value={activity} 
          onChange={(e) => setVibe({ battery, mood, activity: e.target.value })}
          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 transition-all outline-none"
          placeholder="Currently doing..."
        />
      </div>
    </div>
  );
}