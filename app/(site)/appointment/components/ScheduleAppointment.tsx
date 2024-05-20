"use client"

import { Calendar } from "react-calendar"

import { Button } from "@/components/Button"
import { TimePicker } from "./TimePicker"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useModalsStore } from "@/store/modalsStore"
import { isDateBeforeTodayOrTime } from "@/utils/isDateBeforeTodayOrTime"
import { TimeZonePicker } from "./TimezonePicker/TimeZonePicker"
import { formatedDateTimeFn } from "@/(site)/functions/formatedDateTimeFn"

export function ScheduleAppointment() {
  const { selectedDate, setSelectedDate } = useSelectedDateStore()
  const { openModal } = useModalsStore()

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-md">
      <div className="flex flex-col items-end">
        <TimeZonePicker />
        <div className="flex border-[#777777] flex-col items-end border">
          <div className="w-full h-[42px] flex justify-between items-center pl-sm">
            <h1>Schedule appointment</h1>
            <TimePicker />
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
