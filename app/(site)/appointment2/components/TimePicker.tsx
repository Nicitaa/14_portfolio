"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BiTimeFive } from "react-icons/bi"
import { twMerge } from "tailwind-merge"
import moment from "moment"

import { useCloseOnClickEsc } from "@/hooks/useOnClickEsc"
import { useCloseOnClickOutside } from "@/hooks/useOnClickOutside"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"
import { appointmentTimesMSK } from "@/data/appointmentTimesMSK"
import { isDateBeforeTodayOrTime } from "@/utils/isDateBeforeTodayOrTime"

export function TimePicker() {
  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  const { selectedTimezone } = useSelectedTimezoneStore()
  const { selectedDate } = useSelectedDateStore()
  const { selectedTime, setSelectedTime } = useSelectedTimeStore()
  const [showDropdown, setShowDropdown] = useState(false)
  const [hover, setHover] = useState<string | null>(null)

  const isHover = hover !== null

  useCloseOnClickEsc(() => setShowDropdown(false))
  useCloseOnClickOutside(dropdownContainerRef, () => setShowDropdown(false))

  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentTimeMSK = currentHour * 100 + currentMinute
  const tomorrow = moment().add(1, "day").toDate()

  const disableAllToday = currentTimeMSK >= 2130

  // if time over last timewindow then show first timewindow (12:00 MSK) based on user's timezone
  // TODO - if no free timewindows today - show time for next free timewindow
  useEffect(() => {
    if (disableAllToday) {
      const firstTime = convertToTimezone("12:00", selectedTimezone)
      setSelectedTime(firstTime)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableAllToday, selectedTimezone])

  function isDisabled(time: string, targetDate: Date): boolean {
    const [hour, minute] = time.split(":").map(Number)
    const selectedMoment = moment(targetDate).tz("Europe/Moscow").startOf("day")
    const currentMoment = moment().tz("Europe/Moscow")

    if (selectedMoment.isSame(currentMoment, "day")) {
      return hour < currentHour || (hour === currentHour && minute < currentMinute)
    }
    return false
  }

  function mouseHover(index: string) {
    return () => setHover(index)
  }

  function changeSelectedTime(index: string) {
    return () => setSelectedTime(index)
  }

  function convertToTimezone(time: string, targetTimezone: string): string {
    const [hour, minute] = time.split(":").map(Number)
    const timeInMSK = moment.tz({ hour, minute }, "Europe/Moscow")
    const timeInTarget = timeInMSK.clone().tz(targetTimezone)
    return timeInTarget.format("HH:mm")
  }

  const convertedTimePicker = appointmentTimesMSK.map(time => ({
    ...time,
    time: convertToTimezone(time.time, selectedTimezone),
  }))

  return (
    <div
      className="relative flex items-center gap-[2px] px-sm border-l-[1px] border-[#777777] border-solid
      h-[42px] laptop:w-[135px] w-full justify-center cursor-pointer"
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
          const targetDate = selectedDate && !Array.isArray(selectedDate) ? selectedDate : new Date()
          const isTimeDisabled = isDisabled(time.time, isDateBeforeTodayOrTime(targetDate) ? tomorrow : targetDate)
          return (
            <button
              className={twMerge(
                `border-b border-solid border-secondary bg-primary`,
                isTimeDisabled
                  ? "text-secondary/20 bg-primary-foreground"
                  : isHover
                    ? hover === time.time && "bg-cta"
                    : selectedTime === time.time && "bg-cta",
              )}
              onMouseOver={isTimeDisabled ? undefined : mouseHover(time.time)}
              onClick={isTimeDisabled ? undefined : changeSelectedTime(time.time)}
              disabled={isTimeDisabled}
              key={time.time}>
              {time.time}
            </button>
          )
        })}
      </div>
    </div>
  )
}
