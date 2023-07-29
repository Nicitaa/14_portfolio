import { create } from "zustand"

interface ModalMoreInfo22Store {
  isOpen:boolean
  onClose:() => void
  onOpen:() => void
}

const useModalMoreInfo22 = create<ModalMoreInfo22Store>((set) => ({
  isOpen:false,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useModalMoreInfo22