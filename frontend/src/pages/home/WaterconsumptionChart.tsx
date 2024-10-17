import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WaterConsumptionData {
  date: string;
  consumption: number;
}

const data: WaterConsumptionData[] = [
  { date: '2024-10-01', consumption: 30 },
  { date: '2024-10-02', consumption: 45 },
  { date: '2024-10-03', consumption: 50 },
  { date: '2024-10-04', consumption: 60 },
];

const WaterConsumptionChart: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 my-5 w-full">
      <h3 className="text-xl font-semibold mb-4">Consommation d'eau</h3>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip />
            <Line type="monotone" dataKey="consumption" stroke="#34d399" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WaterConsumptionChart;
