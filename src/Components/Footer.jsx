import React from "react";

function Footer(){
    return(
        <div className='w-[98%] md:border-t-3 border-t-1 border-black mx-auto grid grid-cols-3 text-[#4A4B53] '>
        <div className=' w-full col-span-1 lg:text-2xl md:text-[10px] text-[8px]   font-bold p-2'><h2>About Zalora Singapour</h2></div>
        <div className=' col-span-2 flex justify-end lg:text-2xl md:text-[10px] text-[8px] gap-3 md:gap-10 font-bold p-2'>
          <div><h2>Terms & Conditions</h2></div>
          <div><h2>FAQ</h2></div>
          <div><h2>Contact Us</h2></div>
          <div><h2>Seller Labs</h2></div>
          
          </div>

      </div>
    )
};
export default Footer