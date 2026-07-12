import {
  TrendingUp,
  Building2,
  ShieldAlert,
  Rocket,
} from "lucide-react";

interface Props {
  financials: {
    revenueGrowth: string;
    marketPosition: string;
    riskLevel: string;
    futureOutlook: string;
  };
}

export default function FinancialCards({
  financials,
}: Props) {

  const cards = [
    {
      title: "Revenue",
      value: financials.revenueGrowth,
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Position",
      value: financials.marketPosition,
      icon: Building2,
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      title: "Risk",
      value: financials.riskLevel,
      icon: ShieldAlert,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      title: "Outlook",
      value: financials.futureOutlook,
      icon: Rocket,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="glass hover-card rounded-3xl p-6"
          >

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg}`}
            >
              <Icon className={card.color} size={30} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {card.title}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              {card.value}
            </h2>

          </div>

        );

      })}

    </div>
  );
}