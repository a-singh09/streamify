"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface UserGrowthChartProps {
  data: { date: string; totalUsers: number; activeUsers: number }[]
}

export function UserGrowthChart({ data }: UserGrowthChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip 
          cursor={{ fill: 'transparent' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--popover))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.5rem',
          }}
        />
        <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

