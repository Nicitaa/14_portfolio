"use client"

import { useModalsStore } from "@/store/modalsStore"

import { Button } from "@/components/Button"

export default function ButtonMoreInfo28() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("28MoreInfo")}>More info</Button>
}
