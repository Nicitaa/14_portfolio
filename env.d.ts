declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_TELEGRAM_BOT_TOKEN: string
      NEXT_TELEGRAM_CHAT_ID: string
    }
  }
}

export {}
