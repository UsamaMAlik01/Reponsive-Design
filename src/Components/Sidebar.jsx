// src/components/Sidebar.jsx
import React from 'react';
import { useState } from 'react';
import { Menu, Search, Bell, Box, GripHorizontal, SignalMedium, Tag, Settings, UserRound, Wrench, LifeBuoy } from "lucide-react";
import logo from '../assets/logo.png';
import ProfileImage from './ProfileImage';
import SideElem from './SideElem';
import userData from '../data/userData';

function Sidebar() {
  let [username, setUsername] = useState('Demo User')
  let [title, setTitle] = useState('Demo Subtitle')
  setUsername = userData.username;
  setTitle = userData.title;

  const [activeItem, setActiveItem] = useState("overview");

  return (
    <>
      <div className='bg-[#363740] h-[62px] w-screen md:w-[88px] md:h-screen lg:w-[200px] grid md:grid-cols-1 grid-cols-10'>
        <div className='md:w-full h-full col-span-2 '>
          <div className='flex items-center h-full px-2 lg:px-4 lg:gap-4 gap-3'>
            <div><Menu className='lg:w-[24px] lg:h-[24px] md:mr-6 lg:mr-0' color="#FFFFFF" /></div>
            <div className='hidden lg:block'><img src={logo} alt="logo" /></div>
            <div className='lg:hidden md:hidden block'><Search className='w-[24px] h-[24px]' color="#FFFFFF" /></div>
          </div>
        </div>

        {/* LOGO SECTION DONE */}
        <div className='md:w-full h-full md:row-span-5 col-span-8'>
          <div className='lg:hidden md:hidden flex items-center justify-end h-full px-1 gap-2'>
            <div className='px-5'><Bell className='lg:w-[24px] lg:h-[24px]' color='#FFFFFF' /></div>
            <div>
              <h1 className='font-bold text-white text-nowrap text-md'>{setUsername}</h1>
              <p className='text-right text-sm font-medium text-white'>{setTitle}</p>
            </div>
            <div><ProfileImage /></div>
          </div>

          {/* DESKTOP SIDEBAR SECTION */}
          <div className='hidden md:block mt-10 lg:mt-[60px]'>

            <SideElem icon={<Box className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Overview"
              active={activeItem === "overview"}
              onClick={() => setActiveItem("overview")} />

            <SideElem icon={<GripHorizontal className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Products"
              active={activeItem === "products"}
              onClick={() => setActiveItem("products")} />

            <SideElem icon={<Tag className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Orders"
              active={activeItem === "orders"}
              onClick={() => setActiveItem("orders")} />

            <SideElem icon={<SignalMedium className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Reports"
              active={activeItem === "reports"}
              onClick={() => setActiveItem("reports")} />

            <SideElem icon={<Settings className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Settings"
              active={activeItem === "settings"}
              onClick={() => setActiveItem("settings")} />

            <SideElem icon={<UserRound className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Administration"
              active={activeItem === "administration"}
              onClick={() => setActiveItem("administration")} />

            <SideElem icon={<Wrench className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Maintenance"
              active={activeItem === "maintenance"}
              onClick={() => setActiveItem("maintenance")} />

            <SideElem icon={<LifeBuoy className='lg:w-[18px] lg:h-[18px]' color="#FFFFFF" />}
              text="Help"
              active={activeItem === "help"}
              onClick={() => setActiveItem("help")} />

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
