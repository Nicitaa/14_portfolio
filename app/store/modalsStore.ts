import { TModals } from "@/interfaces/TModals"
import { create } from "zustand"

interface ModalsStore {
  isOpen: Record<string, boolean>
  openModal: <T extends TModals>(id: T) => void
  closeModal: <T extends TModals>(id: T) => void
}

export const useModalsStore = create<ModalsStore>()(set => ({
  isOpen: {},
  openModal: id => {
    set(state => ({
      isOpen: {
        ...state.isOpen,
        [id]: true,
      },
    }))
  },
  closeModal: id => {
    set(state => ({
      isOpen: {
        ...state.isOpen,
        [id]: false,
      },
    }))
  },
}))
