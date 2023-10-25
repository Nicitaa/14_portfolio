"use client"
import { useState } from "react"
import { Calendar } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { Button } from "../components/Button"
import { TimePicker } from "@/components/TimePicker"
import { useModalsStore } from "@/store/modalsStore"
import { ModalContainer } from "@/components/Modals/ModalContainer"
import { PiTelegramLogoBold } from "react-icons/pi"
import { RiDiscordLine } from "react-icons/ri"
import { BsPhone } from "react-icons/bs"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { IoIosArrowRoundBack } from "react-icons/io"
import { Input } from "@/components/Input"
import Link from "next/link"

type Step = "initial" | "telegram" | "discord" | "phone" | "google-meets"

export default function Appointment() {
  const [buttonDate, setButtonDate] = useState<string | undefined>("")
  const [buttonTime, setButtonTime] = useState<string | undefined>("10:00")
  const [step, setStep] = useState<Step>("initial")
  const [contactData, setContactData] = useState("")

  const { isOpen, openModal, closeModal } = useModalsStore()

  function handleSelect(date: Date) {
    console.log(date) // native Date object
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".")

    console.log(formattedDate) // Output: 25.11.2023
    setButtonDate(formattedDate)
  }

  return (
    <>
      <div
        className="flex flex-col gap-y-md justify-center items-center 
    h-[90vh] laptop:h-[calc(100vh-72px-144px)]">
        <div
          className="relative max-w-[768px] min-h-[390px] max-h-[390px] w-[100%] mobile:w-[80%] border-[1px] rounded-sm 
tablet:w-[50%] tablet:h-[60%] laptop:w-[60%] laptop:h-[75%] overflow-hidden">
          <div className="flex flex-row justify-end">
            <h1 className="hidden laptop:flex absolute left-[50%] translate-x-[-50%] text-center pt-md">
              Schedule an appointment
            </h1>
            <TimePicker setButtonTime={setButtonTime} />
          </div>

          <div className="mb-[4rem] w-full h-[90%] overflow-hidden">
            <Calendar
              color="#202020"
              editableDateInputs={true}
              fixedHeight={true}
              date={new Date()}
              onChange={handleSelect}
            />
          </div>
        </div>
        {buttonDate && (
          <Button onClick={() => openModal("Appointment")}>
            Book for{" "}
            <p className="text-secondary">
              {buttonDate} at {buttonTime}
            </p>
          </Button>
        )}
      </div>
      <ModalContainer
        className={`w-[400px] desktop:w-[600px] ${step === "initial" ? "h-[250px] desktop:h-[160px]" : "h-[260px]"}
        ${step === "phone" ? "h-[201px] desktop:h-[200px]" : ""}
        py-md overflow-hidden duration-300`}
        isOpen={isOpen["Appointment"]}
        onClose={() => closeModal("Appointment")}>
        <div className={`relative flex flex-row-reverse justify-center items-center font-bold py-md px-md`}>
          <h1>{step === "initial" ? "Choose communication method" : `Enter ${step}`}</h1>
          {step !== "initial" && (
            <button
              className="absolute left-[5%] text-cta flex flex-row justify-center items-center"
              onClick={() => setStep("initial")}>
              <IoIosArrowRoundBack className="text-cta" size={30} /> back
            </button>
          )}
        </div>

        {step === "initial" ? (
          <div className="flex flex-col gap-sm desktop:flex-row justify-center w-[80%] mx-auto">
            <Button onClick={() => setStep("telegram")}>
              Telegram call <PiTelegramLogoBold />
            </Button>
            <Button onClick={() => setStep("discord")}>
              Discord call <RiDiscordLine />
            </Button>
            <Button onClick={() => setStep("phone")}>
              Phone call <BsPhone />
            </Button>
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-y-xs justify-center items-center">
              <Input value={contactData} onChange={e => setContactData(e.target.value)} placeholder={step} />

              {(step === "discord" || step === "telegram") && (
                <div className="text-center">
                  <h6>or</h6>
                  <h5 className="text-[18px] font-semibold">
                    Just message me in&nbsp;
                    <Link
                      className="text-cta"
                      href={
                        step === "telegram" ? "https://t.me/nicitaacom" : "https://discord.com/users/780002958380498955"
                      }
                      target="_blank">
                      {step}
                    </Link>
                  </h5>
                </div>
              )}
              <Button
                className="mt-xs"
                onClick={() => {
                  /* TELEGRAM BOT SEND ME INFO contactData buttonDate buttonTime */
                }}>
                Book call
              </Button>
            </div>
          </div>
        )}
      </ModalContainer>
    </>
  )
}