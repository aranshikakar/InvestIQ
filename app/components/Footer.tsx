import { Mail, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/60 py-14 backdrop-blur-sm">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">

        <div className="flex items-center gap-3">

          <Sparkles className="text-violet-600" size={28} />

          <h2 className="gradient-text text-3xl font-black">
            InvestIQ
          </h2>

        </div>

        <p className="max-w-2xl leading-7 text-slate-600">
          AI-powered investment research platform delivering
          company analysis, financial insights, risk assessment,
          and intelligent BUY • HOLD • AVOID recommendations.
        </p>

        <div className="flex gap-5">

          <button
            className="glass hover-card flex h-14 w-14 items-center justify-center rounded-full text-slate-600 transition hover:text-violet-600"
          >
            <Mail size={22} />
          </button>

          <button
            className="glass hover-card flex h-14 w-14 items-center justify-center rounded-full text-slate-600 transition hover:text-violet-600"
          >
            <Globe size={22} />
          </button>

        </div>

        <div className="h-px w-48 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />

        <p className="text-sm text-slate-500">
          © 2026 <span className="font-semibold text-slate-700">InvestIQ</span> • Built with{" "}
          <span className="font-medium text-violet-600">Next.js</span>,{" "}
          <span className="font-medium text-violet-600">Gemini AI</span> &{" "}
          <span className="font-medium text-violet-600">Tailwind CSS</span>
        </p>

      </div>

    </footer>
  );
}