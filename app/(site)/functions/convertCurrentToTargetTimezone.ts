import moment from "moment"

/**
 *
 * @returns something like HH:mm e.g 14:59
 */
export function convertCurrentToTargetTimezone(
  currentTime: string,
  currentTimezone: string,
  targetTimezone: string,
): string {
  const [hour, minute] = currentTime.split(":").map(Number)
  const timeCurrent = moment.tz({ hour, minute }, currentTimezone)
  const timeInTarget = timeCurrent.clone().tz(targetTimezone)
  return timeInTarget.format("HH:mm")
}
