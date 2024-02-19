export function setCookie(name: string, val: string, days: number) {
  const date = new Date()
  const value = val
  const oneDay = 1 * 24 * 60 * 60 * 1000

  // Set it expire in days
  days ? date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000) : date.setTime(date.getTime() + oneDay)

  // Set it
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/"
}

export function getCookie(name: string) {
  if (typeof document !== "undefined") {
    const value = "; " + document.cookie
    const decodedValue = decodeURIComponent(value)
    const parts = decodedValue.split("; " + name + "=")

    if (parts.length === 2) {
      return parts.pop()?.split(";").shift()
    }
  }

  return undefined
}
