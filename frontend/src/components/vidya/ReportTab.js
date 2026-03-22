import React from 'react';
import { Download, FileText, CheckCircle, Globe, Lightbulb, Users, FileBarChart } from 'lucide-react';
import CopilotImg from '../../Assets/Copilot.png';
import Gemini31Img from '../../Assets/Gemini3_1flash.png';
import FireflyImg from '../../Assets/Firefly_GeminiFlash2_5.png';

export default function ReportTab() {
  return (
    <div className="animate-pop-in max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Actions */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
          <Download size={18} />
          Download PDF Report
        </button>
      </div>

      {/* Main Document */}
      <div className="bg-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 text-slate-100 font-sans overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none z-0"></div>
        
        {/* Header Block */}
        <div className="bg-slate-800/50 border-b border-slate-700/50 p-8 sm:p-12 text-center relative overflow-hidden z-10">
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Project Vidya</p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 mb-4 tracking-tight">Final Evaluation Report</h1>
          <p className="text-lg text-slate-400 font-medium">EdTech Illustration Benchmark</p>
        </div>

        <div className="p-8 sm:p-12 space-y-12 relative z-10">
          
          {/* Section 1: The Eval & Setup */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-200 mb-4 border-b border-slate-700/50 pb-2">
              <FileBarChart className="text-blue-400" size={24} />
              The Setup
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              Evaluated 3 multimodal AI models (OpenAI, Gemini 3.1, Gemini 2.5) using a cohort of 8 final-year B.Tech students to assess technical accuracy and UI/UX applicability for Indian EdTech.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 shadow-inner">
                <p className="font-bold text-slate-200 mb-2">The Prompt Scenario</p>
                <p className="text-sm text-slate-400">A specific science lesson scenario (Teacher in saree explaining gravity using a cricket ball).</p>
              </div>
              <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-slate-200">Participants</span>
                  <div className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold px-2.5 py-0.5 rounded-full">N = 8</div>
                </div>
                <p className="text-sm text-slate-400">8 final-year engineering students evaluating technical precision, aesthetics, and production readiness for digital textbook assets.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Why India? */}
          <section className="bg-blue-900/10 -mx-8 sm:-mx-12 px-8 sm:px-12 py-8 border-y border-blue-500/10 relative">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-200 mb-4">
              <Globe className="text-blue-400" size={24} />
              The 'Why India?' Context
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg font-medium">
              AI labs need to evaluate for regional context. Generic models often fail at specific cultural markers like authentic saree drapes, accurate Indian school uniforms, or realistic rural classroom architecture.
            </p>
          </section>

          {/* Section 3: Summary Table & Models */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-200 mb-6 border-b border-slate-700/50 pb-2">
              <CheckCircle className="text-emerald-400" size={24} />
              Main Findings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Model A */}
              <div className="border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-500 transition-colors bg-slate-800/40 flex flex-col shadow-lg">
                <img src={CopilotImg} alt="OpenAI" className="w-full h-40 object-cover border-b border-slate-700/50" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-200 text-lg mb-1">Model A (OpenAI)</h3>
                  <div>
                    <span className="inline-block bg-yellow-500/10 text-yellow-500 text-xs font-bold px-2.5 py-1.5 rounded-md mb-3 border border-yellow-500/30">Winner: Realism and Texture</span>
                  </div>
                  <p className="text-sm text-slate-300 mt-auto">Won on "Realism and Texture" (No AI artifacts in the environment).</p>
                </div>
              </div>
              
              {/* Model B */}
              <div className="border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-500 transition-colors bg-slate-800/40 flex flex-col shadow-lg">
                <img src={Gemini31Img} alt="Gemini 3.1" className="w-full h-40 object-cover border-b border-slate-700/50" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-200 text-lg mb-1">Model B (Gemini 3.1)</h3>
                  <div>
                    <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-bold px-2.5 py-1.5 rounded-md mb-3 border border-blue-500/30">Winner: App Integration</span>
                  </div>
                  <p className="text-sm text-slate-300 mt-auto">Won on "App Integration" (Clean text generation and consistent illustration style for scaling).</p>
                </div>
              </div>

              {/* Model C */}
              <div className="border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-500 transition-colors bg-slate-800/40 flex flex-col shadow-lg">
                <img src={FireflyImg} alt="Gemini 2.5" className="w-full h-40 object-cover border-b border-slate-700/50" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-200 text-lg mb-1">Model C (Gemini 2.5)</h3>
                  <div>
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1.5 rounded-md mb-3 border border-emerald-500/30">Winner: Technical Precision</span>
                  </div>
                  <p className="text-sm text-slate-300 mt-auto">Won on "Technical Precision" (Accurate mathematical formulas).</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800/80 text-slate-100 p-6 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-slate-700/50 relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-300">
                <Lightbulb size={20} className="text-yellow-400" />
                The Engineering Takeaway
              </h3>
              <p className="text-slate-300 leading-relaxed font-normal text-base relative z-10">
                While Copilot is artistically superior, Gemini 3.1 is the most production-ready model for an engineering team building a scalable, textbook-style digital curriculum.
              </p>
            </div>
          </section>

          {/* Section 4: Human Insights */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-200 mb-6 border-b border-slate-700/50 pb-2">
              <Users className="text-indigo-400" size={24} />
              Voice of the User (Engineering Cohort)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl relative shadow-md hover:border-blue-500/30 transition-colors">
                <p className="text-slate-300 italic font-medium leading-relaxed mb-4">"Firefly actually generated the correct Newtonian physics formula on the board. Huge plus."</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-slate-200 text-sm">Rahul</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-700/60 px-2 py-1 rounded shadow-inner">CS Senior</span>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl relative shadow-md hover:border-blue-500/30 transition-colors">
                <p className="text-slate-300 italic font-medium leading-relaxed mb-4">"Gemini 3.1 generated the cleanest English text on the board without typical AI hallucinations."</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-slate-200 text-sm">Anjali</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-700/60 px-2 py-1 rounded shadow-inner">CS Student</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: How to Scale */}
          <section>
            <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-slate-700/50 pb-2">Scaling Strategy: Production Rollout</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 shadow-inner">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0 shadow-sm border border-blue-500/30">1</div>
                <p className="text-slate-300 mt-2 font-medium">Automate prompt engineering mapping to Indian regional curriculums via centralized CMS.</p>
              </div>
              <div className="flex gap-4 items-start bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 shadow-inner">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0 shadow-sm border border-blue-500/30">2</div>
                <p className="text-slate-300 mt-2 font-medium">Deploy Gemini 3.1 as the default image generation microservice within the EdTech pipeline.</p>
              </div>
              <div className="flex gap-4 items-start bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 shadow-inner">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0 shadow-sm border border-blue-500/30">3</div>
                <p className="text-slate-300 mt-2 font-medium">Capture human-in-the-loop QA data to further fine-tune textbook style consistency.</p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-6 border-t border-slate-700/80">
            <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase flex items-start sm:items-center gap-2 leading-relaxed">
              <span className="p-1 bg-slate-800 rounded text-slate-400 shrink-0 border border-slate-700"><FileText size={12}/></span>
              Technical Workflow Note: Dashboard optimized for an internal engineering/product review cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
