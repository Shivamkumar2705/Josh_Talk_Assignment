import React from 'react';
import { Trophy, Medal, Flag, Award, ChevronRight } from 'lucide-react';

export default function LeaderboardTab() {
  const leaderboard = [
    {
      rank: 1,
      name: 'OpenAI (Copilot)',
      score: 4.8,
      badge: 'Winner: Authenticity',
      icon: <Trophy className="text-yellow-400" size={28} />,
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      badgeColor: 'bg-yellow-500/20 text-yellow-300'
    },
    {
      rank: 2,
      name: 'Gemini 3.1 Flash',
      score: 4.5,
      badge: 'Winner: Scalability',
      icon: <Medal className="text-slate-300" size={28} />,
      bgColor: 'bg-slate-300/10',
      borderColor: 'border-slate-400/30',
      badgeColor: 'bg-slate-400/20 text-slate-300'
    },
    {
      rank: 3,
      name: 'Gemini 2.5 Flash (via Firefly)',
      score: 4.2,
      badge: 'Winner: Precision',
      icon: <Medal className="text-amber-600" size={28} />,
      bgColor: 'bg-amber-600/10',
      borderColor: 'border-amber-600/30',
      badgeColor: 'bg-amber-600/20 text-amber-500'
    }
  ];

  return (
    <div className="space-y-8 animate-pop-in max-w-5xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl shadow-lg border border-slate-700/50 mb-4 ring-1 ring-white/5">
          <Award size={40} className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Final Model Rankings
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Based on the cumulative evaluations of AI-generated educational content for Indian rural students.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-700/50 text-slate-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] ring-1 ring-white/5 backdrop-blur-xl">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-6 bg-slate-950/80 border-b border-slate-800 text-sm font-semibold tracking-wider text-slate-400 uppercase">
          <div className="col-span-2 md:col-span-1 text-center">Rank</div>
          <div className="col-span-10 md:col-span-4 pl-4">AI Model</div>
          <div className="hidden md:block col-span-5 text-center">Distinction Badge</div>
          <div className="hidden md:block col-span-2 text-right pr-4">Avg Score</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-slate-800/80 bg-slate-900/50">
          {leaderboard.map((model, index) => (
            <div 
              key={index}
              className={`grid grid-cols-12 gap-4 p-6 items-center transition-all duration-300 hover:bg-slate-800/60 group relative overflow-hidden`}
            >
              {/* Highlight gradient for winner */}
              {model.rank === 1 && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent pointer-events-none"></div>
              )}
              
              {/* Desktop view */}
              <div className="col-span-2 md:col-span-1 flex justify-center relative z-10">
                <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border ${model.bgColor} ${model.borderColor} shadow-inner`}>
                  {model.icon}
                </div>
              </div>
              
              <div className="col-span-10 md:col-span-4 pl-4 relative z-10">
                <p className="font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {model.name}
                  {model.rank === 1 && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span></span>}
                </p>
                {/* Mobile only badge & score layout */}
                <div className="md:hidden mt-3 space-y-3">
                  <div className={`inline-flex px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${model.badgeColor} border border-current shadow-sm`}>
                    {model.badge}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                    <span>Score:</span>
                    <span className="text-slate-200 font-bold bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">{model.score} / 5</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex col-span-5 justify-center relative z-10">
                <div className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide flex items-center gap-2 shadow-sm ${model.badgeColor} border border-current transition-transform group-hover:scale-105`}>
                  <Flag size={14} className="opacity-80" />
                  {model.badge}
                </div>
              </div>
              
              <div className="hidden md:flex col-span-2 justify-end items-center gap-3 pr-2 relative z-10">
                <div className="text-right">
                  <p className="font-black text-xl text-slate-100">{model.score}</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Out of 5</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
