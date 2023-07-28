import { create } from "zustand"

interface ModalMoreInfoStore {
  isOpen:boolean
  onClose:() => void
  onOpen:() => void
}

const useModalMoreInfo = create<ModalMoreInfoStore>((set) => ({
  isOpen:false,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useModalMoreInfo