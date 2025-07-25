import React from "react";
import { ChevronRight } from "lucide-react";

// Props: icon, text, active (boolean), onClick
function SideElem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative w-full lg:h-[36px] h-[53px] flex lg:justify-between justify-center items-center lg:px-4 
        cursor-pointer transition-all duration-200
        ${active ? "bg-[#3e3f4b]" : "hover:bg-[#4a4b57]"}`}
    >
      {/* Left Active Bar */}
      {active && (
        <div className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-md" />
      )}

      {/* Icon and Text */}
      <div className="flex gap-2 lg:gap-2 items-center">
        <div>{icon}</div>
        <div className="hidden lg:block text-[#FFFFFF] lg:text-sm">{text}</div>
      </div>

      {/* Chevron Icon */}
      <div className="hidden lg:block">
        <ChevronRight className="lg:w-[18px] lg:h-[18px] h-[24px] w-[24px]" color="#FFFFFF" />
      </div>
    </div>
  );
}

export default SideElem;
