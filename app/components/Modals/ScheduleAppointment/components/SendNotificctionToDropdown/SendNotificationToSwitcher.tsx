"use client"

import { useRef, useState } from "react"
import { twMerge } from "tailwind-merge"

import { useCloseOnClickEsc } from "@/hooks/useOnClickEsc"
import { useCloseOnClickOutside } from "@/hooks/useOnClickOutside"
import { DropdownContainerContent } from "./DropdownContainerContent"

export function SendNotificationToSwitcher() {
  const dropdownContainerRef = useRef<HTMLDivElement>(null)
  const [isShowDropdown, setIsShowDropdown] = useState(false)

  function closeDropdown() {
    setIsShowDropdown(false)
  }
  function toggleDropdown() {
    setIsShowDropdown(!isShowDropdown)
  }

  useCloseOnClickOutside(dropdownContainerRef, closeDropdown)
  useCloseOnClickEsc(closeDropdown)

  return (
    <div
      className="flex flex-row gap-x-2 justify-end desktop:justify-center items-center px-0 duration-300"
      style={{ width: "24px", height: "24px" }}>
      <div
        className={twMerge(
          `relative w-full flex justify-between items-center gap-x-2 border border-[#777777] border-r-0
           cursor-pointer px-2 mt-1 z-[111]`,
        )}
        onClick={toggleDropdown}
        ref={dropdownContainerRef}>
        <DropdownContainerContent />
      </div>
    </div>
  )
}
