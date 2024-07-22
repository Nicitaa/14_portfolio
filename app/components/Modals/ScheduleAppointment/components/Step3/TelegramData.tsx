import { formatedDateTimeFn } from "@/(site)/functions/formatedDateTimeFn"
import Link from "next/link"

export function TelegramData() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col">
        <p>
          Here is&nbsp;
          <Link className="text-cta" href="https://t.me/nicitaacom" target="_blank">
            my telegram&nbsp;
          </Link>
          and here is my username: nicitaacom
        </p>
        <p>Just call me in telegram {formatedDateTimeFn()}</p>
      </div>
    </div>
  )
}
