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
  const recommendationColor =
    recommendation === "BUY"
      ? "bg-green-500"
      : recommendation === "HOLD"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

        <div className="grid lg:grid-cols-3 gap-8 items-center">

          <div className="lg:col-span-2">

            <h1 className="text-5xl font-bold text-white">
              {company}
            </h1>

            <p className="mt-5 text-gray-300 leading-7">
              {summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-full bg-blue-600 px-5 py-2 text-white font-semibold">
                {status}
              </div>

              <div
                className={`rounded-full px-8 py-2 text-lg font-bold text-white ${recommendationColor}`}
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

        <div className="rounded-3xl border border-green-500/20 bg-slate-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Key Strengths
          </h2>

          <div className="space-y-4">

            {strengths.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-slate-800 p-4 text-gray-300"
              >
                ✅ {item}
              </div>
            ))}

          </div>

        </div>

        {/* Risks */}

        <div className="rounded-3xl border border-red-500/20 bg-slate-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-red-400">
            Key Risks
          </h2>

          <div className="space-y-4">

            {risks.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-slate-800 p-4 text-gray-300"
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