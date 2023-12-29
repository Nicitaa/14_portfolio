"use client"
import { CollaborationIcon } from "@/components/CollaborationIcon"
import { ModalMoreInfo } from "@/components/Modals/ModalMoreInfo"
import { useModalsStore } from "@/store/modalsStore"

export default function ModalMoreInfo15() {
  const { isOpen, closeModal } = useModalsStore()
  return (
    <ModalMoreInfo
      isOpen={isOpen["28MoreInfo"]}
      onClose={() => closeModal("28MoreInfo")}
      label="28_HooBank"
      siteUrl="https://github.com/nicitaacom/28_notion-clone"
      taskLabel="Develop skill to change something on click"
      deadline="No deadline"
      price="0$"
      collaborationChildren={<CollaborationIcon tooltiptext={<>Whole site</>} />}
    />
  )
}
