// src/components/ProfileImage.jsx
import React from "react";
import { useState } from "react";
import userData from "../data/userData"

function ProfileImage({ alt = "Profile", size = "12" }) {
let [src, setSrc] = useState('https://tse4.mm.bing.net/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?pid=Api&P=0&h=220');
setSrc = userData.profileImage;
  return (
    <img
      src={setSrc}
      alt={alt}
      className={`w-${size} h-${size} rounded-full object-cover border-4 border-gray-300 w-10 h-10 xl:h-20 xl:w-20`}
    />
  );
}

export default ProfileImage;
