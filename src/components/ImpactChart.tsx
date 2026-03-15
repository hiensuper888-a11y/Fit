import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

const data = [
  {
    subject: 'Sức mạnh cơ bắp',
    Creatine: 95,
    Whey: 85,
    PreWorkout: 80,
    fullMark: 100,
  },
  {
    subject: 'Phục hồi thể chất',
    Creatine: 80,
    Whey: 95,
    PreWorkout: 40,
    fullMark: 100,
  },
  {
    subject: 'Sức bền & Năng lượng',
    Creatine: 85,
    Whey: 60,
    PreWorkout: 95,
    fullMark: 100,
  },
  {
    subject: 'Tập trung tinh thần',
    Creatine: 90,
    Whey: 50,
    PreWorkout: 85,
    fullMark: 100,
  },
  {
    subject: 'Giảm căng thẳng',
    Creatine: 75,
    Whey: 65,
    PreWorkout: 30,
    fullMark: 100,
  },
];

export const ImpactChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-white rounded-3xl border border-zinc-200 shadow-sm p-4 md:p-8">
      <h3 className="text-xl font-bold text-zinc-900 mb-6 text-center">
        Biểu đồ Tác động Toàn diện (Thể chất & Tinh thần)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e4e4e7" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#52525b', fontSize: 12, fontWeight: 600 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#a1a1aa', fontSize: 10 }} />
          <Radar
            name="Creatine"
            dataKey="Creatine"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.4}
          />
          <Radar
            name="Whey Protein"
            dataKey="Whey"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.4}
          />
          <Radar
            name="Pre-workout"
            dataKey="PreWorkout"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.4}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
