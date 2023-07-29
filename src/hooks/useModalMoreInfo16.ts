import { create } from "zustand"

interface ModalMoreInfo16Store {
  isOpen:boolean
  onClose:() => void
  onOpen:() => void
}

const useModalMoreInfo16 = create<ModalMoreInfo16Store>((set) => ({
  isOpen:false,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useModalMoreInfo16