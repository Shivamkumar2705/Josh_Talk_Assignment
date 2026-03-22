import React, { useState } from 'react';
import { User, Mail, Calendar, CheckSquare, Sparkles, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import CopilotImg from '../../Assets/Copilot.png';
import Gemini31Img from '../../Assets/Gemini3_1flash.png';
import FireflyImg from '../../Assets/Firefly_GeminiFlash2_5.png';
import CopilotScreenshot from '../../Assets/copilotscreenshot.png';
import Gemini31Screenshot from '../../Assets/gemini3_1screenshot.png';
import Gemini25Screenshot from '../../Assets/gemini2_5screenshot.png';
import { FileText, Cpu, Globe, Settings, Image as ImageIcon } from 'lucide-react';

const commonPrompt = "A realistic, high-quality illustration for a 9th-grade science textbook. A female Indian teacher wearing a modest, simple cotton saree is standing in front of a green chalkboard, explaining the concept of gravity by dropping a cricket ball. The classroom is a typical Indian school setting with wooden benches. The students are diverse Indian children wearing standard school uniforms (light blue shirts and dark blue skirts/trousers), paying close attention. Natural daylight coming from a window.";

const models = [
  { 
    id: 'A', 
    name: 'Model A', 
    image: CopilotImg,
    company: 'OpenAI',
    modelName: 'DALL-E 3 (via Microsoft Copilot)',
    prompt: commonPrompt,
    generatedAt: 'copilot.microsoft.com',
    settings: 'Default "Creative" mode.',
    proof: CopilotScreenshot
  },
  { 
    id: 'B', 
    name: 'Model B', 
    image: Gemini31Img,
    company: 'Google',
    modelName: 'Gemini 3.1 Flash Image (Nano Banana 2)',
    prompt: commonPrompt,
    generatedAt: 'gemini.google.com (Gemini Web App)',
    settings: 'Generated via the Pro/Paid interface for higher-fidelity output.',
    proof: Gemini31Screenshot
  },
  { 
    id: 'C', 
    name: 'Model C', 
    image: FireflyImg,
    company: 'Google (via Adobe Partner)',
    modelName: 'Gemini 2.5 Flash (w/ Nano Banana)',
    prompt: commonPrompt,
    generatedAt: 'firefly.adobe.com (Partner Models Section)',
    settings: 'Aspect Ratio: Classic (5:4); Content Type: Art.',
    proof: Gemini25Screenshot
  },
];

export default function ArenaTab() {
  const [ratings, setRatings] = useState({
    A: { culture: 3, visual: 3, education: 3 },
    B: { culture: 3, visual: 3, education: 3 },
    C: { culture: 3, visual: 3, education: 3 },
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleRatingChange = (modelId, metric, value) => {
    setRatings(prev => ({
      ...prev,
      [modelId]: { ...prev[modelId], [metric]: value }
    }));
  };

  return (
    <div className="space-y-8 animate-pop-in">
      {/* Onboarding Form */}
      <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-100">
          <div className="p-1.5 bg-blue-500/10 rounded-lg">
            <User size={20} className="text-blue-400" />
          </div>
          Participant Onboarding
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
            <div className="relative group">
              <input type="text" className="w-full bg-slate-900/80 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. Rahul Sharma" />
              <User size={18} className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
            <div className="relative group">
              <input type="email" className="w-full bg-slate-900/80 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600" placeholder="rahul@example.com" />
              <Mail size={18} className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Age Group</label>
            <div className="relative group">
              <select className="w-full bg-slate-900/80 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                <option value="" className="bg-slate-900 text-slate-400">Select Age</option>
                <option value="18+" className="bg-slate-900 text-slate-200">18+ Years</option>
              </select>
              <Calendar size={18} className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 relative z-10 bg-slate-900/30 p-4 rounded-xl border border-slate-800/50">
          <div className="relative flex items-center justify-center mt-0.5">
            <input type="checkbox" id="consent" className="peer w-5 h-5 appearance-none border-2 border-slate-600 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer" />
            <CheckSquare size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
          </div>
          <label htmlFor="consent" className="text-sm text-slate-300 cursor-pointer select-none leading-relaxed">
            I consent to my data being used for hiring evaluation purposes.
          </label>
        </div>
      </div>

      {/* Model Rating Arena */}
      <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-100 pt-2">
        <div className="p-1.5 bg-purple-500/10 rounded-lg">
          <Sparkles size={20} className="text-purple-400" />
        </div>
        Evaluation Arena
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {models.map(model => (
          <div key={model.id} className="bg-slate-900 border border-slate-700/50 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-xl flex flex-col group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="p-5 flex items-center justify-between border-b border-slate-800 bg-slate-950/50">
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm text-blue-400 font-black border border-slate-700">
                  {model.id}
                </span>
                {model.name}
              </h3>
            </div>
            
            <div 
              className="h-72 relative flex items-center justify-center bg-slate-950 cursor-pointer group/img"
              onClick={() => setSelectedImage(model.image)}
            >
              <img 
                src={model.image} 
                alt={model.name} 
                className="max-w-full max-h-full object-contain group-hover/img:scale-[1.05] transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center z-10">
                <div className="opacity-0 group-hover/img:opacity-100 transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-300 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Maximize2 size={16} />
                  <span className="text-sm font-medium">Click to expand</span>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-950/20 z-20 pointer-events-none"></div>
            </div>
            
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-end bg-slate-800/20 backdrop-blur-sm z-10">
              <RatingSlider 
                label="Cultural Accuracy" 
                value={ratings[model.id].culture} 
                onChange={(v) => handleRatingChange(model.id, 'culture', v)} 
              />
              <RatingSlider 
                label="Visual Quality" 
                value={ratings[model.id].visual} 
                onChange={(v) => handleRatingChange(model.id, 'visual', v)} 
              />
              <RatingSlider 
                label="Educational Intent" 
                value={ratings[model.id].education} 
                onChange={(v) => handleRatingChange(model.id, 'education', v)} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Model Technical Specifications */}
      <div className="pt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-100 mb-6">
          <div className="p-1.5 bg-indigo-500/10 rounded-lg">
            <Settings size={20} className="text-indigo-400" />
          </div>
          Model Technical Specifications
        </h2>
        <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-8">
          {models.map(model => (
            <div key={`tech-${model.id}`} className="flex flex-col lg:flex-row gap-6 pb-8 border-b border-slate-700/50 last:border-0 last:pb-0 group/specs relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-500/0 group-hover/specs:bg-blue-500/50 transition-colors"></div>
              <div className="w-full lg:w-1/4 shrink-0 space-y-3">
                <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-blue-400 font-black border border-slate-700 shadow-sm">
                    {model.id}
                  </span>
                  {model.modelName}
                </h3>
                <p className="text-sm font-medium text-slate-400 flex items-center gap-1.5"><Cpu size={14}/> {model.company}</p>
                <div className="pt-2">
                  <a href={`https://${model.generatedAt.split(' ')[0]}`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit border border-emerald-500/20 transition-all shadow-sm">
                    <Globe size={12} />
                    {model.generatedAt}
                  </a>
                </div>
              </div>
              
              <div className="w-full lg:w-2/4 space-y-4">
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700/50 shadow-inner group-hover/specs:bg-slate-900/80 transition-colors">
                  <p className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <FileText size={14} className="text-amber-400" />
                    Shared Generation Prompt
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    "{model.prompt}"
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group-hover/specs:border-blue-500/20 transition-colors">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg shrink-0 mt-0.5">
                    <Settings size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Model Settings / Variations</p>
                    <p className="text-sm text-slate-200">{model.settings}</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/4 shrink-0 flex flex-col">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <ImageIcon size={14} />
                  Generation Proof
                </p>
                <div 
                  className="bg-slate-950 rounded-xl border border-slate-700/50 group-hover/specs:border-blue-500/40 transition-colors flex-1 min-h-[150px] relative overflow-hidden cursor-pointer group/proof"
                  onClick={() => setSelectedImage(model.proof)}
                  title="Click to view full screenshot in Modal"
                >
                  <img src={model.proof} alt={`${model.modelName} Proof`} className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover/specs:opacity-100 group-hover/proof:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/proof:opacity-100 transition-opacity">
                    <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium">
                      <Maximize2 size={12} /> Expand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end pt-6 pb-12">
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 transition-all active:scale-[0.98] flex items-center gap-3 group">
          Submit Evaluation
          <CheckSquare size={18} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {selectedImage && (
        <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

function RatingSlider({ label, value, onChange }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-300 font-medium tracking-wide">{label}</span>
        <span className="text-blue-400 font-bold bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20 shadow-sm">
          {value}/5
        </span>
      </div>
      <div className="relative flex items-center">
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2.5 bg-slate-700/80 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all"
        />
      </div>
      <div className="flex justify-between text-[11px] font-medium text-slate-500 uppercase tracking-wider px-1">
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </div>
  );
}

function ImageModal({ imageSrc, onClose }) {
  const [scale, setScale] = useState(1);
  
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };
  
  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-pop-in">
      {/* Controls */}
      <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
        <div className="flex bg-slate-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700 shadow-xl">
          <button onClick={handleZoomOut} className="p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition" title="Zoom Out">
            <ZoomOut size={24} />
          </button>
          <div className="w-px bg-slate-700"></div>
          <button onClick={handleZoomIn} className="p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition" title="Zoom In">
            <ZoomIn size={24} />
          </button>
        </div>
        <button onClick={onClose} className="p-3 bg-slate-800/80 backdrop-blur-md text-slate-300 hover:text-white hover:bg-red-500/80 rounded-xl border border-slate-700 shadow-xl transition" title="Close">
          <X size={24} />
        </button>
      </div>

      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center overflow-auto custom-scrollbar relative" onClick={onClose}>
        <div className="min-w-full min-h-full flex items-center justify-center p-8" onClick={e => e.stopPropagation()}>
          <img 
            src={imageSrc} 
            alt="Expanded view" 
            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-200 ease-out shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-xl"
            style={{ transform: `scale(${scale})`, transformOrigin: 'center' }} 
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
