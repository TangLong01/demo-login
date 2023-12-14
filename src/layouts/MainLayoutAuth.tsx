import React from "react";
import { Outlet } from "react-router-dom";

const MainLayoutAuth: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-y-5 h-[100vh] bg-bg-login">
      <div className="bg-white w-[400px] px-6 py-8 rounded-xl flex flex-col gap-y-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoutAuth;
