import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const message = body.message
  const TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN
  const CHAT_ID = process.env.NEXT_TELEGRAM_CHAT_ID
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  //send message
  //use this guide to send file - https://youtu.be/RviYQrNdDok?list=LL&t=1687
  const response = axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
  return NextResponse.json(response)
}
