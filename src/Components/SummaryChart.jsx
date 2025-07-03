import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ArrowDown } from "lucide-react";

const data = [
  { day: "01", thisWeek: 1500, lastWeek: 2200 },
  { day: "02", thisWeek: 1300, lastWeek: 4000 },
  { day: "03", thisWeek: 3000, lastWeek: 1500 },
  { day: "04", thisWeek: 2000, lastWeek: 3800 },
  { day: "05", thisWeek: 1700, lastWeek: 2400 },
  { day: "06", thisWeek: 3200, lastWeek: 2700 },
];

function SalesSummaryChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm lg:text-4xl font-bold">Sales Summary</h2>
          <div className="flex items-center gap-2">
            <h1 className="text-lg lg:text-4xl font-bold">3K</h1>
            <span className="text-red-500 flex items-center gap-1 text-[8px] lg:text-xl">
              <ArrowDown className="w-2 h-2 lg:h-8 lg:w-8" />
              2.1%
            </span>
            <p className="text-gray-400 text-[8px] lg:text-xl">vs Last Week</p>
          </div>
        </div>
        <p className="text-gray-400 text-[8px] lg:text-2xl font-medium cursor-pointer">
          View Report ▼
        </p>
      </div>

      {/* Chart */}
      <div className="h-[150px] md:h-[250px] md:ml-[-30px] lg:mt-30 lg:ml-[-20px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="thisWeek"
              stroke="#7F56D9"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="lastWeek"
              stroke="#FACC15"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legends */}
      <div className="flex justify-center gap-4 lg:gap-20 mt-2 text-[8px] md:text-[10px] lg:text-2xl lg:mt-20">
        <div className="flex items-center gap-1 ">
          <span className="md:w-2 md:h-2 lg:w-5 lg:h-5 bg-[#7F56D9] rounded-full"></span>
          <span className="text-gray-600">This Week</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="md:w-2 md:h-2 lg:w-5 lg:h-5 bg-[#FACC15] rounded-full"></span>
          <span className="text-gray-600">Last Week</span>
        </div>
      </div>
    </div>
  );
}

export default SalesSummaryChart;
