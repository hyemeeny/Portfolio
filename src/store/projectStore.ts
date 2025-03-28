import { create } from "zustand";

interface ProjectStore {
  category: string;
  setCategory: (category: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  category: "All",
  setCategory: (category) => set({ category }),
}));
