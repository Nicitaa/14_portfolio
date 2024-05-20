import { formatedDateTimeFn } from "@/(site)/functions/formatedDateTimeFn"
import Link from "next/link"

export function DiscordData() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col">
        <p>
          Here is&nbsp;
          <Link className="text-cta" href="https://discord.com/users/780002958380498955" target="_blank">
            my discord&nbsp;
          </Link>
          and here is my username: nicitaacom
        </p>
        <p>Just call me in discord {formatedDateTimeFn()}</p>
      </div>
    </div>
  )
}
