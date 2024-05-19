"use client"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { PrevStepButton } from "./PrevStepButton"

export function ScheduleAppointmentModalHeader() {
  const { step, channel } = useAppointmentStore()

  const headerText =
    step === "step-1" ? "Schedule appointment" : step === "step-2" ? `Schedule ${channel}` : `Confirm ${channel}`

  return (
    <div className="relative w-full">
      {step !== "step-1" && <PrevStepButton />}

      <h1 className="w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[1.25rem] text-center font-bold">
        {headerText}
      </h1>
    </div>
  )
}
