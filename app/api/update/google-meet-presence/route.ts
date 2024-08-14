import supabaseAdmin from "@/libs/supabaseAdmin"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { isOnline } = await req.json()

  await supabaseAdmin.from("liveCall").update({ isGMLive: isOnline }).eq("id", 1)

  return NextResponse.json({}, { status: 200 })
}
