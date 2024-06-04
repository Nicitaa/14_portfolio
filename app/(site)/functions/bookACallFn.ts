import { sendTelegramMessageAction } from "../actions/sendTelegramMessageAction"
import { Channel, useAppointmentStore } from "@/store/useAppointmentStore"
import { formatedDateTimeFn } from "./formatedDateTimeFn"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"
import { convertCurrentToTargetTimezone } from "./convertCurrentToTargetTimezone"
import { insertBookingInDBAction } from "../actions/insertBookingInDBAction"
import useToast from "@/store/useToast"

export async function bookACallFn() {
  const { sendNotificationTo, inputNotificationTo, channel } = useAppointmentStore.getState()
  const { selectedDate } = useSelectedDateStore.getState()
  const { selectedTime } = useSelectedTimeStore.getState()
  const { selectedTimezone } = useSelectedTimezoneStore.getState()
  const { setNextStep } = useAppointmentStore.getState()
  const toast = useToast.getState()

  const at = convertCurrentToTargetTimezone(selectedTime, selectedTimezone, "Europe/Moscow")

  let message = formatedDateTimeFn(true)
  if (inputNotificationTo.length > 3) {
    message += `Send notifiaction to ${sendNotificationTo}: ${inputNotificationTo}\n`
  }
  message += `Where: ${channel === "google-meets" ? '<a href="https://meet.google.com/yiy-pbnd-ygo?pli=1">google-meets</a>' : channel}\n`

  try {
    await insertBookingInDBAction(selectedDate, at, channel as Exclude<Channel, null>)
    await sendTelegramMessageAction(message)
    setNextStep()
  } catch (error) {
    if (error instanceof Error) {
      toast.show("error", "Error", error.message)
    }
  }
}
