import {create}  from "zustand"

interface NavbarStore {
  isOpen:boolean
  onClose:() => void
  onOpen:() => void
}

const useNavbar = create<NavbarStore>((set) => ({
  isOpen:true,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useNavbar