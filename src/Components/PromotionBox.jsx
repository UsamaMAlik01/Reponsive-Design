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

function PromotionBox({ promotionId = 1 }) {
  const promotion = promotionData.find((p) => p.id === promotionId);

  if (!promotion) return <div>No Promotion Found</div>;

  return (
    <div className='w-[90%] md:w-[98%] my-4 xl:h-[550px] md:h-[280px] bg-white mx-auto rounded-lg xl:shadow-md shadow-xl h-[250px] md:mt-[-1px] xl:mt-4'>
      <div className='grid grid-rows-9 gap-2 md:p-2'>

        {/* Header Text */}
        <div className='row-span-1 flex justify-around text-[10px] sm:text-[12px] md:text-[10px] xl:text-2xl font-bold'>
          <h3>{promotion.heading}</h3>
          <h3>{promotion.subheading}</h3>
          <h3>{promotion.code}</h3>
        </div>

        {/* Main Content */}
        <div className='relative row-span-4 grid grid-cols-2 h-full '>
          <img
            className='rounded-xl blur-[2px] h-[130px] sm:h-[150px] md:h-[150px] xl:h-[284px]'
            src={promotion.image}
            alt="promotion img"
            
          />
          <PromotionClock />

          <div>
            <div className='flex flex-col text-[#363740] pt-2  pb-1 px-2 h-full'>
              {promotion.details.map(({ icon, text }, index) => {
                const Icon = iconMap[icon];
                return (
                  <div key={index} className='flex items-center gap-1 sm:gap-2 md:gap-2'>
                    <div>
                      <Icon className="h-4 w-3 sm:h-2 sm:w-2 md:h-2 md:w-2 xl:h-6 xl:w-10" color="#B5B5B5" />
                    </div>
                    <p className='text-[8px] md:text-[7px] xl:text-lg'>{text}</p>
                  </div>
                );
              })}

              <div className='grid grid-cols-2 gap-2 mt-3 sm:mt-5'>
                {Object.entries(promotion.summary).map(([label, value], index) => (
                  <p key={index} className='text-[8px] md:text-[7px] xl:text-lg'>{label}: {value}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <div className='row-span-1 flex items-center justify-center'>
          <button className='h-full  w-[80%] md:w-full bg-[#4B465C] text-white rounded-xl  xl:rounded-2xl text-sm sm:text-sm md:text-sm xl:text-2xl font-semibold'>
            Join the Promotion
          </button>
        </div>

        {/* Deal Status */}
        <div className='row-span-1 grid grid-cols-3'>
          {promotion.dealStatus.map(({ label, color, value }, index) => (
            <div key={index} className='flex flex-row items-center justify-center gap-1 col-span-1'>
              <div>
                <p className={`text-[8px] xl:text-lg text-center text-${color}`}>{label}</p>
              </div>
              <div className={`w-[10px] h-[10px] sm:w-2 sm:h-2 md:w-2 md:h-2 xl:h-6 xl:w-6 xl:rounded-lg border border-${color} rounded-xs text-center`}>
                <p className='text-[5px] sm:text-[6px] xl:text-[16px]'>{value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PromotionBox;
