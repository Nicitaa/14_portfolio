"use server"

import { cookies, headers } from "next/headers"
import { nanoid } from "nanoid"

import { Channel } from "@/store/useAppointmentStore"
import { Value } from "@/store/useSelectedDateStore"
import { rateLimit } from "@/libs/rateLimit"
import supabaseAdmin from "@/libs/supabaseAdmin"

export interface insertDBBookingActionError {
  error: string
}

export async function insertDBBookingAction(selectedDate: Value, at: string, channel: Exclude<Channel, null>) {
  const userCookieId = cookies().get("user_cookie_id")?.value || nanoid()
  let bookingDate: string

  const ip = headers().get("x-real-ip") || headers().get("x-forwarded-for") || "127.0.0.1"

  // Rate limit checks
  const { success } = await rateLimit(ip, 1, 86400)
  if (!success) {
    return { error: "You have already booked a call today. Please try again tomorrow." }
  }

  // to avoid error with type string in DB and type Value here
  // if (Array.isArray(selectedDate)) {
  //   if (selectedDate.length > 0 && selectedDate[0] instanceof Date) {
  //     // If selectedDate is an array of Date objects, use the first one and convert it to a string
  //     bookingDate = (selectedDate[0] as Date).toISOString().split("T")[0]
  //   } else {
  //     return { error: "Invalid selectedDate." }
  //   }
  // } else if (typeof selectedDate === "object" && selectedDate !== null && selectedDate instanceof Date) {
  //   // If selectedDate is a Date object, convert it to a string
  //   bookingDate = selectedDate.toISOString().split("T")[0]
  // } else {
  //   // Handle other cases, like null or unknown
  //   return { error: "Invalid selectedDate." }
  // }

  // const { error } = await supabaseAdmin.from("bookings").insert({
  //   id: nanoid(),
  //   booking_date: bookingDate,
  //   booking_time_MSK: at,
  //   channel: channel,
  //   user_cookie_id: userCookieId,
  // })

  // if (error) {
  //   console.error(40, "Error inserting booking:", error)
  //   throw error
  // }
}
