import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 71 },
  { name: "Remaining", value: 29 },
];

const COLORS = ["#7F56D9", "#EDE9FE"]; // purple + light background

function SalesContributionDonut() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-around">
      <h2 className="font-semibold text-xs lg:text-base">Best Selling Product</h2>
      <p className="text-gray-400 md:text-[8px] lg:text-[12px]">sales Contribution</p>
      <h1 className="lg:text-lg text-xs font-bold my-1 lg:mb-[-20px]">71%</h1>

      <div className="lg:h-[175px] h-[75px] w-full md:mb-[-10px] lg:mt-[40px] md:mt-0 lg">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="md:mt-3 mt-6">
        <p className="text-gray-500 font-semibold lg:text-base lg:mt-8 text-xs">
          Best selling Products: <span className="font-bold text-black">1</span>
        </p>
        <p className="text-gray-500 text-xs lg:text-base">
          Total out of Stock: <span className="font-bold text-black">1351</span>
        </p>
      </div>
    </div>
  );
}

export default SalesContributionDonut;
