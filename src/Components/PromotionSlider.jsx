import React, { useRef, useState, useEffect } from "react";
import PromotionBox from "./PromotionBox";

const TOTAL = 3;

function PromotionSlider() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to correct position when activeIndex changes
  useEffect(() => {
    if (containerRef.current) {
      const boxWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: boxWidth * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Auto update index based on scroll position
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const boxWidth = containerRef.current.clientWidth;
      const index = Math.round(scrollLeft / boxWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div className="block md:hidden w-full mt-3">
      {/* Slider container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory no-scrollbar h-fit"
      >
        {[...Array(TOTAL)].map((_, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-full flex justify-center items-center px-2"
          >
            <PromotionBox promotionId={i + 1} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 ">
        {[...Array(TOTAL)].map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? "bg-black" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default PromotionSlider;
