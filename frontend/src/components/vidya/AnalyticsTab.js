import React from 'react';
import { BarChart3, MessageSquareQuote, TrendingUp, Users } from 'lucide-react';
import LeaderboardTab from './LeaderboardTab';

export default function AnalyticsTab() {
  const chartData = [
    { name: 'Model A (Copilot)', score: 4.8, color: 'bg-indigo-500' },
    { name: 'Model B (Gemini 3.1)', score: 4.5, color: 'bg-emerald-500' },
    { name: 'Model C (Firefly/Gemini 2.5)', score: 4.2, color: 'bg-amber-500' },
  ];

  const insights = [
    {
      id: 'Rahul',
      role: 'CS Senior',
      quote: "Firefly actually generated the correct Newtonian physics formula on the board. Huge plus.",
      rating: 5,
      model: 'Model C'
    },
    {
      id: 'Sneha',
      role: 'IT/UX',
      quote: "Gemini 3.1 has the cleanest layout. It looks ready to drop straight into an EdTech app.",
      rating: 5,
      model: 'Model B'
    },
    {
      id: 'Amit',
      role: 'Mechanical',
      quote: "Copilot nailed the texture of the wooden desks and the physical chalkboard.",
      rating: 5,
      model: 'Model A'
    },
    {
      id: 'Anjali',
      role: 'CS',
      quote: "Gemini 3.1 generated the cleanest English text on the board without typical AI hallucinations.",
      rating: 5,
      model: 'Model B'
    }
  ];

  return (
    <div className="space-y-12 animate-pop-in">
      <LeaderboardTab />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:bg-slate-800/60 transition-colors">
          <div className="p-4 bg-blue-500/10 text-blue-400 rounded-xl">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Total Participants</p>
            <p className="text-2xl font-bold text-slate-100">8</p>
          </div>
        </div>
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:bg-slate-800/60 transition-colors">
          <div className="p-4 bg-purple-500/10 text-purple-400 rounded-xl">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Avg Completion Time</p>
            <p className="text-2xl font-bold text-slate-100">4m 12s</p>
          </div>
        </div>
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:bg-slate-800/60 transition-colors">
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <BarChart3 size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Total Evaluations</p>
            <p className="text-2xl font-bold text-slate-100">24</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Charts Section */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <h2 className="text-xl font-semibold mb-8 flex items-center gap-2 text-slate-100 relative z-10">
            <div className="p-1.5 bg-indigo-500/10 rounded-lg">
              <BarChart3 size={20} className="text-indigo-400" />
            </div>
            Average Sentiment Scores
          </h2>
          
          <div className="space-y-8 flex-1 flex flex-col justify-center relative z-10">
            {chartData.map((data, index) => (
              <div key={index} className="space-y-2 group">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-slate-300 group-hover:text-slate-200 transition-colors">{data.name}</span>
                  <span className="text-sm font-bold text-slate-100">{data.score} <span className="text-slate-500 font-normal">/ 5</span></span>
                </div>
                <div className="w-full bg-slate-900/80 rounded-full h-3.5 shadow-inner overflow-hidden border border-slate-800">
                  <div 
                    className={`${data.color} h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                    style={{ width: `${(data.score / 5) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualitative Insights Section */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
          
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-100 relative z-10">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg">
              <MessageSquareQuote size={20} className="text-emerald-400" />
            </div>
            Qualitative Insights
          </h2>
          
          <div className="space-y-4 relative z-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {insights.map((insight, index) => (
              <div key={index} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-colors relative group">
                <MessageSquareQuote size={24} className="text-slate-700 absolute top-4 right-4 group-hover:text-emerald-500/20 transition-colors" />
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-slate-200 text-sm leading-relaxed mb-3 italic">"{insight.quote}"</p>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-800/80">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-300">{insight.id}</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">{insight.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">{insight.model}</span>
                        <div className="flex text-amber-400">
                          {[...Array(insight.rating)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
