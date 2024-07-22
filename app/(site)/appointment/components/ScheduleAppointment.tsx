"use client"

import { useEffect } from "react"
import { Calendar } from "react-calendar"
import { nanoid } from "nanoid"

import { Button } from "@/components/Button"
import { TimePicker } from "./TimePicker"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useModalsStore } from "@/store/modalsStore"
import { isDateBeforeTodayOrTime } from "@/utils/isDateBeforeTodayOrTime"
import { TimeZonePicker } from "./TimezonePicker/TimeZonePicker"
import { formatedDateTimeFn } from "@/(site)/functions/formatedDateTimeFn"
import { getCookie, setCookie } from "@/utils/helpersCSR"

export type Bookings = {
  bookings: {
    booking_date: string
    booking_time_MSK: string
  }[]
}

export function ScheduleAppointment({ bookings }: Bookings) {
  const { selectedDate, setSelectedDate } = useSelectedDateStore()
  const { openModal } = useModalsStore()

  useEffect(() => {
    if (!getCookie("user_cookie_id")) {
      setCookie("user_cookie_id", nanoid())
    }
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-md">
      <div className="flex flex-col items-end">
        <TimeZonePicker />
        <div className="flex border-[#777777] flex-col items-end border">
          <div className="w-full h-[42px] flex justify-between items-center pl-sm">
            <h1>Schedule appointment</h1>
            <TimePicker bookings={bookings} />
          </div>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) => (isDateBeforeTodayOrTime(date) ? "opacity-50 hover:bg-transparent" : "")}
            tileDisabled={({ date }) => isDateBeforeTodayOrTime(date)}
          />
        </div>
      </div>

      <Button onClick={() => openModal("Appointment")}>{formatedDateTimeFn()}</Button>
    </div>
  )
}
