import { Skill } from "@/components/Skill"
import { TooltipOther, TooltipReact } from "../components/Tooltips"
import { ProjectsSwitcher } from "@/components/ProjectsSwitcher"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-xl my-xl">
      {/* Skills + Text */}
      <div
        className="flex flex-col desktop:flex-row justify-between items-center gap-lg w-full px-sm
      tablet:px-md
      desktop:max-w-[80%] desktop:h-[40rem]">
        <ul className="flex flex-col gap-y-sm">
          <Skill id={1} label="html&css" hours={3000} />
          <Skill id={2} label="React" hours={2656} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="TypeScript" hours={2303} />
          <Skill id={4} label="Next" hours={1470} />
          <Skill id={5} label="other" hours={1103} tooltip tooltiptext={<TooltipOther />} />
        </ul>
        <div className="tablet:px-md text-center desktop:max-w-[650px] desktop:px-[0] desktop:text-start">
          <h1
            data-text="WEB Frontend developer"
            className="text-shadow text-lg min-[380px]:whitespace-nowrap before:text-secondary">
            Middle FullStack WEB developer
          </h1>
          <div className="text-md font-bold text-secondary-foreground">
            Soon I become Senior.
            <br /> Limited-Time Offer Details:
            <br />
            You may hire me for 1500€/month and I will work 12 hours/day
            <br />
            You may hire me for 1250€/month and I will work 8 hours/day
            <br />
            Or you may hire me for 500€/month and I will work 4hours/day
            <br />
            Or just for 300€/month buy my 8 weekends/month and I will work 12hours/day
            <br />
            Contact: support@nicitaa.com or&nbsp;
            <Link className="text-cta" href="https://t.me/nicitaacom" target="_blank">
              t.me/nicitaacom
            </Link>
          </div>
        </div>
      </div>

      {/* Protfolio projects */}
      <div className="flex flex-col gap-xl max-w-[80vw] w-full">
        <ProjectsSwitcher />
      </div>
    </div>
  )
}
