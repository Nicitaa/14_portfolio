"use client"

import { useModalsStore } from "@/store/modalsStore"
import { Button } from "@/components/Button"

export default function ButtonMoreInfo26() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("26MoreInfo")}>More info</Button>
}
