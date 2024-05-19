"use client"

import { Input } from "@/components/Input"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { SendNotificationToDropdown } from "./SendNotificctionToDropdown/SendNotificationToDropdown"

export function SendNotificationTo() {
  const { sendNotificationTo, inputNotifictionTo, setInputNotificationTo } = useAppointmentStore()

  return (
    <div className="flex flex-row justify-center items-center gap-x-xs">
      <p>Send notification & data to</p>
      <div className="flex flex-row justify-center items-center">
        <SendNotificationToDropdown />
        <Input
          className="h-[24px] w-[150px] rounded-none px-[4px]"
          value={inputNotifictionTo}
          onChange={e => setInputNotificationTo(e.target.value)}
          placeholder={sendNotificationTo === "tg" ? "Telegram" : sendNotificationTo === "dis" ? "Discord" : "Email"}
        />
      </div>
    </div>
  )
}
