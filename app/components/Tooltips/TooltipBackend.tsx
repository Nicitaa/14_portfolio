import { Skill } from "../Skill"

export function TooltipBackend() {
  return (
    <div className="tooltiptext">
      <div className="flex flex-col justify-start items-center gap-y-sm w-[225px] h-fit">
        <Skill id={2.1} label="zustand" hours={60} labelClassName="min-w-[40%]" small />
        <Skill id={2.2} label="supabase" hours={84} labelClassName="min-w-[40%]" small />
      </div>
    </div>
  )
}
