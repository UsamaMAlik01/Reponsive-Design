import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const rating = 1.3;
const maxScore = 5;

const percentage = (rating / maxScore) * 100;

const data = [
  { name: "Rating", value: rating },
  { name: "Remaining", value: maxScore - rating },
];

const COLORS = ["#A78BFA", "#E5E7EB"]; // purple + gray background

function Demo() {
  const angle = (percentage / 100) * 180 - 90; // needle angle

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-around">
      <h2 className="font-semibold text-xs lg:text-2xl">Your Rating</h2>
      <p className="lg:text-3xl text-xs font-bold my-1">{rating}</p>

      {/* === Relative wrapper for chart and needle === */}
      <div className="relative w-full h-[100px] md:h-[140px] lg:h-[350px] xl:mt-[0px] md:mt-[-55px] mt-[30px] ">
        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius="70%"
              outerRadius="100%"
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* === Needle === */}
        <div
          className="absolute bottom-0 left-1/2 w-[2px] lg:h-[60px] md:h-[20px] bg-black origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${angle}deg)`,
          }}
        ></div>

        {/* === Center Text === */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center md:text-sm lg:text-xl">
          <p className="font-semibold text-yellow-500">Score</p>
          <p className="text-lg font-bold text-gray-800">{rating}</p>
        </div>
      </div>

      {/* Bottom stats */}
      <div className=" lg:mt-37 md:mt-6 mt-8">
        <p className="text-gray-500 font-semibold lg:text-2xl lg:mt-12 md:text-[8px] text-sm">
          Canceling - Seller Related:{" "}
          <span className="text-red-500 font-bold">6%</span>
        </p>
        <p className=" md:mt-2 text-gray-500 md:text-[8px] lg:text-2xl text-sm">
          Handling Time With SLA:{" "}
          <span className="text-red-500 font-bold">18%</span>
        </p>
      </div>
    </div>
  );
}

export default Demo;
