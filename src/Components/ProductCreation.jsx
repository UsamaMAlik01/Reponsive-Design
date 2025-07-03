import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Approved", value: 1299 },
  { name: "Rejected", value: 949 },
];

const COLORS = ["#7F56D9", "#FACC15"]; // Purple and Yellow

function NewProductCreationChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-around">
      <h2 className="font-semibold text-[10px] lg:text-2xl">New Product Creation</h2>
      <p className="text-gray-400 md:text-[6px] lg:text-[22px]">(Last 14 Days)</p>

      {/* Chart wrapper with relative positioning for center label */}
      <div className="relative w-full h-[100px] md:h-[140px] lg:h-[350px] flex items-center justify-center md:mb-[-23px] lg:mb-0 lg:mt-20
      mt-[50px] md:mt-0">
        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute text-center">
          <p className="md:text-[7px] lg:text-xl text-xs text-gray-600">Rejected</p>
          <p className=" md:text-[7px] lg:text-xl text-xs font-semibold text-gray-800">Products</p>
        </div>
      </div>

      {/* Bottom legends */}
      <div className="flex justify-around md:flex-col text-xs md:gap-2 lg:text-3xl lg:font-semibold text-gray-500 lg:mt-20">
        <div className="flex items-center gap-1 mt-10 md:mt-0">
          <span className="w-2 h-2 lg:h-5 lg:w-5 bg-[#7F56D9] rounded-full"></span>
          <p>Approved</p>
        </div>
        <div className="flex items-center gap-1 mt-10 md:mt-0">
          <span className="w-2 h-2 lg:h-5 lg:w-5 bg-[#FACC15] rounded-full"></span>
          <p>Rejected</p>
        </div>
      </div>
    </div>
  );
}

export default NewProductCreationChart;
