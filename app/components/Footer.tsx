import { Mail, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 py-14">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">

        <div className="flex items-center gap-3">

          <Sparkles className="text-indigo-400" />

          <h2 className="gradient-text text-3xl font-black">
            InvestIQ
          </h2>

        </div>

        <p className="max-w-2xl text-gray-400">
          AI-powered investment research platform delivering
          company analysis, financial insights, risk assessment
          and intelligent BUY • HOLD • AVOID recommendations.
        </p>

        <div className="flex gap-5">

          <button className="glass rounded-full p-4 hover-card">
            <Mail />
          </button>

          <button className="glass rounded-full p-4 hover-card">
            <Globe />
          </button>

        </div>

        <p className="text-sm text-gray-500">
          © 2026 InvestIQ • Built using Next.js, Gemini AI & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}