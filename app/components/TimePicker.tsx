"use client"

import { useEffect, useRef, useState } from "react"
import { timePicker } from "@/data/timePicker"
import { BiTimeFive } from "react-icons/bi"
import Image from "next/image"

export function TimePicker({
  setButtonTime,
}: {
  setButtonTime: React.Dispatch<React.SetStateAction<string | undefined>>
}) {
  const [showDropdown, setShowDropdown] = useState(false)

  /* for close on clicking outside */
  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!dropdownContainerRef.current?.contains(e.target)) {
          setShowDropdown(false)
        }
      }
    }

    document.addEventListener("mousedown", handler)
  }, [])

  /* for closing on esc */
  if (typeof document !== undefined) {
    document.onkeydown = function (evt) {
      if (evt.keyCode == 27) {
        setShowDropdown(false)
      }
    }
  }

  const [currentTime, setCurrentTime] = useState("10:00")
  const [hover, setHover] = useState<string | null>(null)
  const isHover = hover !== null

  function mouseHover(index: string) {
    return () => setHover(index)
  }

  function changeLanguage(index: string) {
    return () => {
      setButtonTime(index), setCurrentTime(index)
    }
  }

  return (
    <div
      className="relative flex items-center gap-sm px-sm border-b-[1px] border-l-[1px] border-solid border-secondary
    h-lg w-[150px] cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
      ref={dropdownContainerRef}>
      <BiTimeFive />
      <div className="flex items-center w-[7rem]">
        <h1 className="text-xs text-secondary">Time:{currentTime}</h1>
        <Image className="w-md h-md" src="/tringle.png" alt="tringle" width={32} height={32} />
      </div>

      {/* Dropdown-content */}
      <div
        className={`dropdown absolute top-[100%] left-[-1px] right-[-1px]
      border-[1px] border-solid border-secondary z-10 
       flex flex-col text-md text-center text-secondary overflow-scroll max-h-[240px] hide-scrollbar ${
         showDropdown
           ? "opacity-100 visible translate-y-[0px] transition-all duration-300"
           : "opacity-0 invisible translate-y-[-20px] transition-all duration-300"
       }`}
        onMouseLeave={() => setHover(null)}>
        {timePicker.map(time =>
          time.time !== "20:00" ? (
            <button
              className={`border-b-[1px] border-solid border-secondary bg-primary
        transition-all duration-[300ms]
                ${isHover ? hover === time.time && "active" : currentTime === time.time && "active"}`}
              onMouseOver={mouseHover(time.time)}
              onClick={changeLanguage(time.time)}
              key={time.time}>
              {time.time}
            </button>
          ) : (
            <button
              className={`border-solid border-secondary bg-primary
        transition-all duration-[300ms]
         ${isHover ? hover === time.time && "active" : currentTime === time.time && "active"}`}
              onMouseOver={mouseHover(time.time)}
              onClick={changeLanguage(time.time)}
              key={time.time}>
              {time.time}
            </button>
          ),
        )}
      </div>
    </div>
  )
}
