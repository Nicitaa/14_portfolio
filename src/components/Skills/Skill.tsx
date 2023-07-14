import { useLayoutEffect, useRef } from "react"
import { ISkill } from "../../interfaces/Skill"
import CountUp from "react-countup"
import gsap from "gsap"

export function Skill(skill: ISkill) {
  const progressRef: React.MutableRefObject<any> = useRef()


  useLayoutEffect(() => {
    const wn8 = 100 / 6
    const percent = skill.hours / 100
    let background = '#fe0e00'
    if (percent > wn8 * 0) {
      background = '#fe0e00' //red
    }
    if (percent > wn8 * 1) {
      background = '#fe7903' //orange
    }
    if (percent > wn8 * 2) {
      background = '#f8f403' //yellow
    }
    if (percent > wn8 * 3) {
      background = '#60ff00' //green
    }
    if (percent > wn8 * 4) {
      background = '#02c9b3' //turquoise
    }
    if (percent > wn8 * 5) {
      background = '#d042f3' //violet
    }

    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${percent}%`,
        background,
      })
    }
  }, [skill.hours])




  return (
    <li className={`flex ${skill.small ? 'w-[200px] h-[15px]' : 'w-[425px] h-[22.5px]'} gap-xs select-none`} key={skill.id}>
      <h1 data-text={skill.label} className={`relative flex justify-end items-center text-end text-secondary font-bold whitespace-nowrap
        ${skill.small ? skill.labelClassName : 'min-w-[25%]'}
        ${skill.tooltip && 'text-shadow tooltip'} `}>
        {skill.tooltip ? '' : skill.label}
        {skill.tooltiptext}
      </h1>
      <div className={`relative w-full rounded-md ${skill.small ? 'bg-primary' : 'bg-primary-dark'} overflow-hidden`}>
        <div className="w-[0px] h-full transition-all duration-[5000ms] shadow-[inset_0px_2px_2px_rgba(0,0,0,0.3)]" ref={progressRef} />
        <CountUp className="absolute top-[50%] right-[4%] -translate-y-1/2 text-xs font-bold" end={skill.hours} duration={5} delay={0.5} separator="" />
      </div>
    </li>
  )
}