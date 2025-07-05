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
    <div className='h-[60px] lg:h-[60px] bg-white lg:mt-2.5 grid grid-cols-8 grid-rows-1 rounded-lg'>
      <div className='md:col-span-4 lg:col-span-5 flex items-center justify-start px-3 gap-3'>
        <Searchbar />
      </div>

      <div className='md:col-span-4 lg:col-span-3 flex items-center justify-end px-3 gap-3 lg:gap-2'>
        <div className='px-5 lg:px-5'>
          <Bell className='lg:w-[18px] lg:h-[18px] h-[24px] w-[24px]' color='#979797' />
        </div>
        <div>
          <h1 className='font-bold text-[#979797] text-nowrap text-md lg:text-sm'>{setUsername}</h1>
          <p className='text-right text-sm lg:text-xs font-medium text-[#979797]'>{setTitle}</p>
        </div>
        <div><ProfileImage /></div>
      </div>
    </div>
  );
}

export default Topbar;
