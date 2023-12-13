import React, { ReactNode } from "react";
import "./mainlayout.scss";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../page/Menu";
import logo from "../images/logo.png";
import { Dropdown, Space } from "antd";
import useStore from "../utils/store";
import userImg from "../images/user.png";

interface MainLayoutProps {
  children: ReactNode;
}

interface MenuItem {
  key: number;
  label: string | React.ReactNode;
  danger?: boolean;
}

const LogoTitle: React.FC = () => (
  <img
    src={logo}
    className="logo"
    alt="Logo"
    style={{ width: "90%", height: "100%", padding: 0 }}
  />
);

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { username } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  const items: MenuItem[] = [
    {
      key: 1,
      label: "Đổi mật khẩu",
    },
    {
      key: 2,
      danger: true,
      label: <div onClick={handleLogout}>Đăng xuất</div>,
    },
  ];

  return (
    <div className="mainlayout">
      <ProLayout
        title=""
        logo={<LogoTitle />}
        menuDataRender={Menu}
        menuItemRender={(item, dom) => (
          <Link to={item.path ?? "/"}>
            {item.routes ? dom : <span>{dom}</span>}
          </Link>
        )}
        breadcrumbRender={(route) => [
          {
            path: "/",
            breadcrumbName: "Trang chủ",
          },
          // ...route,
        ]}
      >
        <PageContainer>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            className="user"
          >
            <div>
              <img src={userImg} alt="user" className="userAva" />
              <div>
                <div className="username">{username}</div>
                <div className="role" style={{ color: "mediumseagreen" }}>
                  Phòng Kinh Doanh
                </div>
                <div className="role" style={{ color: "gray" }}>
                  Trưởng Phòng Kinh Doanh
                </div>
              </div>
            </div>
          </Dropdown>
          {children}
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default MainLayout;
