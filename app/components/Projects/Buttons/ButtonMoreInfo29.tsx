"use client"

import { useModalsStore } from "@/store/modalsStore"

import { Button } from "@/components/Button"

export default function ButtonMoreInfo29() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("29MoreInfo")}>More info</Button>
}
