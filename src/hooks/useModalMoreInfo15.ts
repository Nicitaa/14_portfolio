import { create } from "zustand"

interface ModalMoreInfo15Store {
  isOpen:boolean
  onClose:() => void
  onOpen:() => void
}

const useModalMoreInfo15 = create<ModalMoreInfo15Store>((set) => ({
  isOpen:false,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useModalMoreInfo15