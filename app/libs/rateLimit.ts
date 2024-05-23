"use server"

import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

/**
 *
 * @param identifier - someServerAction or apiRoutePath
 * e.g:
 * 'updateDBMessagesSeen' + "-" + userId
 * 
 * Usage:
 * 
 * ```ts
   const identifier = "updateDBMessagesSeen" + "-" + userId
  const { success } = await rateLimit(identifier)

  // 1. Check rate limit by identifier (as I understood limit of messages in some amount of time)
  if (!success) {
    throw Error("Please wait a bit before repeat your request again")
  }
  ```
 */
export async function rateLimit(identifier: string) {
  const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(1, "1 d"),
    analytics: true,
    prefix: "@upstash/ratelimit",
  })

  return await rateLimit.limit(identifier)
}
