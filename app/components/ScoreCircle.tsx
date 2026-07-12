interface Props {
  score: number;
}

export default function ScoreCircle({ score }: Props) {

  const color =
    score >= 80
      ? "from-emerald-400 via-emerald-500 to-green-600"
      : score >= 60
      ? "from-amber-300 via-orange-400 to-orange-500"
      : "from-red-400 via-red-500 to-red-600";

  const text =
    score >= 80
      ? "Excellent"
      : score >= 60
      ? "Average"
      : "Risky";

  const badgeColor =
    score >= 80
      ? "bg-emerald-100 text-emerald-700"
      : score >= 60
      ? "bg-amber-100 text-amber-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="flex flex-col items-center">

      <div
        className={`flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br ${color} p-[6px] shadow-xl`}
      >

        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Score
          </p>

          <h1 className="mt-2 text-6xl font-black text-slate-900">
            {score}
          </h1>

          <p
            className={`mt-4 rounded-full px-5 py-2 text-sm font-semibold ${badgeColor}`}
          >
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}