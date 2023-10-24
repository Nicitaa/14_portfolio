"use client"
import { useModalsStore } from "@/store/modalsStore"
import { Button } from "@/components/Button"

export default function ButtonMoreInfo24() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("24MoreInfo")}>More info</Button>
}
