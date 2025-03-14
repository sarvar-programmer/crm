import React from "react";
import { Link } from "react-router-dom";
import { workloadData } from "../../api/workload";
import arrowIcon from "../../assets/icons/arrow.svg";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-[28px]">
        <p className="text-[16px] text-[#7D8592] leading-[21.82px] font-medium mb-[10px]">
          Welcome back, Evan!
        </p>
        <div className="flex justify-between">
          <h4 className="text-[#0A1629] text-[36px] leading-[49.1px] font-bold">
            Dashboard
          </h4>
          <span>Calendar</span>
        </div>
      </div>
      <div className="flex">
        <div className="bg-[#FFFFFF] max-w-[781px] w-full pt-[28px] pr-[18px] pb-[16px] pl-[18px] rounded-[24px]">
          <div className="flex items-center justify-between mb-[20px]">
            <h4>Workload</h4>
            <p className="flex items-center gap-[5px] text-[#3F8CFF] ftext-[16px] font-semibold">
              View all <img src={arrowIcon} alt="" />
            </p>
          </div>

          <ul className="flex flex-wrap justify-between">
            {workloadData?.map((card) => {
              const { image, name, field, id, position } = card;
              return (
                <li
                  className="max-w-[175px] w-full bg-[#F4F9FD] flex flex-col items-center py-[17px] rounded-[24px] mb-[16px] [&:nth-child(5)]:mb-[0] [&:nth-child(6)]:mb-[0] [&:nth-child(7)]:mb-[0] [&:nth-child(8)]:mb-[0]"
                  key={id}
                >
                  <img
                    className="w-[50px] h-[50px] mb-[16px]"
                    src={image}
                    alt=""
                  />
                  <p className="text-[16px] leading-[21px] font-semibold leading-[21.82px] text-[#0A1629]">
                    {name}
                  </p>
                  <span className="mb-[9px] text-[14px] leading-[21px] text-[#0A1629]">
                    {field}
                  </span>
                  <p
                    className="text-center border-[1px] border-solid border-[#7D8592] rounded-[4px] py-[3px] px-[4px] text-[12px] leading-[12px] text-[#7D8592]"
                    to={"/"}
                  >
                    {position}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div>Nearest Events</div>
      </div>
    </div>
  );
};

export default Dashboard;
