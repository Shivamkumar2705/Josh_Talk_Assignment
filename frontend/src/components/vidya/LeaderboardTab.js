import React from 'react';
import { Trophy, Medal, Flag, Award, ChevronRight, Sparkles } from 'lucide-react';

export default function LeaderboardTab() {
  const leaderboard = [
    {
      rank: 1,
      name: 'OpenAI (Copilot)',
      shortName: 'Copilot',
      score: 4.8,
      badge: 'Authenticity',
      icon: <Trophy className="text-amber-300" size={28} />,
      bgColor: 'bg-amber-500/15',
      borderColor: 'border-amber-400/40',
      badgeColor: 'bg-amber-500/20 text-amber-200',
      glow: 'shadow-[0_0_40px_-8px_rgba(251,191,36,0.45)]',
      podium: 'h-[200px] order-2 md:order-none',
    },
    {
      rank: 2,
      name: 'Gemini 3.1 Flash',
      shortName: 'Gemini 3.1',
      score: 4.5,
      badge: 'Scalability',
      icon: <Medal className="text-slate-200" size={26} />,
      bgColor: 'bg-slate-400/20',
      borderColor: 'border-slate-400/35',
      badgeColor: 'bg-slate-500/25 text-slate-200',
      glow: '',
      podium: 'h-[160px] order-1 md:order-none',
    },
    {
      rank: 3,
      name: 'Gemini 2.5 (Firefly)',
      shortName: 'Firefly',
      score: 4.2,
      badge: 'Precision',
      icon: <Medal className="text-orange-400" size={24} />,
      bgColor: 'bg-orange-600/15',
      borderColor: 'border-orange-500/35',
      badgeColor: 'bg-orange-500/20 text-orange-200',
      glow: '',
      podium: 'h-[130px] order-3 md:order-none',
    },
  ];

  const orderedForPodium = [leaderboard[1], leaderboard[0], leaderboard[2]];

  return (
    <div className="animate-pop-in space-y-10">
      <div className="text-center">
        <div className="mb-5 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-violet-600/15 p-4 shadow-lg ring-1 ring-white/5">
          <Award size={36} className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Final model rankings
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Cumulative scores from the cohort — tuned for Indian classroom realism and EdTech readiness.
        </p>
      </div>

      {/* Podium */}
      <div className="mx-auto flex max-w-3xl flex-col items-end justify-end gap-3 px-2 md:flex-row md:items-end md:justify-center md:gap-4">
        {orderedForPodium.map((model) => (
          <div
            key={model.rank}
            className={`flex w-full flex-col items-center md:w-[30%] ${model.podium}`}
          >
            <div
              className={`relative z-10 mb-3 w-full rounded-2xl border ${model.borderColor} ${model.bgColor} p-4 text-center ${model.glow} backdrop-blur-sm transition hover:scale-[1.02]`}
            >
              <div className="mb-2 flex justify-center">{model.icon}</div>
              <p className="text-sm font-bold text-white">{model.shortName}</p>
              <p className="font-mono text-lg font-bold text-cyan-300">{model.score}</p>
              <span
                className={`mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${model.badgeColor}`}
              >
                <Flag size={10} className="opacity-80" />
                {model.badge}
              </span>
            </div>
            <div
              className={`w-full rounded-t-xl bg-gradient-to-t from-slate-900 to-slate-800/80 ring-1 ring-white/10 ${
                model.rank === 1 ? 'min-h-[120px]' : model.rank === 2 ? 'min-h-[80px]' : 'min-h-[56px]'
              }`}
            >
              <div className="flex h-full items-center justify-center border-b border-white/5 py-2 text-2xl font-black text-white/20">
                {model.rank}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1222]/80 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#070b14]/90 px-5 py-4">
          <Sparkles size={16} className="text-violet-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Detailed breakdown</span>
        </div>
        <div className="grid grid-cols-12 gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:px-6">
          <div className="col-span-2 text-center sm:col-span-1">Rank</div>
          <div className="col-span-10 pl-2 sm:col-span-5">Model</div>
          <div className="col-span-6 hidden text-center sm:col-span-4 md:block">Highlight</div>
          <div className="col-span-4 hidden text-right sm:col-span-2 md:block">Score</div>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {leaderboard.map((model) => (
            <div
              key={model.rank}
              className="group relative grid grid-cols-12 items-center gap-2 px-4 py-5 transition hover:bg-white/[0.03] sm:px-6"
            >
              {model.rank === 1 && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/[0.06] via-transparent to-transparent" />
              )}

              <div className="relative z-10 col-span-2 flex justify-center sm:col-span-1">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${model.bgColor} ${model.borderColor}`}
                >
                  {model.icon}
                </div>
              </div>

              <div className="relative z-10 col-span-10 sm:col-span-5">
                <p className="flex items-center gap-2 text-base font-bold text-slate-100">
                  {model.name}
                  {model.rank === 1 && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                    </span>
                  )}
                </p>
                <div className="mt-2 space-y-2 md:hidden">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${model.badgeColor} border border-current`}
                  >
                    {model.badge}
                  </span>
                  <p className="text-sm text-slate-400">
                    Score:{' '}
                    <span className="font-mono font-bold text-white">{model.score}</span> / 5
                  </p>
                </div>
              </div>

              <div className="relative z-10 col-span-6 hidden justify-center md:flex">
                <span
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold ${model.badgeColor} border border-current shadow-sm transition group-hover:scale-[1.02]`}
                >
                  <Flag size={14} className="opacity-80" />
                  {model.badge}
                </span>
              </div>

              <div className="relative z-10 col-span-4 hidden items-center justify-end gap-3 md:flex">
                <div className="text-right">
                  <p className="font-mono text-xl font-black text-white">{model.score}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Out of 5</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-500 transition group-hover:border-cyan-500/40 group-hover:bg-cyan-500/15 group-hover:text-cyan-300">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
