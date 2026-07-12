interface Props {
  score: number;
}

export default function ScoreCircle({ score }: Props) {
  const color =
    score >= 80
      ? "from-green-400 to-emerald-600"
      : score >= 60
      ? "from-yellow-400 to-orange-500"
      : "from-red-400 to-red-600";

  const text =
    score >= 80
      ? "Excellent"
      : score >= 60
      ? "Average"
      : "Risky";

  return (
    <div className="flex flex-col items-center">

      <div
        className={`flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br ${color} p-2 shadow-2xl`}
      >

        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-slate-950">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Score
          </p>

          <h1 className="mt-2 text-6xl font-black text-white">
            {score}
          </h1>

          <p className="mt-3 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-gray-300">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}