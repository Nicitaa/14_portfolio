"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BiTimeFive } from "react-icons/bi"
import { twMerge } from "tailwind-merge"

import { timePicker } from "@/data/timePicker"
import { useCloseOnClickEsc } from "@/hooks/useOnClickEsc"
import { useCloseOnClickOutside } from "@/hooks/useOnClickOutside"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"

export function TimePicker() {
  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  const { selectedTimezone } = useSelectedTimezoneStore()
  const { setSelectedDate } = useSelectedDateStore()
  const { selectedTime, setSelectedTime } = useSelectedTimeStore()
  const [showDropdown, setShowDropdown] = useState(false)
  const [hover, setHover] = useState<string | null>(null)

  const isHover = hover !== null

  useCloseOnClickEsc(() => setShowDropdown(false))
  useCloseOnClickOutside(dropdownContainerRef, () => setShowDropdown(false))

  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()

  useEffect(() => {
    // Get the current time in MSK
    const nowInMSK = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }))
    const mskHour = nowInMSK.getHours()
    const mskMinute = nowInMSK.getMinutes()
    const currentTimeMSK = mskHour * 100 + mskMinute

    if (currentTimeMSK >= 2200) {
      // Set selected date to tomorrow
      const tomorrow = new Date(now)
      tomorrow.setDate(now.getDate() + 1)
      setSelectedDate(tomorrow)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedDate])

  function mouseHover(index: string) {
    return () => setHover(index)
  }

  function changeSelectedTime(index: string) {
    return () => setSelectedTime(index)
  }

  console.log(57, "selectedTimezone.name - ", selectedTimezone)

  function convertToTimezone(time: string, targetTimezone: string): string {
    const [hour, minute] = time.split(":").map(Number)
    const timeInMSK = new Date(Date.UTC(2023, 0, 1, hour, minute))
    const options: Intl.DateTimeFormatOptions = {
      timeZone: targetTimezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
    const timeInTarget = new Intl.DateTimeFormat("en-US", options).format(timeInMSK)
    return timeInTarget
  }

  const convertedTimePicker = timePicker.map(time => ({
    ...time,
    time: convertToTimezone(time.time, selectedTimezone),
  }))

  return (
    <div
      className="relative flex items-center gap-[2px] px-sm border-l-[1px] border-[#777777] border-solid
      h-[42px] laptop:w-[130px] w-full justify-center cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
      ref={dropdownContainerRef}>
      <BiTimeFive className="text-secondary-foreground mb-[2px]" />
      <div className="flex justify-center laptop:justify-center items-center gap-[2px] laptop:w-[7rem]">
        <h1 className="text-xs text-secondary">Time: {selectedTime}</h1>
        <Image className="w-md h-md mb-[4px]" src="/tringle.png" alt="tringle" width={32} height={32} />
      </div>

      {/* Dropdown-content */}
      <div
        className={twMerge(
          `absolute top-[100%] left-[-1px] right-[-1px]
          border-x border-[#777777] z-10
          flex flex-col text-md text-center text-secondary overflow-scroll max-h-[240px] hide-scrollbar`,
          showDropdown
            ? "opacity-100 visible translate-y-[0px] transition-all duration-300"
            : "opacity-0 invisible translate-y-[-20px] transition-all duration-300",
        )}
        onMouseLeave={() => setHover(null)}>
        {convertedTimePicker.map(time => {
          const [hour, minute] = time.time.split(":").map(Number)
          const isDisabled = hour < currentHour || (hour === currentHour && minute < currentMinute)
          return (
            <button
              className={twMerge(
                `border-b border-solid border-secondary bg-primary`,
                isDisabled
                  ? "text-secondary/20 bg-primary-foreground"
                  : isHover
                    ? hover === time.time && "bg-cta"
                    : selectedTime === time.time && "bg-cta",
              )}
              onMouseOver={isDisabled ? undefined : mouseHover(time.time)}
              onClick={isDisabled ? undefined : changeSelectedTime(time.time)}
              disabled={isDisabled}
              key={time.time}>
              {time.time}
            </button>
          )
        })}
      </div>
    </div>
  )
}
