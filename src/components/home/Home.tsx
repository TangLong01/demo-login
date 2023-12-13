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
  return (
    <div className="home">
      <div>home</div>
    </div>
  );
};

export const HomeWithAuth = withAuth(Home);
