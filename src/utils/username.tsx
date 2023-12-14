import create from "zustand";

interface UsernameState {
  username: string;
  setUsername: (newUsername: string) => void;
}

const useUsername = create<UsernameState>((set) => {
  const storedUsername = localStorage.getItem("username") || "";

  return {
    username: storedUsername,
    setUsername: (newUsername) => {
      set({ username: newUsername });
      localStorage.setItem("username", newUsername);
    },
  };
});

export default useUsername;
