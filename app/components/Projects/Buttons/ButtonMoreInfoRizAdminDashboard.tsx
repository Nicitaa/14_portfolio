"use client"

import { useModalsStore } from "@/store/modalsStore"

import { Button } from "@/components/Button"

export default function ButtonMoreInfoRizAdminDashboard() {
  const { openModal } = useModalsStore()
  return <Button onClick={() => openModal("rizAdminDashboard")}>More info</Button>
}
