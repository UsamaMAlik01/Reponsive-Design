import React from "react";

// Color pool with opacity
const colorClasses = [
  "bg-purple-700/50",
  "bg-blue-700/50",
  "bg-green-700/50",
  "bg-pink-700/50",
  "bg-yellow-600/50",
  "bg-rose-700/50",
];

// Static counter to alternate colors (simulate instance-based rendering)
let currentColorIndex = 0;

function PromotionClock() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");

  const Time = `${hrs} : ${mins} : ${secs}`;

  // Pick color and update index
  const boxColor = colorClasses[currentColorIndex % colorClasses.length];
  currentColorIndex++;

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 absolute top-[25%] left-[11%] md:left-[7%] rounded-lg gap-x-1 gap-y-0.5 lg:gap-x-1.5 md:gap-1 md:gap-y-0 lg:gap-y-5.5 z-10 md:h-10 md:top-[30%] lg:top-[22%]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`lg:w-10 lg:h-5 md:w-5 md:h-3 rounded-xl ${boxColor} col-span-1 row-span-1`}
          ></div>
        ))}

        {["Hours", "Mins", "Sec"].map((label) => (
          <div
            key={label}
            className="text-[12px] lg:w-10 lg:h-5 md:w-5 md:h-3 rounded-2xl col-span-1 row-span-1 text-center opacity-100 md:text-[8px] lg:text-md lg:font-semibold lg:pt-[2px]"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="bg-transparent absolute top-[27%] left-[12%] md:top-[30%] lg:top-[15%]  md:left-[7%] rounded-lg z-20 lg:h-[42px] lg:w-[130px] md:h-9 md:w-16 flex items-center justify-center">
        <h1 className="md:mb-[10px] lg:mt-[30px] text-lg md:text-xs lg:text-2xl font-bold">
          {Time}
        </h1>
      </div>
    </>
  );
}

export default PromotionClock;
