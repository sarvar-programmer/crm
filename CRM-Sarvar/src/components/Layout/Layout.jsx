import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="flex gap-[30px]">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="pt-[50px] pr-[40px] pb-[32px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
