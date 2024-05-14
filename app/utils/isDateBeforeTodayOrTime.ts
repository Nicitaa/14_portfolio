import moment from "moment"

/**
 * This function returns true if the date is before today or today's time is before 22:00 MSK
 * Also, it returns false if the date is after today
 */
export const isDateBeforeTodayOrTime = (date: Date) => {
  // Moscow time is UTC+3
  const now = moment().utcOffset(3)
  const currentHour = now.hour()
  const currentMinute = now.minute()

  // Check if current time is before 10:00 MSK
  const isBeforeTen = currentHour < 10 || (currentHour === 10 && currentMinute < 0)

  // If the current time is before 10:00 MSK, disable dates before today
  if (isBeforeTen) {
    return moment(date).isBefore(now, "day")
  }

  // Otherwise, disable dates before today and today after 22:00 MSK
  const endOfDay = now.clone().hour(22).minute(0).second(0).millisecond(0)
  return moment(date).isBefore(now, "day") || (moment(date).isSame(now, "day") && now.isBefore(endOfDay))
}
