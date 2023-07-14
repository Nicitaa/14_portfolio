import { Skill } from "../components/Skills/Skill";
import { TooltipHTMLCSS, TooltipOther, TooltipReact } from "../components/Tooltips";

export function Main() {

  return (
    <div className="flex justify-center items-center h-[85vh]">
      <div className="flex justify-center items-center">
        <ul className="flex flex-col gap-y-sm">
          <Skill id={1} label="html&css" hours={1080} tooltip tooltiptext={<TooltipHTMLCSS />} />
          <Skill id={2} label="react" hours={950} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="typescript" hours={650} />
          <Skill id={4} label="other" hours={34} tooltip tooltiptext={<TooltipOther />} />
        </ul>
      </div>
    </div>
  )
}