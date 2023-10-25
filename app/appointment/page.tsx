"use client"
import { useState } from "react"
import { Calendar } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { Button } from "../components/Button"
import { TimePicker } from "@/components/TimePicker"

export default function Appointment() {
  const [buttonDate, setButtonDate] = useState<string | undefined>("")
  const [buttonTime, setButtonTime] = useState<string | undefined>("10:00")

  function handleSelect(date: Date) {
    console.log(date) // native Date object
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".")

    console.log(formattedDate) // Output: 25.11.2023
    setButtonDate(formattedDate)
  }

  return (
    <div
      className="flex flex-col gap-y-md justify-center items-center 
    h-[90vh] laptop:h-[calc(100vh-72px-144px)]">
      <div
        className="relative max-w-[768px] min-h-[390px] max-h-[390px] w-[100%] mobile:w-[80%] border-[1px] rounded-sm 
tablet:w-[50%] tablet:h-[60%] laptop:w-[60%] laptop:h-[75%] overflow-hidden">
        <div className="flex flex-row justify-end">
          <h1 className="absolute left-[50%] translate-x-[-50%] text-center pt-md">Schedule an appointment</h1>
          <TimePicker setButtonTime={setButtonTime} />
        </div>

        <div className="mb-[4rem] w-full h-[90%] overflow-hidden">
          <Calendar
            color="#202020"
            editableDateInputs={true}
            fixedHeight={true}
            date={new Date()}
            onChange={handleSelect}
          />
        </div>
      </div>
      {buttonDate && (
        <Button
          onClick={() => {
            /* SEND REQUEST TO TELEGRAM */
          }}>
          Book for{" "}
          <p className="text-secondary">
            {buttonDate} at {buttonTime}
          </p>
        </Button>
      )}
    </div>
  )
}
