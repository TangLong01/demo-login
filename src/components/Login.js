import React from "react";
import useStore from "../utils/store";

export const Login = () => {
  const { username, setUsername } = useStore();

  return (
    <div>
      <p>Username: {username}</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
    </div>
  );
};
