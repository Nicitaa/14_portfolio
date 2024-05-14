"use client"

import { Calendar } from "react-calendar"

import { Button } from "@/components/Button"
import { TimePicker } from "./TimePicker"
import moment, { MomentInput } from "moment"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useModalsStore } from "@/store/modalsStore"
import { isDateBeforeTodayOrTime } from "@/utils/isDateBeforeTodayOrTime"
import { TimeZonePicker } from "./TimezonePicker/TimeZonePicker"
import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function ScheduleAppointment() {
  const { selectedDate, setSelectedDate } = useSelectedDateStore()
  const { selectedTime } = useSelectedTimeStore()
  const { selectedTimezone } = useSelectedTimezoneStore()
  const { openModal } = useModalsStore()

  const formattedDate = moment(selectedDate as MomentInput).format("DD.MM.YYYY")

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

      <Button onClick={() => openModal("Appointment")}>
        {formattedDate} at {selectedTime} {selectedTimezone}
      </Button>
    </div>
  )
}
