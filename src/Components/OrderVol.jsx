import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ArrowUp } from "lucide-react";

const data = [
  { day: "01", thisWeek: 2400, lastWeek: 1200 },
  { day: "02", thisWeek: 2100, lastWeek: 3000 },
  { day: "03", thisWeek: 2500, lastWeek: 1800 },
  { day: "04", thisWeek: 1800, lastWeek: 2400 },
  { day: "05", thisWeek: 2900, lastWeek: 2100 },
  { day: "06", thisWeek: 3100, lastWeek: 1600 },
  { day: "07", thisWeek: 2700, lastWeek: 1500 },
  { day: "08", thisWeek: 2200, lastWeek: 2500 },
  { day: "09", thisWeek: 2000, lastWeek: 1300 },
];

function OrderVol() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm lg:text-2xl font-bold">Order Volume</h2>
          <div className="flex items-center gap-2">
            <h1 className="text-lg lg:text- font-bold">5.51K</h1>
            <span className="flex items-center gap-1 text-[8px] lg:text-sm">
              <ArrowUp className="w-2 h-2 lg:h-4 lg:w-4 text-green-500" />
              2.1%
            </span>
            <p className="text-gray-400 text-[8px] lg:text-sm">vs Last Week</p>
          </div>
        </div>
        <p className="text-gray-400 text-[8px] lg:text-sm font-medium cursor-pointer">
          View Report ▼
        </p>
      </div>

      {/* Chart */}
      <div className="h-[150px] md:h-[250px] md:ml-[-30px] lg:ml-[-20px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="thisWeek" fill="#7F56D9" barSize={10} radius={[5, 5, 0, 0]} />
            <Bar dataKey="lastWeek" fill="#FACC15" barSize={10} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legends */}
     <div className="flex justify-center gap-4 lg:gap-10 mt-2 text-[8px] md:text-[10px] lg:text-xl lg:mt-[4px]">
        <div className="flex items-center gap-1">
          <span className="md:w-2 md:h-2 lg:w-[10px] lg:h-[10px] bg-[#7F56D9] rounded-full"></span>
          <span className="text-gray-600">This Week</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="md:w-2 md:h-2 lg:w-[10px] lg:h-[10px] bg-[#FACC15] rounded-full"></span>
          <span className="text-gray-600">Last Week</span>
        </div>
      </div>
    </div>
  );
}

export default OrderVol;
