"use client"

import { useModalsStore } from "@/store/modalsStore"
import { Button } from "@/components/Button"

export default function ButtonMoreInfo17() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("17MoreInfo")}>More info</Button>
}
