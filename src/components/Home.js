import React from "react";
import useStore from "../utils/store";
import "../styles/home.scss";

const bg = require("../images/bg-login.png");

export const Home = () => {
  const { username, setUsername } = useStore();
  return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="textWelcome">Xin chào {username}</div>
    </div>
  );
};
