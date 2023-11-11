import { create } from "zustand"

interface ModalsStore {
  isOpen: Record<string, boolean>
  openModal: <T extends string>(id: T) => void
  closeModal: <T extends string>(id: T) => void
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
