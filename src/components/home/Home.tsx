import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsername from "utils/username";

const withAuth = (WrappedComponent: React.FC) => {
  return () => {
    const { username, setUsername } = useUsername();
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
    <div>
      <div>home</div>
    </div>
  );
};

export const HomeWithAuth = withAuth(Home);
