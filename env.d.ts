declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_BOT_TOKEN: string
      TELEGRAM_CHAT_ID: string

      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      SUPABASE_SERVICE_ROLE_KEY: string
    }
  }
}

export {}
