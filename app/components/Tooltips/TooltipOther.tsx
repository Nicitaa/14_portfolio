import { Skill } from "../Skill"

function TooltipGithub() {
  return (
    <div className="tooltiptext top-[6%] left-[40%] desktop:top-[0px] desktop:left-[50%]">
      <h1 className="text-secondary text-xs">
        I don&apos;t calculate this skill in hours
        <br />
        just know that I can work with github
      </h1>
    </div>
  )
}

export function TooltipOther() {
  return (
    <div className="tooltiptext">
      <div className="flex flex-col justify-start items-center gap-y-sm w-[250px] h-fit">
        <Skill
          id={5.1} // Why do I need id here? (5.1 because its fifth skill)
          label="Github Desktop"
          hours={0}
          labelClassName="min-w-[55%]"
          tooltip
          tooltiptext={<TooltipGithub />}
          small
        />
        <Skill id={5.2} label="Vite" hours={1103} labelClassName="min-w-[55%]" small />
        <Skill id={5.3} label="Supabase" hours={190} labelClassName="min-w-[55%]" small />
        <Skill id={5.4} label="Zustand" hours={183} labelClassName="min-w-[55%]" small />
        <Skill id={5.8} label="Photoshop" hours={150} labelClassName="min-w-[55%]" small />
        <Skill id={5.8} label="Figma" hours={140} labelClassName="min-w-[55%]" small />
        <Skill id={5.8} label="DevOps" hours={133} labelClassName="min-w-[55%]" small />
      </div>
    </div>
  )
}
