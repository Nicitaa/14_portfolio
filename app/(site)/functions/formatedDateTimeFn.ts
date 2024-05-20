import { useSelectedDateStore } from "@/store/useSelectedDateStore"
import { useSelectedTimeStore } from "@/store/useSelectedTimeStore"
import { useSelectedTimezoneStore } from "@/store/useSelectedTimezoneStore"
import moment, { MomentInput } from "moment"
import { convertCurrentToTargetTimezone } from "./convertCurrentToTargetTimezone"

export function formatedDateTimeFn(MSK?: boolean) {
  const { selectedDate } = useSelectedDateStore.getState()
  const { selectedTime } = useSelectedTimeStore.getState()
  const { selectedTimezone } = useSelectedTimezoneStore.getState()
  const formattedDate = moment(selectedDate as MomentInput).format("DD.MM.YYYY")

  const at = MSK ? convertCurrentToTargetTimezone(selectedTime, selectedTimezone, "Europe/Moscow") : selectedTime
  const timezone = MSK ? "Europe/Moscow" : selectedTimezone

  return `${formattedDate} at ${at} ${timezone}\n`
}
