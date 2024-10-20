"use client"

import { useAppointmentStore } from "@/store/useAppointmentStore"
import { PrevStepButton } from "./PrevStepButton"
import { SiGooglemeet } from "react-icons/si"
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"

export function ScheduleAppointmentModalHeader() {
  const { step, channel } = useAppointmentStore()

  const headerText =
    step === "step-1" ? "Schedule appointment" : step === "step-2" ? `Schedule ${channel}` : `Appointment created`

  return (
    <div className="relative w-full">
      {step !== "step-1" && <PrevStepButton disabled={step === "step-3"} />}

      <h1 className="w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[1.25rem] text-center font-bold">
        {headerText}
        {/* TODO - UI/UX can be improved here - create it without absolute and with some section that shows channel and add small section that
        shows current step */}
        {/* {step === "step-3" &&
          (channel === "google-meets" ? <SiGooglemeet /> : channel === "discord" ? <FaDiscord /> : <FaTelegramPlane />)} */}
      </h1>
    </div>
  )
}
