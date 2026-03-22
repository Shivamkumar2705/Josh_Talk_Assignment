import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import {
  User,
  Mail,
  Calendar,
  CheckSquare,
  Sparkles,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileText,
  Cpu,
  Globe,
  Settings,
  Image as ImageIcon,
  RotateCcw,
  TrendingUp,
} from 'lucide-react';
import {
  CopilotImg,
  Gemini31Img,
  FireflyImg,
  CopilotScreenshot,
  Gemini31Screenshot,
  Gemini25Screenshot,
} from '../../Assets/modelPlaceholders';

const commonPrompt =
  'A realistic, high-quality illustration for a 9th-grade science textbook. A female Indian teacher wearing a modest, simple cotton saree is standing in front of a green chalkboard, explaining the concept of gravity by dropping a cricket ball. The classroom is a typical Indian school setting with wooden benches. The students are diverse Indian children wearing standard school uniforms (light blue shirts and dark blue skirts/trousers), paying close attention. Natural daylight coming from a window.';

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
    proof: CopilotScreenshot,
    accent: 'from-blue-600/20 to-cyan-500/10',
    ring: 'ring-cyan-500/30',
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
    proof: Gemini31Screenshot,
    accent: 'from-emerald-600/20 to-teal-500/10',
    ring: 'ring-emerald-500/30',
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
    proof: Gemini25Screenshot,
    accent: 'from-orange-600/20 to-amber-500/10',
    ring: 'ring-orange-500/30',
  },
];

function avgScore(r) {
  return ((r.culture + r.visual + r.education) / 3).toFixed(2);
}

export default function ArenaTab() {
  const [ratings, setRatings] = useState({
    A: { culture: 3, visual: 3, education: 3 },
    B: { culture: 3, visual: 3, education: 3 },
    C: { culture: 3, visual: 3, education: 3 },
  });
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [consent, setConsent] = useState(false);
  const [participant, setParticipant] = useState({ name: '', email: '', age: '' });

  const handleRatingChange = (modelId, metric, value) => {
    setRatings((prev) => ({
      ...prev,
      [modelId]: { ...prev[modelId], [metric]: value },
    }));
  };

  const resetRatings = () => {
    setRatings({
      A: { culture: 3, visual: 3, education: 3 },
      B: { culture: 3, visual: 3, education: 3 },
      C: { culture: 3, visual: 3, education: 3 },
    });
    toast.success('Sliders reset to midpoint.');
  };

  const leaderboardPreview = useMemo(() => {
    return models
      .map((m) => ({
        id: m.id,
        name: m.name,
        score: parseFloat(avgScore(ratings[m.id])),
      }))
      .sort((a, b) => b.score - a.score);
  }, [ratings]);

  const handleSubmit = () => {
    if (!consent) {
      toast.error('Please confirm consent before submitting.');
      return;
    }
    if (!participant.name.trim() || !participant.email.trim()) {
      toast.error('Add your name and email so we can attribute feedback.');
      return;
    }
    try {
      const payload = { participant, ratings, at: new Date().toISOString() };
      localStorage.setItem('vidya_last_eval', JSON.stringify(payload));
    } catch {
      /* ignore quota */
    }
    toast.success('Evaluation saved locally. Thank you for the detailed review!');
  };

  return (
    <div className="space-y-10 animate-pop-in">
      {/* Onboarding */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-white/10">
                <User size={20} className="text-cyan-300" />
              </span>
              Participant onboarding
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Tell us who is scoring — we use this only for cohort analytics and hiring evaluation, per your consent below.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300/90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Session active
          </span>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="ml-1 text-sm font-medium text-slate-400">Full name</label>
            <div className="group relative">
              <input
                type="text"
                value={participant.name}
                onChange={(e) => setParticipant((p) => ({ ...p, name: e.target.value }))}
                className="w-full rounded-xl border border-white/[0.08] bg-[#0c1222] py-3 pl-11 pr-4 text-slate-200 placeholder:text-slate-600 transition focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/25"
                placeholder="e.g. Rahul Sharma"
              />
              <User size={18} className="absolute left-4 top-3.5 text-slate-500 transition group-focus-within:text-cyan-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-sm font-medium text-slate-400">Email</label>
            <div className="group relative">
              <input
                type="email"
                value={participant.email}
                onChange={(e) => setParticipant((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-xl border border-white/[0.08] bg-[#0c1222] py-3 pl-11 pr-4 text-slate-200 placeholder:text-slate-600 transition focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/25"
                placeholder="rahul@example.com"
              />
              <Mail size={18} className="absolute left-4 top-3.5 text-slate-500 transition group-focus-within:text-cyan-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-sm font-medium text-slate-400">Age group</label>
            <div className="group relative">
              <select
                value={participant.age}
                onChange={(e) => setParticipant((p) => ({ ...p, age: e.target.value }))}
                className="w-full cursor-pointer appearance-none rounded-xl border border-white/[0.08] bg-[#0c1222] py-3 pl-11 pr-4 text-slate-200 transition focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/25"
              >
                <option value="">Select</option>
                <option value="18+">18+ years</option>
                <option value="under18">Under 18</option>
              </select>
              <Calendar size={18} className="pointer-events-none absolute left-4 top-3.5 text-slate-500 transition group-focus-within:text-cyan-400" />
            </div>
          </div>
        </div>

        <label className="relative z-10 mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.06] bg-[#0c1222]/60 p-4 transition hover:border-white/10">
          <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-600 transition checked:border-cyan-500 checked:bg-cyan-600"
            />
            <CheckSquare
              size={14}
              className="pointer-events-none absolute text-white opacity-0 transition peer-checked:opacity-100"
            />
          </div>
          <span className="text-sm leading-relaxed text-slate-300">
            I consent to my feedback being used for hiring evaluation and internal product research.
          </span>
        </label>
      </div>

      {/* Live summary */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <TrendingUp className="text-cyan-400" size={22} />
                Live score preview
              </h2>
              <p className="mt-1 text-sm text-slate-500">Weighted average of culture, visual, and educational intent (1–5).</p>
            </div>
            <button
              type="button"
              onClick={resetRatings}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08]"
            >
              <RotateCcw size={16} />
              Reset sliders
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {leaderboardPreview.map((row, i) => (
              <div key={row.id} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xs font-bold text-slate-400">
                  #{i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="truncate font-medium text-slate-200">{row.name}</span>
                    <span className="shrink-0 font-mono text-cyan-300">{row.score}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-500"
                      style={{ width: `${(row.score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-dashed border-white/15 bg-[#0c1222]/80 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Quick tips</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2">
              <span className="text-cyan-500">→</span>
              Click any image to open the lightbox with zoom.
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400">→</span>
              Rate independently — there is no “right” order.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">→</span>
              Main renders and proof screenshots load from <code className="text-slate-500">src/Assets</code> — swap files there to update visuals.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/25">
            <Sparkles className="text-violet-300" size={20} />
          </span>
          Evaluation arena
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {models.map((model) => (
          <div
            key={model.id}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1222] shadow-xl shadow-black/30 transition hover:border-white/15 hover:shadow-cyan-500/5`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-b opacity-0 transition duration-500 group-hover:opacity-100 ${model.accent}`}
            />
            <div className="relative flex items-center justify-between border-b border-white/[0.06] bg-[#070b14]/40 px-5 py-4 backdrop-blur-sm">
              <h3 className="flex items-center gap-3 font-bold text-slate-100">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border bg-white/[0.05] text-sm font-black text-cyan-300 ${model.ring} ring-1`}
                >
                  {model.id}
                </span>
                {model.name}
              </h3>
            </div>

            <button
              type="button"
              className="relative h-72 cursor-pointer bg-[#050810] group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
              onClick={() => setLightboxSrc(model.image)}
            >
              <img
                src={model.image}
                alt={model.name}
                className="mx-auto h-full w-full object-contain transition duration-700 ease-out group-hover/img:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover/img:bg-black/25">
                <div className="translate-y-3 opacity-0 transition group-hover/img:translate-y-0 group-hover/img:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Maximize2 size={16} />
                    Expand
                  </span>
                </div>
              </div>
            </button>

            <div className="relative z-10 flex flex-1 flex-col justify-end space-y-5 border-t border-white/[0.05] bg-[#0a0f1a]/90 p-6 backdrop-blur-md">
              <RatingSlider
                label="Cultural accuracy"
                value={ratings[model.id].culture}
                onChange={(v) => handleRatingChange(model.id, 'culture', v)}
              />
              <RatingSlider
                label="Visual quality"
                value={ratings[model.id].visual}
                onChange={(v) => handleRatingChange(model.id, 'visual', v)}
              />
              <RatingSlider
                label="Educational intent"
                value={ratings[model.id].education}
                onChange={(v) => handleRatingChange(model.id, 'education', v)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Technical specs */}
      <div className="pt-4">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/25">
            <Settings className="text-indigo-300" size={20} />
          </span>
          Model specifications
        </h2>
        <div className="space-y-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
          {models.map((model) => (
            <div
              key={`tech-${model.id}`}
              className="group/specs relative flex flex-col gap-6 border-b border-white/[0.06] pb-8 last:border-0 last:pb-0 lg:flex-row"
            >
              <div className="w-full shrink-0 space-y-3 lg:w-1/4">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-100">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-xs font-black text-cyan-400">
                    {model.id}
                  </span>
                  {model.modelName}
                </h3>
                <p className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                  <Cpu size={14} /> {model.company}
                </p>
                <a
                  href={`https://${model.generatedAt.split(' ')[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <Globe size={12} />
                  {model.generatedAt}
                </a>
              </div>

              <div className="w-full space-y-4 lg:w-2/4">
                <div className="rounded-2xl border border-white/[0.06] bg-[#0c1222]/80 p-5 shadow-inner transition group-hover/specs:border-white/10">
                  <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-400/90">
                    <FileText size={14} />
                    Shared prompt
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">"{model.prompt}"</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <div className="mt-0.5 rounded-lg bg-cyan-500/15 p-1.5">
                    <Settings size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Settings</p>
                    <p className="mt-1 text-sm text-slate-200">{model.settings}</p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col lg:w-1/4">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  <ImageIcon size={14} />
                  Generation proof
                </p>
                <button
                  type="button"
                  className="group/proof relative min-h-[150px] flex-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050810] text-left transition hover:border-cyan-500/40"
                  onClick={() => setLightboxSrc(model.proof)}
                >
                  <img
                    src={model.proof}
                    alt={`${model.modelName} proof`}
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-80 transition duration-500 group-hover/proof:scale-105 group-hover/proof:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover/proof:opacity-100">
                    <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      <Maximize2 size={12} /> View
                    </span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-stretch justify-end gap-4 border-t border-white/[0.06] pt-8 pb-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-500">
          Submitting stores a snapshot in <strong className="text-slate-400">localStorage</strong> for demo purposes.
        </p>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110 active:scale-[0.98]"
        >
          Submit evaluation
          <CheckSquare size={18} />
        </button>
      </div>

      {lightboxSrc && <ImageModal imageSrc={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  );
}

function RatingSlider({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-300">{label}</span>
        <span className="rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-sm font-bold text-cyan-300">
          {value}/5
        </span>
      </div>
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="vidya-range h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800"
      />
      <div className="flex justify-between px-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-600">
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </div>
  );
}

function ImageModal({ imageSrc, onClose }) {
  const [scale, setScale] = useState(1);

  return (
    <div
      className="fixed inset-0 z-[100] flex animate-pop-in items-center justify-center overflow-auto bg-[#030508]/88 p-3 pt-14 backdrop-blur-sm sm:p-4 sm:pt-16"
      role="dialog"
      aria-modal
      aria-label="Image preview"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute right-2 top-2 z-[120] flex items-center gap-1.5 sm:right-3 sm:top-3">
        <div className="pointer-events-auto flex overflow-hidden rounded-xl border border-white/10 bg-[#0c1222]/90 shadow-xl backdrop-blur-md">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setScale((s) => Math.max(0.5, s - 0.25));
            }}
            className="p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white sm:p-3"
            title="Zoom out"
          >
            <ZoomOut size={22} />
          </button>
          <div className="w-px bg-white/10" />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setScale((s) => Math.min(4, s + 0.25));
            }}
            className="p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white sm:p-3"
            title="Zoom in"
          >
            <ZoomIn size={22} />
          </button>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="pointer-events-auto rounded-xl border border-white/10 bg-[#0c1222]/90 p-2.5 text-slate-300 shadow-xl backdrop-blur-md transition hover:bg-red-500/80 hover:text-white sm:p-3"
          title="Close"
        >
          <X size={22} />
        </button>
      </div>

      {/* Wrapper hugs image size (only max caps); no full-viewport flex column */}
      <div
        className="pointer-events-auto inline-flex max-h-[min(92vh,calc(100vh-5rem))] max-w-[calc(100vw-1.5rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt="Expanded"
          className="block h-auto max-h-[min(92vh,calc(100vh-5rem))] w-auto max-w-[calc(100vw-1.5rem)] rounded-lg object-contain shadow-[0_0_32px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
