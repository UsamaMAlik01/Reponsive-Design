import React from "react";
import { useState } from 'react';
import Searchbar from './Searchbar.jsx';
import ProfileImage from './ProfileImage.jsx';
import Bell from 'lucide-react/dist/esm/icons/bell.js';
import userData from '../data/userData.js'; // Importing user data

function Topbar() {
let [username, setUsername] = useState('Demo User')
let [title, setTitle] = useState('Demo Subtitle')
setUsername = userData.username;
setTitle = userData.title;
  return (
    <div  className='h-[60px] xl:h-[120px] bg-white xl:mt-5 grid grid-cols-8 grid-rows-1 rounded-lg '>
         <div className=' md:col-span-4 lg:col-span-5   flex items-center justify-start px-3 gap-3'>
          <Searchbar/>
          </div>
         <div className=' md:col-span-4 lg:col-span-3  flex items-center justify-end px-3 gap-3 xl:gap-4'>
          <div className='px-5 xl:px-10'><Bell className='xl:w-[36px] xl:h-[36px] h-[24px] w-[24px]' color='#979797'/></div>
                <div ><h1 className='font-bold text-[#979797] text-nowrap text-md xl:text-2xl '>{setUsername}</h1>
                <p className='text-right text-sm xl:text-md font-medium text-[#979797]'>{setTitle}</p>
                </div>
          <div><ProfileImage/></div>
         </div>
      </div>
  )
}
export default Topbar;