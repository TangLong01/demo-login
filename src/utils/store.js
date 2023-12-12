import create from "zustand";

const useStore = create((set) => ({
  username: "",
  setUsername: (newUsername) => set({ username: newUsername }),
}));

export default useStore;
