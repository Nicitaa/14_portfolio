"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"
import moment from "moment"
import { Input } from "@/components/Input"

export function DropdownContent({ isShowDropdown }: { isShowDropdown: boolean }) {
  const [hover, setHover] = useState<string | null>(null)
  const { selectedTimezone, setSelectedTimezone } = useSelectedTimezoneStore()
  const isHover = hover !== null

  function mouseHover(index: string) {
    return () => setHover(index)
  }

  function changeSelectedTimezone(index: string) {
    return () => setSelectedTimezone(index) // TODO - I think that I need to keep name only
  }

  const timezones = moment.tz.names()

  const [searchInput, setSearchInput] = useState("")
  const filteredTimezones = filterTimezones(searchInput)

  function filterTimezones(input: string) {
    // Filter timezones based on the search input
    const filtered = timezones.filter(
      timezone => timezone.length <= 18 && timezone.toLowerCase().includes(input.toLowerCase()),
    )

    // Sort the filtered timezones by relevance
    filtered.sort((a, b) => {
      const indexA = a.toLowerCase().indexOf(input.toLowerCase())
      const indexB = b.toLowerCase().indexOf(input.toLowerCase())
      return indexA - indexB
    })

    return filtered
  }

  return (
    <div
      className={twMerge(
        "absolute w-full bg-primary top-[100%] left-0 border border-[#777777] border-t-0",
        isShowDropdown
          ? "opacity-100 visible translate-y-[0px] transition-all duration-300"
          : "opacity-0 invisible translate-y-[-20px] transition-all duration-300",
      )}
      onMouseLeave={() => setHover(null)}>
      {/* Search Input */}
      <Input
        // If you change width here make sure to change it in TimeZonePicker.tsx as well
        style={{ border: "none", width: isShowDropdown ? "180px" : "148px" }}
        className=""
        placeholder="Search timezones..."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        onClick={e => e.stopPropagation()}
      />
      <div className="max-h-[200px] overflow-y-scroll hide-scrollbar">
        {filteredTimezones.map((timezone, index) => (
          <li
            className={twMerge(
              "hover:bg-hover-color duration-150 text-center flex flex-row gap-x-2 justify-center items-center border-b border-[#777777]",
              index === 0 && "border-t",
              // if hover on border set border green (its some UI issue - just keep it as is)
              isHover ? hover === timezone && "bg-cta" : selectedTimezone === timezone && "bg-cta",
            )}
            onMouseOver={mouseHover(timezone)}
            onClick={changeSelectedTimezone(timezone)}
            key={timezone}>
            {timezone}
          </li>
        ))}
      </div>
    </div>
  )
}
