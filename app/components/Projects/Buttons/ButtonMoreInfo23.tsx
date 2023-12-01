"use client"

import { useModalsStore } from "@/store/modalsStore"

import { Button } from "@/components/Button"

export default function ButtonMoreInfo23() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("23MoreInfo")}>More info</Button>
}
