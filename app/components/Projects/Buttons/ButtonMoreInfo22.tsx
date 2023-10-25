"use client"
import { useModalsStore } from "@/store/modalsStore"
import { Button } from "@/components/Button"

export default function ButtonMoreInfo22() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("22MoreInfo")}>More info</Button>
}
