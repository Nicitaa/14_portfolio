"use client"

import { CollaborationIcon } from "@/components/CollaborationIcon"
import { ModalMoreInfo } from "@/components/Modals/ModalMoreInfo"
import { TModals } from "@/interfaces/TModals"
import { useModalsStore } from "@/store/modalsStore"

export default function ModalMoreInfo23() {
  const { isOpen, closeModal } = useModalsStore()
  return (
    <ModalMoreInfo
      isOpen={isOpen["23MoreInfo"]}
      onClose={() => closeModal<TModals>("23MoreInfo")}
      label="23_store"
      siteUrl="https://github.com/nicitaacom/23_store"
      taskLabel="Create site to buy and sell something"
      deadline="1 month"
      price="3000$-12000$"
      collaborationChildren={<CollaborationIcon tooltiptext={<>Whole site</>} />}
    />
  )
}
