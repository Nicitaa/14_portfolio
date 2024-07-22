"use server"

import supabaseAdmin from "@/libs/supabaseAdmin"
import { revalidatePath } from "next/cache"

export async function toggleIsGMAction(isGMLive: boolean) {
  await supabaseAdmin.from("liveCall").update({ isGMLive: !isGMLive }).eq("id", 1)
  revalidatePath("/appointment") // next.js cache state - so to change state in DB and update UI I need to revalidate cache in path
}
