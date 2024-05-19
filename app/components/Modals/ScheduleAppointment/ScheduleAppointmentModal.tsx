"use client"

import Link from "next/link"
import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { SiGooglemeet } from "react-icons/si"
import { RiDiscordLine } from "react-icons/ri"
import { PiTelegramLogoBold } from "react-icons/pi"
import { BsPhone } from "react-icons/bs"
import { twMerge } from "tailwind-merge"

import { Button } from "../../Button"
import { useModalsStore } from "@/store/modalsStore"
import { ModalContainer } from "../ModalContainer"
import { getCookie } from "@/utils/helpersCSR"
import { TModals } from "@/interfaces/TModals"
import { Input } from "../../Input"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { ScheduleButtons } from "./components/ScheduleButtons"
import { Step1 } from "./components/Step1"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { Step2 } from "./components/Step2"
import { AnimatePresence, motion } from "framer-motion"
import { PrevStepButton } from "./components/PrevStepButton"
import { ScheduleAppointmentModalHeader } from "./components/ScheduleAppointmentModalHeader"

export function ScheduleAppointmentModal() {
  const { isOpen, openModal, closeModal } = useModalsStore()

  const { step } = useAppointmentStore()
  const { selectedTime } = useSelectedTimeStore()
  const { selectedDate } = useSelectedDateStore()
  const [isLoading, setIsLoading] = useState(false)
  const slowdownCookie = getCookie("slowdown")
  const [isResponseMessage, setIsResponseMessage] = useState(false)

  function bookCall(): void {
    throw new Error("Function not implemented.")
  }

  return (
    <ModalContainer
      className={twMerge("duration-300", step === "step-1" && "w-[550px]", step === "step-2" && "w-[600px]")}
      isOpen={isOpen["Appointment"]}
      onClose={() => closeModal<TModals>("Appointment")}>
      <div className="flex flex-col items-center gap-y-[2rem] px-[2rem] py-[1.5rem] pt-[2rem] overflow-x-hidden">
        <ScheduleAppointmentModalHeader />
        <AnimatePresence mode="wait">
          {step === "step-1" ? (
            <motion.div
              key={step}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-125%" }}
              transition={{ duration: 0.25 }}>
              <Step1 />
            </motion.div>
          ) : step === "step-2" ? (
            <motion.div
              key={step}
              className="w-full"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}>
              <Step2 />
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}>
              step3
            </motion.div>
          )}
          {/* {step === 'step-3' && <Step3/>} */}
        </AnimatePresence>
      </div>
    </ModalContainer>
  )
}
