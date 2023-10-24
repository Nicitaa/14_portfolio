"use client"
import { useModalsStore } from "@/store/modalsStore"
import { Button } from "@/components/Button"

export default function ButtonMoreInfo16() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("16MoreInfo")}>More info</Button>
}
