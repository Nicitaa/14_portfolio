import { create } from "zustand"
import moment from "moment-timezone"

interface SelectedTimezoneStore {
  selectedTimezone: string
  setSelectedTimezone: (timezone: string) => void
}

const userTimezone = moment.tz.guess()

export const useSelectedTimezoneStore = create<SelectedTimezoneStore>()(set => ({
  selectedTimezone: userTimezone,
  setSelectedTimezone: (timezone: string) => set({ selectedTimezone: timezone }),
}))
