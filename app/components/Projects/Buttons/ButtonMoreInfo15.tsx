"use client"
import { useModalsStore } from "@/store/modalsStore"
import { Button } from "@/components/Button"

export default function ButtonMoreInfo15() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("15MoreInfo")}>More info</Button>
}
