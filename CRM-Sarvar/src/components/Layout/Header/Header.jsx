import React from "react";
import searchIcon from "../../../assets/icons/search.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import profileImage from "../../../assets/images/profile.png";
import right from "../../../assets/icons/right.svg";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center relative">
        <input
          className="w-[412px] relative pl-[54px] h-[48px] rounded-[14px] outline-none "
          type="search"
          placeholder="Search"
        />
        <img className="absolute left-[19px]" src={searchIcon} alt="" />
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="w-[48px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[14px]">
          <img src={notificationIcon} alt="" />
        </div>
        <div
          className="flex items-center gap-[13px] bg-[#fff] pt-[9px] pr-[11px] pb-[9px] pl-[14px] rounded-[14px] cursor-pointer"
          onClick={handleOpen}
        >
          <div className="flex items-center gap-[10px]">
            <img src={profileImage} alt="" />
            <p className="text-[16px] text-[#0A1629]">Evan Yates</p>
          </div>
          {open ? <IoIosArrowUp /> : <img src={right} alt="" />}
        </div>
      </div>
    </header>
  );
};

export default Header;
