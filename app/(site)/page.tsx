import { Skill } from "@/components/Skill"
import { TooltipOther, TooltipReact } from "../components/Tooltips"
import { ProjectsSwitcher } from "@/components/ProjectsSwitcher"

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
            FullStack WEB developer
          </h1>
          <div className="text-md font-bold text-secondary-foreground">
            I&apos;d like to be Team Leader as well if your team have no one. I see a lot of things to improve in WEB
            that&apos;s why I improve UI/UX for your site.
            <br /> Also I have knowledge about&nbsp;
            <div className="relative inline-block">
              <span data-text="conversion&nbsp;" className="text-tooltip tooltip">
                <div className="tooltiptext">
                  <h1 className="text-xs whitespace-nowrap">
                    When 100 people visit your site
                    <br /> and only 1 of them buy smth - it means conversion rate is 1%
                  </h1>
                </div>
              </span>
            </div>
            so you will sell more.
            <br />
            Also if you need I create design for your site
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
