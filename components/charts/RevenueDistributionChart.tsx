"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

interface RevenueDistributionChartProps {
  data: { source: string; amount: number }[]
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function RevenueDistributionChart({ data }: RevenueDistributionChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="amount"
          label={({ source, percent }) => `${source}\n${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index, source) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name="Amount"/>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

