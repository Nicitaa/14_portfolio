import { create } from "zustand"
import moment from "moment"

import { isDateBeforeTodayOrTime } from "@/utils/isDateBeforeTodayOrTime"

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

interface SelectedDateStore {
  selectedDate: Value
  setSelectedDate: (value: Value) => void
}

const tomorrow = moment().add(1, "day").toDate()

export const useSelectedDateStore = create<SelectedDateStore>()(set => ({
  selectedDate: isDateBeforeTodayOrTime(new Date()) ? tomorrow : new Date(),
  setSelectedDate: (value: Value) => set({ selectedDate: value }),
}))
