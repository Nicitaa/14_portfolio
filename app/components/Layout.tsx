import {
  ModalMoreInfo15,
  ModalMoreInfo16,
  ModalMoreInfo17,
  ModalMoreInfo19,
  ModalMoreInfo20,
  ModalMoreInfo22,
  ModalMoreInfo23,
  ModalMoreInfo24,
  ModalMoreInfo26,
  ModalMoreInfo28,
} from "./Projects/ModalsMoreInfo"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="bg-background text-title
    min-h-screen transition-colors duration-300 pt-[62px]">
      {children}
      <ModalMoreInfo15 />
      <ModalMoreInfo16 />
      <ModalMoreInfo17 />
      <ModalMoreInfo19 />
      <ModalMoreInfo20 />
      <ModalMoreInfo22 />
      <ModalMoreInfo23 />
      <ModalMoreInfo24 />
      <ModalMoreInfo26 />
      <ModalMoreInfo28 />
    </div>
  )
}
