import { Sparkles, Brain, ShieldCheck, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="fade-up">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">

              <Sparkles size={16} />

              AI Powered Financial Intelligence

            </div>

            <h1 className="text-6xl font-black leading-tight lg:text-7xl">

              Analyze

              <br />

              <span className="gradient-text">

                Smarter.

              </span>

              <br />

              Invest Better.

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

              InvestIQ uses Gemini AI to analyze public companies,
              evaluate financial health, estimate investment risks,
              and generate BUY, HOLD or AVOID recommendations
              within seconds.

            </p>

            <div className="mt-10 flex gap-5">

              <button className="primary-btn rounded-full px-8 py-4 font-semibold">

                Start Analysis

              </button>

              <button className="rounded-full border border-slate-700 px-8 py-4 hover:border-indigo-500">

                Learn More

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="float">

            <div className="glass rounded-3xl p-8">

              <div className="grid gap-5">

                <div className="hover-card rounded-2xl bg-slate-900/60 p-5">

                  <div className="flex items-center gap-4">

                    <TrendingUp className="text-green-400" />

                    <div>

                      <h3 className="font-bold">
                        Investment Score
                      </h3>

                      <p className="text-sm text-gray-400">
                        AI confidence based analysis
                      </p>

                    </div>

                  </div>

                </div>

                <div className="hover-card rounded-2xl bg-slate-900/60 p-5">

                  <div className="flex items-center gap-4">

                    <Brain className="text-indigo-400" />

                    <div>

                      <h3 className="font-bold">
                        Gemini AI
                      </h3>

                      <p className="text-sm text-gray-400">
                        Financial reasoning engine
                      </p>

                    </div>

                  </div>

                </div>

                <div className="hover-card rounded-2xl bg-slate-900/60 p-5">

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="text-cyan-400" />

                    <div>

                      <h3 className="font-bold">
                        Risk Assessment
                      </h3>

                      <p className="text-sm text-gray-400">
                        Detects investment risks
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}