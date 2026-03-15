import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface MetricData {
  name: string;
  value: number;
}

interface ArticleMetricsChartProps {
  data: MetricData[];
  title?: string;
}

export const ArticleMetricsChart: React.FC<ArticleMetricsChartProps> = ({ data, title }) => {
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];

  return (
    <div className="w-full h-[300px] bg-white rounded-3xl border border-zinc-200 shadow-sm p-6 my-8">
      {title && (
        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 text-center">
          {title}
        </h4>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f4f4f5" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            tick={{ fill: '#71717a', fontSize: 12, fontWeight: 600 }}
            width={100}
          />
          <Tooltip
            cursor={{ fill: '#f8fafc' }}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          />
          <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
