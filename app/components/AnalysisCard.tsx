import ScoreCircle from "./ScoreCircle";
import FinancialCards from "./FinancialCards";
import RevenueChart from "./RevenueChart";
import RiskPieChart from "./RiskPieChart";

interface Props {
  company: string;
  summary: string;
  score: number;
  status: string;
  recommendation: string;
  strengths: string[];
  risks: string[];
  financials: {
    revenueGrowth: string;
    marketPosition: string;
    riskLevel: string;
    futureOutlook: string;
  };
  chartData: {
    year: string;
    revenue: number;
  }[];
  riskData: {
    name: string;
    value: number;
  }[];
}

export default function AnalysisCard({
  company,
  summary,
  score,
  status,
  recommendation,
  strengths,
  risks,
  financials,
  chartData,
  riskData,
}: Props) {

  const recommendationStyle =
    recommendation === "BUY"
      ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
      : recommendation === "HOLD"
      ? "bg-amber-100 text-amber-700 border border-amber-300"
      : "bg-red-100 text-red-700 border border-red-300";

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="glass rounded-3xl p-8">

        <div className="grid items-center gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <h1 className="text-5xl font-bold text-slate-900">
              {company}
            </h1>

            <p className="mt-5 leading-8 text-slate-600">
              {summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-full border border-violet-200 bg-violet-50 px-5 py-2 font-semibold text-violet-700">
                {status}
              </div>

              <div
                className={`rounded-full px-6 py-2 text-lg font-bold ${recommendationStyle}`}
              >
                {recommendation}
              </div>

            </div>

          </div>

          <div className="flex justify-center">

            <ScoreCircle score={score} />

          </div>

        </div>

      </div>

      <FinancialCards financials={financials} />

      <div className="grid gap-8 lg:grid-cols-2">

        <RevenueChart data={chartData} />

        <RiskPieChart data={riskData} />

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Strengths */}

        <div className="glass rounded-3xl p-8">

          <h2 className="mb-6 text-2xl font-bold text-emerald-600">
            Key Strengths
          </h2>

          <div className="space-y-4">

            {strengths.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-slate-700 shadow-sm"
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </div>

        {/* Risks */}

        <div className="glass rounded-3xl p-8">

          <h2 className="mb-6 text-2xl font-bold text-red-600">
            Key Risks
          </h2>

          <div className="space-y-4">

            {risks.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-red-100 bg-red-50 p-4 text-slate-700 shadow-sm"
              >
                ⚠️ {item}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}