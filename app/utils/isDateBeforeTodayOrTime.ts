import moment from "moment-timezone"

export const isDateBeforeTodayOrTime = (date: Date): boolean => {
  const now = moment().tz("Europe/Moscow")
  const endOfDay = now.clone().set({ hour: 21, minute: 30 })

  if (moment(date).isBefore(now, "day")) return true
  if (moment(date).isSame(now, "day") && now.isAfter(endOfDay)) return true

  return false
}
