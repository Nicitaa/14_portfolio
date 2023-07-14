import { Skill } from "../components/Skills/Skill";
import { TooltipHTMLCSS, TooltipOther, TooltipReact } from "../components/Tooltips";

export function Main() {

  return (
    <div className="flex justify-center items-center w-[100vw] gap-y-xl">

      {/* Skills + Text */}
      <div className="flex flex-col laptop:flex-row justify-between items-center gap-lg w-full px-sm
      tablet:px-md
      laptop:max-w-[80%] laptop:h-[40rem]">
        <ul className="flex flex-col gap-y-sm">
          <Skill id={1} label="html&css" hours={1080} tooltip tooltiptext={<TooltipHTMLCSS />} />
          <Skill id={2} label="react" hours={950} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="typescript" hours={650} />
          <Skill id={4} label="other" hours={34} tooltip tooltiptext={<TooltipOther />} />
        </ul>
        <div className="laptop:max-w-[650px]">
          <h1 data-text="WEB Frontend developer" className="text-shadow text-lg whitespace-nowrap" />
          <p className="text-md font-bold">I’m going to be WEB FullStack Developer. I see a lot of things to improve in WEB and I
            have knowledge about <div className="relative inline-block">
              <span data-text="conversion" className="text-tooltip tooltip">
                <div className="tooltiptext">
                  <h1 className="text-xs whitespace-nowrap">When 100 people visit your site<br /> and only 1 of them buy smth - it means conversion rate =1%</h1>
                </div>
              </span>
            </div> that’s why I create web-site for you which will have high conversion rate. </p>
        </div>
      </div>


    </div>
  )
}