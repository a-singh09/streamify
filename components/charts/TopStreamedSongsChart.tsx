"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface TopStreamedSongsChartProps {
  data: { song: string; streams: number }[]
}

export function TopStreamedSongsChart({ data }: TopStreamedSongsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="song" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip 
          cursor={{ fill: 'transparent' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--popover))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.5rem',
          }}
        />
        <Bar dataKey="streams" fill="#adfa1d" radius={[4, 4, 0, 0]} name="Streams"/>
      </BarChart>
    </ResponsiveContainer>
  )
}

