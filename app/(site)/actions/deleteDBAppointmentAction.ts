"use server"

import supabaseAdmin from "@/libs/supabaseAdmin"
import { revalidatePath } from "next/cache"

export async function deleteDBAppointmentAction(bookedAppointmentId: string) {
  await supabaseAdmin.from("bookings").delete().eq("id", bookedAppointmentId)
  revalidatePath("/appointment")
}
