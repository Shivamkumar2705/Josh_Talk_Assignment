import React from 'react';
import toast from 'react-hot-toast';
import { Download, FileText, CheckCircle, Globe, Lightbulb, Users, FileBarChart, Printer } from 'lucide-react';
import { CopilotImg, Gemini31Img, FireflyImg } from '../../Assets/modelPlaceholders';

export default function ReportTab() {
  const handleDownload = () => {
    toast.success('PDF export would run here — use Print → Save as PDF for a quick deck.', {
      duration: 4000,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-pop-in mx-auto max-w-5xl space-y-6 pb-12 print:max-w-none print:pb-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end print:hidden">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
        >
          <Printer size={18} />
          Print view
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 active:scale-[0.98]"
        >
          <Download size={18} />
          Download PDF report
        </button>
      </div>

      <article className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1222] text-slate-100 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5 print:border print:shadow-none">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl print:hidden" />

        <header className="relative border-b border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-transparent px-6 py-12 text-center sm:px-12 sm:py-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400/90">Project Vidya</p>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Final evaluation report</h1>
          <p className="mt-4 text-lg font-medium text-slate-400">EdTech illustration benchmark · Indian classroom context</p>
        </header>

        <div className="space-y-12 px-6 py-10 sm:px-12 sm:py-12">
          <section>
            <h2 className="mb-6 flex items-center gap-3 border-b border-white/[0.06] pb-3 text-2xl font-bold text-white">
              <FileBarChart className="text-cyan-400" size={26} strokeWidth={1.75} />
              The setup
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Evaluated three multimodal AI models (OpenAI, Gemini 3.1, Gemini 2.5) with a cohort of eight final-year B.Tech students to
              assess technical accuracy and UI/UX fit for Indian EdTech.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <p className="mb-2 font-bold text-white">Prompt scenario</p>
                <p className="text-sm leading-relaxed text-slate-400">
                  A science lesson scene: teacher in saree, gravity demo with a cricket ball, realistic Indian classroom.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-bold text-white">Participants</span>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/15 px-2.5 py-0.5 text-xs font-bold text-cyan-300">
                    N = 8
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  Engineering students scoring precision, aesthetics, and production readiness for textbook assets.
                </p>
              </div>
            </div>
          </section>

          <section className="-mx-6 border-y border-cyan-500/10 bg-cyan-500/[0.04] px-6 py-10 sm:-mx-12 sm:px-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
              <Globe className="text-cyan-400" size={26} strokeWidth={1.75} />
              Why India matters
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-300">
              Generic models often miss regional cues: authentic saree drape, correct school uniforms, believable rural classroom architecture.
              Benchmarking with Indian reviewers closes that gap before content ships to students.
            </p>
          </section>

          <section>
            <h2 className="mb-8 flex items-center gap-3 border-b border-white/[0.06] pb-3 text-2xl font-bold text-white">
              <CheckCircle className="text-emerald-400" size={26} strokeWidth={1.75} />
              Main findings
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  img: CopilotImg,
                  title: 'Model A (OpenAI)',
                  tag: 'Realism & texture',
                  tagStyle: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300',
                  body: 'Strongest environment realism and physical props (desks, chalkboard).',
                },
                {
                  img: Gemini31Img,
                  title: 'Model B (Gemini 3.1)',
                  tag: 'App integration',
                  tagStyle: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-200',
                  body: 'Cleanest layout and text on the board — best for scalable curriculum UI.',
                },
                {
                  img: FireflyImg,
                  title: 'Model C (Gemini 2.5)',
                  tag: 'Technical precision',
                  tagStyle: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
                  body: 'Sharpest on-board formulas and lesson accuracy when physics matters.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-lg transition hover:border-white/10"
                >
                  <img src={card.img} alt="" className="h-40 w-full border-b border-white/[0.06] object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <span className={`mt-2 inline-block w-fit rounded-lg border px-2.5 py-1 text-xs font-bold ${card.tagStyle}`}>
                      {card.tag}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-900 to-[#0c1222] p-6 sm:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-cyan-200">
                <Lightbulb size={22} className="text-amber-300" />
                Engineering takeaway
              </h3>
              <p className="relative z-10 max-w-3xl leading-relaxed text-slate-300">
                Copilot leads on artistry; Gemini 3.1 is the most production-ready for a team shipping scalable, textbook-style digital curriculum.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-8 flex items-center gap-3 border-b border-white/[0.06] pb-3 text-2xl font-bold text-white">
              <Users className="text-violet-400" size={26} strokeWidth={1.75} />
              Voice of the cohort
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <figure className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition hover:border-violet-500/25">
                <blockquote className="text-slate-300 font-medium italic leading-relaxed">
                  "Firefly actually generated the correct Newtonian physics formula on the board. Huge plus."
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="text-sm font-bold text-white">Rahul</span>
                  <span className="rounded-md bg-slate-800/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    CS Senior
                  </span>
                </figcaption>
              </figure>
              <figure className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition hover:border-violet-500/25">
                <blockquote className="text-slate-300 font-medium italic leading-relaxed">
                  "Gemini 3.1 generated the cleanest English text on the board without typical AI hallucinations."
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="text-sm font-bold text-white">Anjali</span>
                  <span className="rounded-md bg-slate-800/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    CS
                  </span>
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="mb-6 border-b border-white/[0.06] pb-3 text-2xl font-bold text-white">Scaling strategy</h2>
            <div className="space-y-4">
              {[
                'Automate prompt templates mapped to Indian regional curriculums via a centralized CMS.',
                'Deploy Gemini 3.1 as the default image generation step in the EdTech pipeline.',
                'Keep human-in-the-loop QA to lock textbook style and consistency over time.',
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-300">
                    {i + 1}
                  </div>
                  <p className="pt-2 font-medium leading-relaxed text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="border-t border-white/[0.08] pt-8">
            <p className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <span className="rounded border border-white/10 bg-white/[0.04] p-1 text-slate-500">
                <FileText size={12} />
              </span>
              Internal engineering & product review — Project Vidya dashboard.
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
