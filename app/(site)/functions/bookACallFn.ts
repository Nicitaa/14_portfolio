import { sendTelegramMessageAction } from "../actions/sendTelegramMessageAction"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import { formatedDateTimeFn } from "./formatedDateTimeFn"

export async function bookACallFn() {
  const { sendNotificationTo, inputNotificationTo, channel } = useAppointmentStore.getState()

  let message = formatedDateTimeFn(true)
  if (inputNotificationTo.length > 3) {
    message += `Send notifiaction to ${sendNotificationTo}: ${inputNotificationTo}\n`
  }
  message += `Where: ${channel === "google-meets" ? '<a href="https://meet.google.com/yiy-pbnd-ygo?pli=1">google-meets</a>' : channel}\n`

  await sendTelegramMessageAction(message)
  // TODO insert here in DB booked call to disable it in appointment timepicker
}
