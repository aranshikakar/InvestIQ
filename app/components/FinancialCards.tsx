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
      color: "text-green-400",
    },
    {
      title: "Position",
      value: financials.marketPosition,
      icon: Building2,
      color: "text-blue-400",
    },
    {
      title: "Risk",
      value: financials.riskLevel,
      icon: ShieldAlert,
      color: "text-red-400",
    },
    {
      title: "Outlook",
      value: financials.futureOutlook,
      icon: Rocket,
      color: "text-purple-400",
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
            <Icon className={`${card.color}`} size={34} />

            <p className="mt-5 text-sm uppercase tracking-widest text-gray-400">
              {card.title}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              {card.value}
            </h2>
          </div>
        );
      })}

    </div>
  );
}