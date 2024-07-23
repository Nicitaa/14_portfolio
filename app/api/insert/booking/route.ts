import { rateLimit } from "@/libs/rateLimit"
import supabaseAdmin from "@/libs/supabaseAdmin"
import { Channel } from "@/store/useAppointmentStore"
import { Value } from "@/store/useSelectedDateStore"
import { nanoid } from "nanoid"
import { cookies, headers } from "next/headers"
import { NextResponse } from "next/server"

export type TAPIInsertBooking = {
  selectedDate: Value
  at: string
  channel: Exclude<Channel, null>
}

export async function POST(req: Request) {
  const { selectedDate, at, channel } = (await req.json()) as TAPIInsertBooking

  const userCookieId = cookies().get("user_cookie_id")?.value || nanoid()

  let bookingDate: string

  const ip = headers().get("x-real-ip") || headers().get("x-forwarded-for") || "127.0.0.1"

  // Rate limit bookings
  const { success } = await rateLimit(ip, 1, 86400) // 1 booking per day

  if (!success) {
    return new NextResponse(`You have already booked a call today. Please try again tomorrow.`, {
      status: 4,
    })
  }

  // to avoid error with type string in DB and type Value here
  if (Array.isArray(selectedDate)) {
    if (selectedDate.length > 0 && selectedDate[0] instanceof Date) {
      // If selectedDate is an array of Date objects, use the first one and convert it to a string
      bookingDate = (selectedDate[0] as Date).toISOString().split("T")[0]
    } else {
      return new NextResponse(`Invalid selectedDate`, {
        status: 400,
      })
    }
  } else if (typeof selectedDate === "object" && selectedDate !== null && selectedDate instanceof Date) {
    // If selectedDate is a Date object, convert it to a string
    bookingDate = selectedDate.toISOString().split("T")[0]
  } else {
    // Handle other cases, like null or unknown
    return new NextResponse(`Invalid selectedDate`, {
      status: 400,
    })
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
