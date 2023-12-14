import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayoutAuth: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-y-5 h-[100vh] bg-bg-login">
      <div className="bg-white w-[400px] px-6 py-8 rounded-xl flex flex-col gap-y-6">
        {children}
      </div>
    </div>
  );
};

export default MainLayoutAuth;
