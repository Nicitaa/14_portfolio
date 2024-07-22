import { FaDiscord, FaTelegramPlane } from "react-icons/fa"
import { PiEnvelopeSimpleFill } from "react-icons/pi"

import { useAppointmentStore } from "@/store/useAppointmentStore"

export function DropdownContainerContent() {
  const { sendNotificationTo, setNextSendNotificationTo } = useAppointmentStore()
  return (
    <button
      className="w-full h-[24px] flex flex-row gap-x-2 justify-around items-center bg-cta/50"
      onClick={setNextSendNotificationTo}
      type="button">
      {sendNotificationTo === "tg" ? (
        <FaTelegramPlane size={16} />
      ) : sendNotificationTo === "dis" ? (
        <FaDiscord size={16} />
      ) : (
        <PiEnvelopeSimpleFill size={16} />
      )}
    </button>
  )
}
