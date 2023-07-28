import { Skill } from "../Skills/Skill";

export function TooltipReact() {
  return (
    <div className="tooltiptext">
      <div className="flex flex-col justify-start items-center gap-y-sm w-[225px] h-fit">
        <Skill id={2.1} label="next" hours={210} labelClassName="min-w-[20%]" small />
        <Skill id={2.2} label="vite" hours={630} labelClassName="min-w-[20%]" small />
      </div>
    </div>
  )
}