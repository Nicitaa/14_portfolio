import { create } from "zustand"

/**
 * @selectedTime - e.g 10:00 or 23:59
 * @setSelectedTime - pass here string like 22:32
 */
interface SelectedTimeStore {
  selectedTime: string
  setSelectedTime: (time: string) => void
}

const currentHour = new Date().getHours()
const currentMinute = new Date().getMinutes()

const nextHalfHour = currentMinute < 30 ? 30 : 0
const nextHour = currentMinute < 30 ? currentHour : currentHour + 1

const initialHour = nextHour < 10 ? 10 : nextHour
const initialMinute = nextHour < 10 ? 0 : nextHalfHour

// if now 19:23 - show 19:30
// if now 19:44 - show 20:00
// if now 20:00 - show 10:00
// if now 8:40 - show 10:00
const initialTime = `${String(initialHour).padStart(2, "0")}:${String(initialMinute).padStart(2, "0")}`

export const useSelectedTimeStore = create<SelectedTimeStore>()(set => ({
  selectedTime: initialTime,
  setSelectedTime: (time: string) => set({ selectedTime: time }),
}))
