import React, { useEffect } from "react";
import useStore from "../utils/store";
import "../styles/home.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: React.FC) => {
  return () => {
    const { username, setUsername } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem("username") || username === "") {
        localStorage.removeItem("username");
        setUsername("");
        navigate("/login");
      }
    }, [username, navigate]);

    return <WrappedComponent />;
  };
};

const Home: React.FC = () => {
  const { username } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div>
      <div className="textWelcome">Xin chào {username}</div>
      <Button
        onClick={handleLogout}
        style={{ fontWeight: 500, width: "150px" }}
      >
        Đăng xuất
      </Button>
    </div>
  );
};

export const HomeWithAuth = withAuth(Home);
