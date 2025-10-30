'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { createColorScale } from '@/lib/colors/palettes';
import type { CountryChartData } from '@/lib/data/country-aggregation';

interface CountriesBarChartProps {
  data: CountryChartData[];
  isLoading?: boolean;
}

export function CountriesBarChart({ data, isLoading = false }: CountriesBarChartProps) {
  // Generate color scale for bars
  const colors = createColorScale(['#3b82f6', '#8b5cf6'], data.length);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <p className="text-muted-foreground">Loading chart data...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <p className="text-muted-foreground">No data available for selected filters</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="country" width={90} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px',
          }}
          formatter={(value: number) => [`${value} films`, 'Count']}
        />
        <Bar dataKey="count" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.country}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
