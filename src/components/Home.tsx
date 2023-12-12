import React, { useEffect } from "react";
import useStore from "../utils/store";
import "../styles/home.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const { username, setUsername } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("username") || username === "") {
      localStorage.removeItem("username");
      navigate("/login");
    }
  }, [username]);

  return (
    // <div>
    //   {!localStorage.getItem("username") || username === "" ? (
    //     <div>
    //       <div className="textWelcome">
    //         Bạn chưa đăng nhập. Vui lòng đăng nhập!
    //       </div>
    //       <Button
    //         onClick={() => {
    //           localStorage.removeItem("username");
    //           navigate("/login");
    //         }}
    //         style={{ fontWeight: 500, width: "150px" }}
    //       >
    //         Đăng nhập
    //       </Button>
    //     </div>
    //   ) : (
    <div>
      <div className="textWelcome">Xin chào {username}</div>
      <Button
        onClick={handleLogout}
        style={{ fontWeight: 500, width: "150px" }}
      >
        Đăng xuất
      </Button>
    </div>
    //   )}
    // </div>
  );
};
