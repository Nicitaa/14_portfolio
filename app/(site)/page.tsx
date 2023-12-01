import { Skill } from "@/components/Skill"
import { TooltipHTMLCSS, TooltipOther, TooltipReact } from "../components/Tooltips"
import { TooltipBackend } from "../components/Tooltips/TooltipBackend"
import { Project15, Project16, Project22, Project24 } from "../components/Projects"
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
          <Skill id={1} label="html&css" hours={1668} tooltip tooltiptext={<TooltipHTMLCSS />} />
          <Skill id={2} label="react" hours={1335} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="typescript" hours={1181} />
          <Skill id={4} label="backend" hours={84} tooltip tooltiptext={<TooltipBackend />} />
          <Skill id={5} label="other" hours={54} tooltip tooltiptext={<TooltipOther />} />
        </ul>
        <div className="tablet:px-md text-center desktop:max-w-[650px] desktop:px-[0] desktop:text-start">
          <h1
            data-text="WEB Frontend developer"
            className="text-shadow text-lg min-[380px]:whitespace-nowrap before:text-secondary">
            WEB Frontend developer
          </h1>
          <div className="text-md font-bold text-secondary-foreground">
            I’m going to be WEB FullStack Developer. I see a lot of things to improve in WEB and I have knowledge about{" "}
            <div className="relative inline-block">
              <span data-text="conversion" className="text-tooltip tooltip">
                <div className="tooltiptext">
                  <h1 className="text-xs whitespace-nowrap">
                    When 100 people visit your site
                    <br /> and only 1 of them buy smth - it means conversion rate =1%
                  </h1>
                </div>
              </span>
            </div>{" "}
            that’s why I create web-site for you which will have high conversion rate - so you will sell more.{" "}
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
