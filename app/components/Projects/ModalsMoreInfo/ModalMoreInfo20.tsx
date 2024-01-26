"use client"

import { CollaborationIcon } from "@/components/CollaborationIcon"
import { ModalMoreInfo } from "@/components/Modals/ModalMoreInfo"
import { TModals } from "@/interfaces/TModals"
import { useModalsStore } from "@/store/modalsStore"

export default function ModalMoreInfo20() {
  const { isOpen, closeModal } = useModalsStore()
  return (
    <ModalMoreInfo
      isOpen={isOpen["20MoreInfo"]}
      onClose={() => closeModal<TModals>("20MoreInfo")}
      label="20_flowmazon-clone"
      siteUrl="https://github.com/nicitaacom/20_flowmazon-clone"
      taskLabel="Improve FullStack WEB developer skill"
      deadline="no deadline"
      price="0$"
      collaborationChildren={<CollaborationIcon tooltiptext={<>Whole site</>} />}
    />
  )
}
