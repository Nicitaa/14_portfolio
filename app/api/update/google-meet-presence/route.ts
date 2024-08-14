import supabaseAdmin from "@/libs/supabaseAdmin"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { isOnline } = await req.json()

  await supabaseAdmin.from("liveCall").update({ id: 1, isGMLive: isOnline })

  return NextResponse.json({}, { status: 200 })
}
