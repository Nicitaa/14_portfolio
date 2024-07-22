import Link from "next/link"
import supabaseAdmin from "@/libs/supabaseAdmin"

import { GMCheckbox } from "@/(site)/appointment/components/GMCheckbox"
import { NavbarProjects } from "./NavbarProjects"
import supabaseServer from "@/libs/supabaseServer"

export async function Navbar() {
  const { data: is_live_call } = await supabaseAdmin.from("liveCall").select().eq("id", 1).single()
  const {
    data: { user },
  } = await supabaseServer().auth.getUser()

  return (
    <nav
      className="w-full flex justify-between desktop:justify-stretch items-center transition-[height] gap-x-sm duration-[600ms] px-md
    py-sm text-secondary">
      <div className="flex items-center pr-md line">
        <Link data-text="Portfolio" href="/" className="text-shadow text-lg text-secondary before:text-secondary">
          Portfolio
        </Link>
      </div>

      <NavbarProjects />
      {user?.id && (
        <>
          <div className="hidden desktop:inline-flex h-[calc(72px-24px)] border-r-2 border-[#909090]"> &nbsp;</div>
          <GMCheckbox isGMLive={!!is_live_call?.isGMLive} />
        </>
      )}
    </nav>
  )
}
