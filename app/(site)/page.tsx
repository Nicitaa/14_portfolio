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
            <b>I&apos;m started</b> my career in 2018 and tried 4 different programming languages.
            <br />
            Right now my main stack - Next + TypeScript + Tailwind
            <br />
            <b>I dropped</b> my academy and want to say people in young age that knowlege that you get in&nbsp;
            <i>school/colledge/academy</i> don&apos;t help you to get success in your life - that&apos;s why you need
            invest your free time in vision in your head of how to get success.
            <br />
            <b>Soon I</b> become a Senior.
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
