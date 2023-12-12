import React, { ReactNode } from "react";
import bg from "../images/bg-login.png";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      {children}
    </div>
  );
};

export default MainLayout;
