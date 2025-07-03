import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "T", value: 3 },
  { day: "W", value: 6 },
  { day: "T", value: 1 },
  { day: "F", value: 10 },
];

function PendingOrdersCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-around">
      {/* Header */}
      <h2 className="font-semibold text-xs lg:text-2xl">Total Pending Orders</h2>
      <p className="text-gray-400 md:text-[8px] lg:text-[22px]">Today</p>

      {/* Value */}
      <h1 className="lg:text-3xl text-xs font-bold my-1">10</h1>

      {/* Chart */}
      <div className="lg:h-[350px] h-[75px] w-full md:mb-[-10px] mt-[50px] md:mt-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <YAxis hide />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#A78BFA"
              radius={[10, 10, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="md:mt-4 lg:mt-30 border-t pt-2 text-sm lg:text-sm md:flex pr-">
        <div><p className="text-black md:text-[8px] lg:font-bold lg:text-2xl  ">Current Daily Order</p>
          <p className="text-gray-400 md:text-[4px] lg:text-xl">Volume limitation</p></div>
        <div className="  flex justify-center items-center"> <p className="font-bold text-[8px] lg:text-3xl lg:ml-10">10,000</p></div>
       
      
      </div>
    </div>
  );
}

export default PendingOrdersCard;
