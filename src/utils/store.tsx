import create from "zustand";

interface StoreState {
  username: string;
  setUsername: (newUsername: string) => void;
}

const useStore = create<StoreState>((set) => {
  const storedUsername = localStorage.getItem("username") || "";

  return {
    username: storedUsername,
    setUsername: (newUsername) => {
      set({ username: newUsername });
      localStorage.setItem("username", newUsername);
    },
  };
});

export default useStore;
