"use client"

import { useAppointmentStore } from "@/store/useAppointmentStore"
import { IoIosArrowRoundBack } from "react-icons/io"
import { twMerge } from "tailwind-merge"

export function PrevStepButton({ disabled }: { disabled: boolean }) {
  const { setPrevStep } = useAppointmentStore()

  return (
    <button
      className={twMerge(
        "absolute left-[0%] top-[50%] translate-y-[-50%] text-cta flex flex-row justify-center items-center group cursor-pointer z-10",
        disabled && "opacity-50 cursor-default pointer-events-none",
      )}
      onClick={setPrevStep}>
      <IoIosArrowRoundBack className="text-cta group-hover:-translate-x-[3px] duration-300" size={30} />
      <p className="pb-[2px] text-cta">back</p>
    </button>
  )
}
