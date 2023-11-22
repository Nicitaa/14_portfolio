"use client"
import { FormEvent, useState } from "react"
import Link from "next/link"
import { Calendar } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { PiTelegramLogoBold } from "react-icons/pi"
import { RiDiscordLine } from "react-icons/ri"
import { BsPhone } from "react-icons/bs"
import { IoIosArrowRoundBack } from "react-icons/io"
import { SiGooglemeet } from "react-icons/si"
import axios from "axios"

import { TAPITelegram } from "@/api/telegram/route"
import { TModals } from "@/interfaces/TModals"
import { setCookie } from "@/utils/helpersCSR"
import { useModalsStore } from "@/store/modalsStore"
import { ModalContainer } from "@/components/Modals/ModalContainer"
import { Input } from "@/components/Input"
import { Button } from "../components/Button"
import { TimePicker } from "@/components/TimePicker"

type Step = "initial" | "telegram" | "discord" | "phone" | "google-meets"

export default function Appointment() {
  const [buttonDate, setButtonDate] = useState<string | undefined>("")
  const [buttonTime, setButtonTime] = useState<string | undefined>("10:00")
  const [step, setStep] = useState<Step>("initial")
  const [contactData, setContactData] = useState("")
  //if key === 0 its !reponseMessage
  const [responseMessage, setResponseMessage] = useState(<p key={0}></p>)

  const { isOpen, openModal, closeModal } = useModalsStore()

  async function bookCall(e: FormEvent) {
    e.preventDefault()
    // Check if cookie 'slowdown' is expired
    const slowdownCookie = document.cookie.match(/(^|;) ?slowdown=([^;]*)(;|$)/)
    if (!slowdownCookie || new Date().getTime() > Number(slowdownCookie[2])) {
      // Perform code below

      let message = `<b>Somebody booked ${step} call</b>\n`
      message += `Contact data - ${contactData ? contactData : "https://meet.google.com/yiy-pbnd-ygo"}\n`
      message += `Date - ${buttonDate} at ${buttonTime}`

      await axios.post("/api/telegram", { message: message } as TAPITelegram)

      // Set new cookie 'slowdown' for 1 day
      setCookie("slowdown", "true", 1)
      step === "google-meets"
        ? setResponseMessage(
            <div key={1} className="text-success">
              Use{" "}
              <Link className="text-cta hover:opacity-90 duration-300" href="https://meet.google.com/yiy-pbnd-ygo">
                this&nbsp;
              </Link>
              link to join call - set reminder in your phone
            </div>,
          )
        : setResponseMessage(
            <p key={1} className="text-success">
              Request sent. Thank you
            </p>,
          )
    } else {
      // Throw console error 'you may do appointment once per day'
      const error = "You may book an appointment only once per day"
      console.error(error)
      setResponseMessage(
        <p key={1} className="text-danger">
          {error}
        </p>,
      )
    }
  }
  function handleSelect(date: Date) {
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".")

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
        className={`w-[400px] desktop:w-[730px] ${
          step === "initial"
            ? "h-[250px] desktop:h-[140px]"
            : step === "phone" || step === "google-meets"
              ? "h-[221px] desktop:h-[221px]"
              : "h-[270px] desktop:h-[281px]"
        }
        
        py-md overflow-hidden duration-300`}
        isOpen={isOpen["Appointment"]}
        onClose={() => closeModal<TModals>("Appointment")}>
        <div className={`relative flex flex-row-reverse justify-center items-center font-bold py-md px-md`}>
          <h1>
            {step === "initial"
              ? "Choose communication method"
              : step === "google-meets"
                ? "Book google-meets call"
                : `Enter ${step}`}
          </h1>
          {step !== "initial" && (
            <button
              className="absolute left-[5%] text-cta flex flex-row justify-center items-center"
              onClick={() => setStep("initial")}>
              <IoIosArrowRoundBack className="text-cta" size={30} /> back
            </button>
          )}
        </div>

        {step === "initial" ? (
          <div className="w-full flex flex-col gap-sm desktop:flex-row justify-center mx-auto">
            <Button onClick={() => setStep("telegram")}>
              Telegram call <PiTelegramLogoBold />
            </Button>
            <Button onClick={() => setStep("discord")}>
              Discord call <RiDiscordLine />
            </Button>
            <Button onClick={() => setStep("phone")}>
              Phone call <BsPhone />
            </Button>
            <Button onClick={() => setStep("google-meets")}>
              Google meets <SiGooglemeet />
            </Button>
          </div>
        ) : (
          <div>
            <form className="flex flex-col gap-y-xs justify-center items-center" onSubmit={bookCall}>
              {step !== "google-meets" && (
                <Input value={contactData} onChange={e => setContactData(e.target.value)} placeholder={step} />
              )}

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
              {step === "google-meets" && (
                <p>
                  Are you sure you want book a call in google-meets for {buttonDate} at {buttonTime}?
                </p>
              )}
              <Button className="mt-xs">Book call</Button>
              {responseMessage}
            </form>
          </div>
        )}
      </ModalContainer>
    </>
  )
}
