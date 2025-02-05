import { create } from "zustand";
import { ProjectProps } from "@/types/project";

type ModalState = {
  isOpen: boolean;
  project: ProjectProps | null;
  modalType: string | null;
  openModal: (project: ProjectProps, modalType: string) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  project: null,
  modalType: null,
  openModal: (project, modalType) => set({ isOpen: true, project, modalType }),
  closeModal: () => set({ isOpen: false, project: null, modalType: null }),
}));
