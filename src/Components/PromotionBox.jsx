import React from "react";
import { CalendarClock, Tag, ClipboardCheck, BadgePercent } from "lucide-react";
import PromotionClock from "./PromotionClock";
import { promotionData } from "../data/promotionData";

const iconMap = {
  CalendarClock,
  Tag,
  ClipboardCheck,
  BadgePercent,
};

const colorMap = {
  "green-600": "text-green-600 border-green-600",
  "orange-600": "text-orange-300 border-orange-300",
  "red-600": "text-red-600 border-red-600",
};

function PromotionBox({ promotionId = 1 }) {
  const promotion = promotionData.find((p) => p.id === promotionId);

  if (!promotion) return <div>No Promotion Found</div>;

  return (
    <div className='w-[90%] md:w-[98%] my-4 lg:h-[275px] md:h-[280px] bg-white mx-auto rounded-lg lg:shadow-md shadow-xl h-[250px] md:mt-[-1px] lg:mt-[5%]'>
      <div className='grid lg:grid-rows-11 grid-rows-9  gap-2 md:p-2'>

        {/* Header Text */}
        <div className='row-span-1 flex justify-around text-[10px] sm:text-[12px] md:text-[10px] lg:text-xs font-bold'>
          <h3>{promotion.heading}</h3>
          <h3>{promotion.subheading}</h3>
          <h3>{promotion.code}</h3>
        </div>

        {/* Main Content */}
        <div className='relative row-span-4 grid grid-cols-2 h-full'>
          <img
            className='rounded-xl blur-[2px] h-[130px] sm:h-[150px] md:h-[150px] lg:h-[142px] '
            src={promotion.image}
            alt="promotion img"
          />
          <PromotionClock />

          <div>
            <div className='flex flex-col text-[#363740] pt-2 pb-1 px-2 h-full'>
              {promotion.details.map(({ icon, text }, index) => {
                const Icon = iconMap[icon];
                return (
                  <div key={index} className='flex items-center gap-1 sm:gap-2 md:gap-2'>
                    <div>
                      <Icon className="h-4 w-3 sm:h-2 sm:w-2 md:h-2 md:w-2 lg:h-3 lg:w-5" color="#B5B5B5" />
                    </div>
                    <p className='text-[8px] md:text-[7px] lg:text-xs'>{text}</p>
                  </div>
                );
              })}

              <div className='grid grid-cols-2 gap-2 mt-3 sm:mt-5'>
                {Object.entries(promotion.summary).map(([label, value], index) => (
                  <p key={index} className='text-[8px] md:text-[7px] lg:text-xs'>{label}: {value}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <div className='row-span-1 flex items-center justify-center'>
          <button className='h-full w-[80%] md:w-full bg-[#4B465C] text-white rounded-xl lg:rounded-xl text-sm sm:text-sm md:text-sm lg:text-base font-semibold'>
            Join the Promotion
          </button>
        </div>

        {/* Deal Status */}
        <div className='row-span-1 grid grid-cols-3'>
          {promotion.dealStatus.map(({ label, color, value }, index) => (
            <div key={index} className='flex flex-row items-center justify-center gap-1 col-span-1'>
              <div>
                <p className={`text-[8px] lg:text-[10px] text-center text-${colorMap[color]}`}>{label}</p>
              </div>
              <div className={`w-[10px] h-[10px] sm:w-2 sm:h-2 md:w-2 md:h-2 lg:h-3 lg:w-3 lg:rounded-xs border border--${colorMap[color]} rounded-xs text-center`}>
                <p className={`text-[5px] sm:text-[6px] lg:text-[8px] text-black`}>{value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PromotionBox;
