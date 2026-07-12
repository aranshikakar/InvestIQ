"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    year: string;
    revenue: number;
  }[];
}

export default function RevenueChart({ data }: Props) {
  return (
    <div className="glass rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Revenue Trend
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="year"
              tick={{ fill: "#64748B", fontSize: 13 }}
              axisLine={{ stroke: "#CBD5E1" }}
              tickLine={{ stroke: "#CBD5E1" }}
            />

            <YAxis
              tick={{ fill: "#64748B", fontSize: 13 }}
              axisLine={{ stroke: "#CBD5E1" }}
              tickLine={{ stroke: "#CBD5E1" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                color: "#0F172A",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#7C3AED"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#7C3AED",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}