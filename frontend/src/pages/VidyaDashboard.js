import React, { useState } from 'react';
import { Info, LayoutDashboard, BarChart3, Trophy } from 'lucide-react';
import ArenaTab from '../components/vidya/ArenaTab';
import AnalyticsTab from '../components/vidya/AnalyticsTab';
import LeaderboardTab from '../components/vidya/LeaderboardTab';
import ReportTab from '../components/vidya/ReportTab';
import { FileText } from 'lucide-react';

export default function VidyaDashboard() {
  const [activeTab, setActiveTab] = useState('arena');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Project Vidya: EdTech Model Benchmarking
            </h1>
            <div className="flex items-center gap-2 mt-2 text-sm text-slate-400 bg-slate-800/50 w-fit px-3 py-1.5 rounded-full border border-slate-700/50">
              <Info size={16} className="text-blue-400 shrink-0" />
              <p>This tool helps Josh Talks choose the right AI for rural Indian students.</p>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/50 shadow-lg">
            <button
              onClick={() => setActiveTab('arena')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'arena' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <LayoutDashboard size={16} />
              Arena
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <BarChart3 size={16} />
              Analytics Dashboard
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'report' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <FileText size={16} />
              Executive Report
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:py-8">
        {activeTab === 'arena' && <ArenaTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
        {activeTab === 'report' && <ReportTab />}
      </main>
    </div>
  );
}
