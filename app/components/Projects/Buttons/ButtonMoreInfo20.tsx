"use client"

import { useModalsStore } from "@/store/modalsStore"

import { Button } from "@/components/Button"

export default function ButtonMoreInfo20() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("20MoreInfo")}>More info</Button>
}
