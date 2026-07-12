"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#7C3AED", // Primary Violet
  "#A855F7", // Purple
  "#10B981", // Emerald
  "#F59E0B", // Amber
];

export default function RiskPieChart({ data }: Props) {
  return (
    <div className="glass rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Risk Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={105}
              innerRadius={55}
              paddingAngle={3}
              label={({ name, percent }) =>
  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
}
            >

              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                color: "#0F172A",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}