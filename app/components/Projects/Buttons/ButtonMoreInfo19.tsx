"use client"

import { useModalsStore } from "@/store/modalsStore"

import { Button } from "@/components/Button"

export default function ButtonMoreInfo19() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("19MoreInfo")}>More info</Button>
}
