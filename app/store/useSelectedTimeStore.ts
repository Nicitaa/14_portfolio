import { appointmentTimesMSK } from "@/data/appointmentTimesMSK"
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

// Find the next available time in the `appointmentTimesMSK` array
const nextAvailableTime = appointmentTimesMSK.find(({ time }) => {
  const [hour, minute] = time.split(":").map(Number)
  return currentHour < hour || (currentHour === hour && currentMinute < minute)
})

// If no time is available for today, return the first time (next day logic)
const initialTime = nextAvailableTime ? nextAvailableTime.time : appointmentTimesMSK[0].time

// if now 19:23 - show 20:00
// if now 19:44 - show 20:30
// if now 22:00 - show 12:00
// if now 8:40 - show 12:00
// if now 12:00 - show 13:00
// if now 11:59 - show 12:30

export const useSelectedTimeStore = create<SelectedTimeStore>()(set => ({
  selectedTime: initialTime,
  setSelectedTime: (time: string) => set({ selectedTime: time }),
}))
