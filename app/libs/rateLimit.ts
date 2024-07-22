import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

/**
 *
 * @param key - whether is ip or ip-key e.g 24.214.244.77-userId
 * @param limit - requests per amount of time e.g 4 (means 4 requests per n seconds)
 * @param windowSec - time per amount of requests e.g 30 (means n requests per 30 seconds)
 *
 * Note: to get ip use this
 * ```ts
 *   const ip = headers().get("x-real-ip") || headers().get("x-forwarded-for") || "127.0.0.1"
 * ```
 */
export async function rateLimit(key: string, limit: number, windowSec: number) {
  const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(limit, `${windowSec} s`),
    analytics: true,
  })
  const { success, reset } = await rateLimit.limit(key)

  return { success, reset }
}
