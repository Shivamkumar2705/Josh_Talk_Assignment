import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Info, LayoutDashboard, BarChart3, Sparkles, FileText } from 'lucide-react';
import ArenaTab from '../components/vidya/ArenaTab';
import AnalyticsTab from '../components/vidya/AnalyticsTab';
import ReportTab from '../components/vidya/ReportTab';

const TABS = [
  { id: 'arena', label: 'Arena', short: 'Arena', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', short: 'Analytics', icon: BarChart3 },
  { id: 'report', label: 'Executive Report', short: 'Report', icon: FileText },
];

export default function VidyaDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get('tab');
  const activeTab = TABS.some((t) => t.id === raw) ? raw : 'arena';

  const setActiveTab = (id) => {
    setSearchParams({ tab: id }, { replace: true });
  };

  const TabIcon = TABS.find((x) => x.id === activeTab)?.icon ?? LayoutDashboard;

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
        <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-violet-600/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-cyan-600/[0.06] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070b14]/75 backdrop-blur-xl backdrop-saturate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-white/10 shadow-lg shadow-cyan-500/5">
                <Sparkles className="text-cyan-400" size={26} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/90 mb-1.5">
                  Josh Talks · Internal benchmark
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Project Vidya
                </h1>
                <p className="mt-1 text-sm text-slate-500 max-w-xl">
                  EdTech illustration benchmarking for rural Indian classrooms — compare models fairly, ship with confidence.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400 bg-white/[0.04] px-3 py-2 rounded-xl border border-white/[0.06] max-w-full">
                  <Info size={14} className="text-cyan-400 shrink-0" />
                  <span className="leading-snug">
                    Pick the right AI for textbook-style visuals, cultural accuracy, and classroom realism.
                  </span>
                </div>
              </div>
            </div>

            {/* Tab rail */}
            <nav
              className="flex flex-col sm:flex-row gap-3 xl:items-center"
              aria-label="Primary"
            >
              <div className="flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-inner shadow-black/20 overflow-x-auto max-w-[100vw] sm:max-w-none custom-scrollbar">
                {TABS.map(({ id, label, short, icon: Icon }) => {
                  const isOn = activeTab === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveTab(id)}
                      className={`relative flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isOn
                          ? 'text-white shadow-lg'
                          : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.04]'
                      }`}
                    >
                      {isOn && (
                        <span
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 opacity-100 shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)]"
                          aria-hidden
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <Icon size={17} strokeWidth={2} className={isOn ? 'text-white' : ''} />
                        <span className="hidden sm:inline">{label}</span>
                        <span className="sm:hidden">{short}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="hidden xl:flex items-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest pl-1">
                <TabIcon size={14} className="text-slate-500" />
                <span>View</span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <section
          key={activeTab}
          className="animate-fade-up"
          aria-labelledby={`panel-${activeTab}`}
        >
          <h2 id={`panel-${activeTab}`} className="sr-only">
            {TABS.find((t) => t.id === activeTab)?.label}
          </h2>
          {activeTab === 'arena' && <ArenaTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'report' && <ReportTab />}
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06] mt-8 py-8 text-center text-xs text-slate-600">
        <p>Project Vidya · Model comparison workflow · Share this view with <code className="text-slate-500 bg-white/[0.04] px-1.5 py-0.5 rounded">?tab={activeTab}</code></p>
      </footer>
    </div>
  );
}
