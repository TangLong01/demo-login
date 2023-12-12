import create from "zustand";

interface StoreState {
  username: string;
  setUsername: (newUsername: string) => void;
}

const useStore = create<StoreState>((set) => ({
  username: "",
  setUsername: (newUsername) => set({ username: newUsername }),
}));

export default useStore;
