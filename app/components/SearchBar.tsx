"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import AnalysisCard from "./AnalysisCard";

export default function SearchBar() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const quickCompanies = [
    "Apple",
    "Microsoft",
    "Tesla",
    "NVIDIA",
    "Amazon",
    "Google",
  ];

  const handleSearch = async () => {
    if (!company.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Unable to analyze company.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <div className="glass rounded-3xl p-8">

          <div className="mb-8 text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 font-medium text-violet-700">

              <Sparkles size={18} />

              AI Company Analysis

            </div>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">

              Search Any Company

            </h2>

            <p className="mt-3 text-slate-600">

              Enter a company name to receive an AI-powered investment analysis.

            </p>

          </div>

          <div className="flex flex-col gap-5 md:flex-row">

            <div className="relative flex-1">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={22}
              />

              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Apple, Microsoft, Tesla..."
                className="w-full rounded-2xl border border-slate-300 bg-white py-5 pl-14 pr-5 text-lg text-slate-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />

            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className="primary-btn rounded-2xl px-10 py-5 font-bold"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            {quickCompanies.map((item) => (

              <button
                key={item}
                onClick={() => setCompany(item)}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {loading && (

          <div className="mt-16 text-center">

            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>

            <p className="mt-6 text-lg text-slate-600">

              Gemini AI is analyzing the company...

            </p>

          </div>

        )}

        {result && (

          <div className="mt-16">

            <AnalysisCard
              company={result.company}
              summary={result.summary}
              score={result.score}
              status={result.status}
              recommendation={result.recommendation}
              strengths={result.strengths}
              risks={result.risks}
              financials={result.financials}
              chartData={result.chartData}
              riskData={result.riskData}
            />

          </div>

        )}

      </div>

    </section>
  );
}