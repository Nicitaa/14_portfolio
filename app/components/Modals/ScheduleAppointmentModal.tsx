"use client"

import Link from "next/link"
import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { PiTelegramLogoBold } from "react-icons/pi"
import { RiDiscordLine } from "react-icons/ri"
import { SiGooglemeet } from "react-icons/si"
import { BsPhone } from "react-icons/bs"
import { twMerge } from "tailwind-merge"

import { Button } from "../Button"
import { useModalsStore } from "@/store/modalsStore"
import { ModalContainer } from "./ModalContainer"
import { getCookie } from "@/utils/helpersCSR"
import { TModals } from "@/interfaces/TModals"
import { Input } from "../Input"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"

type Step = "initial" | "telegram" | "discord" | "phone" | "google-meets"

export function ScheduleAppointmentModal() {
  const { isOpen, openModal, closeModal } = useModalsStore()
  const [step, setStep] = useState<Step>("initial")
  const [contactData, setContactData] = useState("")
  const { selectedTime } = useSelectedTimeStore()
  const { selectedDate } = useSelectedDateStore()
  const [isLoading, setIsLoading] = useState(false)
  const slowdownCookie = getCookie("slowdown")
  const [isResponseMessage, setIsResponseMessage] = useState(false)

  function bookCall(): void {
    throw new Error("Function not implemented.")
  }

  return (
    <ModalContainer isOpen={isOpen["Appointment"]} onClose={() => closeModal<TModals>("Appointment")}>
      <div></div>
    </ModalContainer>
  )
}
