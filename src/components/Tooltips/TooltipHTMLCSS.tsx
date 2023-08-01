import { Skill } from "../Skills/Skill";

export function TooltipHTMLCSS() {
  return (
    <div className="tooltiptext">
      <div className="flex flex-col justify-center items-center gap-y-sm w-[225px] h-fit">
        <h1>BEM - Less</h1>
        <Skill id={1.1} label="bootstrap" hours={166} labelClassName="min-w-[40%]" small />
        <Skill id={1.2} label="tailwind" hours={574} labelClassName="min-w-[40%]" small />
      </div>
    </div>
  )
}
