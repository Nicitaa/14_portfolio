"use server"

import { cookies, headers } from "next/headers"
import { nanoid } from "nanoid"

import { Channel } from "@/store/useAppointmentStore"
import supabaseAdmin from "@/libs/supabaseAdmin"
import { Value } from "@/store/useSelectedDateStore"
import { rateLimit } from "@/libs/rateLimit"

export async function insertBookingInDBAction(selectedDate: Value, at: string, channel: Exclude<Channel, null>) {
  const userCookieId = cookies().get("user_cookie_id")?.value || nanoid()

  let bookingDate: string

  // Extract IP address
  const ip = headers().get("x-forwarded-for") || headers().get("remote-addr") || "unknown"

  // Rate limit checks
  const cookieIdentifier = `booking-${userCookieId}`
  const ipIdentifier = `booking-${ip}`

  const cookieLimit = await rateLimit(cookieIdentifier)
  const ipLimit = await rateLimit(ipIdentifier)

  console.log(26, "cookieIdentifier - ", cookieIdentifier.valueOf())
  console.log(27, "ipIdentifier - ", ipIdentifier.valueOf())

  if (!cookieLimit.success) {
    throw new Error(`You have already booked a call today. Please try again tomorrow. ${cookieIdentifier.valueOf()}`)
  }
  if (!ipLimit.success) {
    throw new Error(`You have already booked a call today. Please try again tomorrow. ${ipIdentifier.valueOf()}`)
  }

  // to avoid error with type string in DB and type Value here
  if (Array.isArray(selectedDate)) {
    if (selectedDate.length > 0 && selectedDate[0] instanceof Date) {
      // If selectedDate is an array of Date objects, use the first one and convert it to a string
      bookingDate = (selectedDate[0] as Date).toISOString().split("T")[0]
    } else {
      throw new Error("Invalid selectedDate")
    }
  } else if (typeof selectedDate === "object" && selectedDate !== null && selectedDate instanceof Date) {
    // If selectedDate is a Date object, convert it to a string
    bookingDate = selectedDate.toISOString().split("T")[0]
  } else {
    // Handle other cases, like null or unknown
    throw new Error("Invalid selectedDate")
  }

  const { error } = await supabaseAdmin.from("bookings").insert({
    id: nanoid(),
    booking_date: bookingDate,
    booking_time_MSK: at,
    channel: channel,
    user_cookie_id: userCookieId,
  })

  if (error) {
    console.error(40, "Error inserting booking:", error)
    throw error
  }
}
