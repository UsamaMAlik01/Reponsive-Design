// src/components/ProfileImage.jsx
import React, { useState } from "react";
import userData from "../data/userData";

function ProfileImage({ alt = "Profile", size = "10" }) {
  let [src, setSrc] = useState('https://tse4.mm.bing.net/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?pid=Api&P=0&h=220');
  setSrc = userData.profileImage;

  return (
    <img
      src={setSrc}
      alt={alt}
      className={`w-${size} h-${size} rounded-full object-cover border-4 border-gray-300 lg:w-10 lg:h-10`}
    />
  );
}

export default ProfileImage;
