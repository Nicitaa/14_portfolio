import axios, { AxiosError } from "axios"

import { sendTelegramMessageAction } from "../actions/sendTelegramMessageAction"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { formatedDateTimeFn } from "./formatedDateTimeFn"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"
import { convertCurrentToTargetTimezone } from "./convertCurrentToTargetTimezone"
import useToast from "@/store/useToast"
import { TAPIInsertBooking } from "@/api/insert/booking/route"
import { scheduleTgNtfctnAction } from "../actions/scheduleTgNtfctnAction"

export async function bookACallFn() {
  const { sendNotificationTo, inputNotificationTo, channel } = useAppointmentStore.getState()
  const { selectedDate } = useSelectedDateStore.getState()
  const { selectedTime } = useSelectedTimeStore.getState()
  const { selectedTimezone } = useSelectedTimezoneStore.getState()
  const { setNextStep, appointmentNote } = useAppointmentStore.getState()
  const toast = useToast.getState()

  const atMSK = convertCurrentToTargetTimezone(selectedTime, selectedTimezone, "Europe/Moscow")

  let message = formatedDateTimeFn(true)
  if (inputNotificationTo.length > 3) {
    message += `Send notifiaction to ${sendNotificationTo}: ${inputNotificationTo}\n`
  }
  if (appointmentNote.length > 3) {
    message += `Appointment note: ${appointmentNote}\n`
  }
  message += `Where: ${channel === "google-meets" ? '<a href="https://meet.google.com/yiy-pbnd-ygo?pli=1">google-meets</a>' : channel}\n`

  try {
    // in API route to keep error handling (in server action error handling in prod doesn't work)
    await axios.post("/api/insert/booking", { selectedDate, atMSK, channel } as TAPIInsertBooking)
    await sendTelegramMessageAction(message)
    await scheduleTgNtfctnAction(message, selectedDate, atMSK, channel, sendNotificationTo, inputNotificationTo)
    setNextStep()
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.show("error", "Error booking a call", error.response?.data, 15000)
    }
  }
}
