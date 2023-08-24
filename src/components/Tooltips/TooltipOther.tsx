import { Skill } from "../Skills/Skill";

function TooltipGithub() {
  return (
    <div className="tooltiptext top-[6%] left-[40%] desktop:top-[0px] desktop:left-[50%]">
      <h1 className="text-secondary text-xs">I don't calculate this skill in hours<br />
        just know that I can work with github</h1>
    </div>
  )
}

export function TooltipOther() {
  return (
    <div className="tooltiptext">
      <div className="flex flex-col justify-start items-center gap-y-sm w-[250px] h-fit">
        <Skill id={4.1} label="github-desktop" hours={0} labelClassName="min-w-[55%]" tooltip tooltiptext={<TooltipGithub />} small />
        <Skill id={4.3} label="mongoDB" hours={20} labelClassName="min-w-[55%]" small />
        <Skill id={4.4} label="redux" hours={33} labelClassName="min-w-[55%]" small />
        <Skill id={4.5} label="RTK-query" hours={4} labelClassName="min-w-[55%]" small />
        <Skill id={4.5} label="MUI" hours={30} labelClassName="min-w-[55%]" small />
        <Skill id={4.2} label="javascript" hours={55} labelClassName="min-w-[55%]" small />
        <Skill id={4.2} label="bootstrap" hours={155} labelClassName="min-w-[55%]" small />
        <Skill id={4.2} label="Figma" hours={52} labelClassName="min-w-[55%]" small />
      </div>
    </div>
  )
}