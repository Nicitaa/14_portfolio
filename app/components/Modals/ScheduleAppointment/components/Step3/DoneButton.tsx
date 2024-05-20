"use client"
import { Button } from "@/components/Button"
import { useModalsStore } from "@/store/modalsStore"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { twMerge } from "tailwind-merge"

export function DoneButton() {
  const { inputNotificationTo, isCustomNotification } = useAppointmentStore()
  const { closeModal } = useModalsStore()

  return (
    <div className="w-full flex justify-center items-center">
      <Button
        className={twMerge(
          "px-[16px] !py-[6px] font-bold",
          inputNotificationTo.length < 4 && !isCustomNotification && "pointer-events-none cursor-default opacity-50",
        )}
        onClick={() => closeModal("Appointment")}>
        Done
      </Button>
    </div>
  )
}
