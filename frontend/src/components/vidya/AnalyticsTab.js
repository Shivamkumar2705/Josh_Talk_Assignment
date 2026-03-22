import React, { useMemo, useState } from 'react';
import { BarChart3, MessageSquareQuote, TrendingUp, Users, Filter } from 'lucide-react';
import LeaderboardTab from './LeaderboardTab';

const FILTERS = [
  { id: 'all', label: 'All quotes' },
  { id: 'Model A', label: 'Model A' },
  { id: 'Model B', label: 'Model B' },
  { id: 'Model C', label: 'Model C' },
];

const CHART_DATA = [
  { name: 'Model A (Copilot)', score: 4.8, color: 'from-indigo-500 to-violet-500' },
  { name: 'Model B (Gemini 3.1)', score: 4.5, color: 'from-emerald-500 to-teal-500' },
  { name: 'Model C (Firefly/Gemini 2.5)', score: 4.2, color: 'from-amber-500 to-orange-500' },
];

const INSIGHTS = [
    {
      id: 'Rahul',
      role: 'CS Senior',
      quote: 'Firefly actually generated the correct Newtonian physics formula on the board. Huge plus.',
      rating: 5,
      model: 'Model C',
    },
    {
      id: 'Sneha',
      role: 'IT/UX',
      quote: 'Gemini 3.1 has the cleanest layout. It looks ready to drop straight into an EdTech app.',
      rating: 5,
      model: 'Model B',
    },
    {
      id: 'Amit',
      role: 'Mechanical',
      quote: 'Copilot nailed the texture of the wooden desks and the physical chalkboard.',
      rating: 5,
      model: 'Model A',
    },
    {
      id: 'Anjali',
      role: 'CS',
      quote: 'Gemini 3.1 generated the cleanest English text on the board without typical AI hallucinations.',
      rating: 5,
      model: 'Model B',
    },
];

export default function AnalyticsTab() {
  const [quoteFilter, setQuoteFilter] = useState('all');

  const filteredInsights = useMemo(() => {
    if (quoteFilter === 'all') return INSIGHTS;
    return INSIGHTS.filter((i) => i.model === quoteFilter);
  }, [quoteFilter]);

  return (
    <div className="space-y-12 animate-pop-in">
      <LeaderboardTab />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { icon: Users, label: 'Total participants', value: '8', sub: 'Engineering cohort', accent: 'text-cyan-400', bg: 'from-cyan-500/15 to-cyan-500/5' },
          { icon: TrendingUp, label: 'Avg. completion', value: '4m 12s', sub: 'Per evaluation', accent: 'text-violet-400', bg: 'from-violet-500/15 to-violet-500/5' },
          { icon: BarChart3, label: 'Evaluations logged', value: '24', sub: '3 models × 8 runs', accent: 'text-emerald-400', bg: 'from-emerald-500/15 to-emerald-500/5' },
        ].map((card) => (
          <div
            key={card.label}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition hover:border-white/15"
          >
            <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${card.bg} blur-2xl`} />
            <div className="relative flex items-start gap-4">
              <div className={`rounded-xl bg-white/[0.06] p-3 ${card.accent}`}>
                <card.icon size={24} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white">{card.value}</p>
                <p className="mt-1 text-xs text-slate-600">{card.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1222]/60 p-6 sm:p-8 shadow-xl">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
          <h2 className="relative z-10 mb-8 flex items-center gap-2 text-xl font-semibold text-white">
            <span className="rounded-xl bg-indigo-500/15 p-2 text-indigo-300">
              <BarChart3 size={22} />
            </span>
            Average sentiment scores
          </h2>
          <div className="relative z-10 space-y-6">
            {CHART_DATA.map((data) => (
              <div key={data.name} className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-medium text-slate-300">{data.name}</span>
                  <span className="font-mono text-sm font-bold text-white">
                    {data.score} <span className="font-normal text-slate-500">/ 5</span>
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800/90 ring-1 ring-white/5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${data.color} shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-[width] duration-700 ease-out`}
                    style={{ width: `${(data.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1222]/60 p-6 sm:p-8 shadow-xl">
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-white">
              <span className="rounded-xl bg-emerald-500/15 p-2 text-emerald-300">
                <MessageSquareQuote size={22} />
              </span>
              Qualitative insights
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                <Filter size={12} />
                Filter
              </span>
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setQuoteFilter(f.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    quoteFilter === f.id
                      ? 'bg-gradient-to-r from-cyan-600 to-violet-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-h-[420px] space-y-3 overflow-y-auto pr-1 custom-scrollbar">
            {filteredInsights.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-500">No quotes for this filter.</p>
            ) : (
              filteredInsights.map((insight, index) => (
                <div
                  key={`${insight.id}-${index}`}
                  className="group rounded-2xl border border-white/[0.06] bg-[#070b14]/80 p-4 transition hover:border-emerald-500/25"
                >
                  <MessageSquareQuote
                    size={22}
                    className="float-right text-slate-800 transition group-hover:text-emerald-500/30"
                  />
                  <p className="text-sm italic leading-relaxed text-slate-200">"{insight.quote}"</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3">
                    <div>
                      <span className="text-sm font-bold text-slate-100">{insight.id}</span>
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {insight.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                        {insight.model}
                      </span>
                      <div className="flex text-amber-400">
                        {[...Array(insight.rating)].map((_, i) => (
                          <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
