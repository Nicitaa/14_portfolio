"use client"

import { Input } from "@/components/Input"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { SendNotificationToSwitcher } from "./SendNotificctionToDropdown/SendNotificationToSwitcher"
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetError } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { FormInput } from "@/(site)/appointment/components/FormInput"

interface FormData {
  inputNotificationTo: string
}

interface SendNotificationToProps {
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<FormData>
  setError: UseFormSetError<FormData>
}

export function SendNotificationTo({ errors, register }: SendNotificationToProps) {
  const { sendNotificationTo } = useAppointmentStore()

  return (
    <div className="flex flex-row justify-center items-center gap-x-xs">
      <p>Send notification & data to</p>
      <div className="flex flex-row justify-center items-center">
        <SendNotificationToSwitcher />
        <FormInput
          className={twMerge(
            "h-[26px] w-[150px] rounded-none px-[2px] outline-none font-normal",
            errors["inputNotificationTo"] && "text-danger",
          )}
          id="inputNotificationTo"
          errors={errors}
          register={register}
          placeholder={sendNotificationTo === "tg" ? "Telegram" : sendNotificationTo === "dis" ? "Discord" : "Email"}
        />
      </div>
      <p>or I create it on my own</p>
    </div>
  )
}
