import React, { useEffect, useState } from "react";
import "./home.scss";
import { Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import useStore from "../../utils/store";

const withAuth = (WrappedComponent: React.FC) => {
  return () => {
    const { username, setUsername } = useStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!localStorage.getItem("username") || username === "") {
        localStorage.removeItem("username");
        setUsername("");
        setLoading(true);
        navigate("/login");
      } else {
        setLoading(false);
      }
    }, [username, navigate]);

    return loading ? <Spin size="large" /> : <WrappedComponent />;
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
    <div className="home">
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
