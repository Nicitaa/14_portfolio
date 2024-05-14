import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"
import Image from "next/image"

export function DropdownContainerContent() {
  const { selectedTimezone } = useSelectedTimezoneStore()
  return (
    <div className="w-full flex flex-row gap-x-2 justify-around items-center px-[8px] py-[4px]">
      {selectedTimezone}
      <Image className="w-md h-md" src="/tringle.png" alt="tringle" width={32} height={32} />{" "}
    </div>
  )
}
