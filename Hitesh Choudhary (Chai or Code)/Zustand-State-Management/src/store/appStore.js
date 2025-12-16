import { create } from "zustand";

const useAppStore = create((set) => ({
  //Auth Slice
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),

  //UI Slice
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useAppStore;