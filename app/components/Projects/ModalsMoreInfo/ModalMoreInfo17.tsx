"use client"
import { CollaborationIcon } from "@/components/CollaborationIcon"
import { ModalMoreInfo } from "@/components/Modals/ModalMoreInfo"
import { TModals } from "@/interfaces/TModals"
import { useModalsStore } from "@/store/modalsStore"

export default function ModalMoreInfo15() {
  const { isOpen, closeModal } = useModalsStore()
  return (
    <ModalMoreInfo
      isOpen={isOpen["17MoreInfo"]}
      onClose={() => closeModal<TModals>("17MoreInfo")}
      label="17_messenger-clone"
      siteUrl="https://github.com/nicitaacom/17_messenger-clone"
      taskLabel="Build some clone to improve skills"
      deadline="no deadline"
      price="0$"
      collaborationChildren={<CollaborationIcon tooltiptext={<>Whole site</>} />}
    />
  )
}
