import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { Dropdown } from "antd";
import logo from "images/logo.png";
import userImg from "images/user.png";
import menuDataRender from "page/Menu";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useStore from "utils/store";

interface MenuItem {
  key: number;
  label: string | React.ReactNode;
  danger?: boolean;
}

const LogoTitle: React.FC = () => <img src={logo} alt="Logo" />;

const MainLayoutHome: React.FC = () => {
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
    <div>
      <ProLayout
        title=""
        logo={<LogoTitle />}
        menuDataRender={menuDataRender}
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
            className="absolute top-4 right-10 flex justify-center items-center gap-x-2"
          >
            <div className="cursor-pointer">
              <img
                src={userImg}
                alt="user"
                className="w-11 aspect-square bg-gray rounded-full p-1.5"
              />
              <div>
                <div className="font-medium uppercase text-[14px]">
                  {username}
                </div>
                <div className="text-[12px] text-greenDefault">
                  Phòng Kinh Doanh
                </div>
                <div className="text-[12px] text-gray">
                  Trưởng Phòng Kinh Doanh
                </div>
              </div>
            </div>
          </Dropdown>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default MainLayoutHome;
