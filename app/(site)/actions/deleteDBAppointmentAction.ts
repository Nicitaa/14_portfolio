"use server"

import supabaseAdmin from "@/libs/supabaseAdmin"
import { revalidatePath } from "next/cache"
import { sendTelegramMessageAction } from "./sendTelegramMessageAction"

export async function deleteDBAppointmentAction(
  bookedAppointmentId: string,
  bookedDate: string,
  bookedTimeMSK: string,
) {
  await supabaseAdmin.from("bookings").delete().eq("id", bookedAppointmentId)
  await sendTelegramMessageAction(`somebody canceled booking a call ${bookedDate} at ${bookedTimeMSK}`)
  revalidatePath("/appointment")
}
