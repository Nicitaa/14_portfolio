import { nanoid } from "nanoid"
import { NextResponse } from "next/server"
import { cookies, headers } from "next/headers"

import { rateLimit } from "@/libs/rateLimit"
import supabaseAdmin from "@/libs/supabaseAdmin"
import { Channel } from "@/store/useAppointmentStore"
import { Value } from "@/store/useSelectedDateStore"
import moment from "moment"

export type TAPIInsertBooking = {
  selectedDate: Value
  at: string
  channel: Exclude<Channel, null>
}

export async function POST(req: Request) {
  const { selectedDate, at, channel } = (await req.json()) as TAPIInsertBooking

  const userCookieId = cookies().get("user_cookie_id")?.value || nanoid()

  const ip = headers().get("x-real-ip") || headers().get("x-forwarded-for") || "127.0.0.1"

  // Rate limit bookings
  const { success } = await rateLimit(ip, 1, 86400) // 1 booking per day

  if (!success) {
    return new NextResponse(`You have already booked a call today. Please try again tomorrow.`, {
      status: 429,
    })
  }

  const date = Array.isArray(selectedDate) ? selectedDate[0] : selectedDate
  if (!date) return new NextResponse(`No selectedDate`, { status: 400 })
  const bookingDate = moment(date).format("YYYY-MM-DD")

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
  return NextResponse.json({})
}
