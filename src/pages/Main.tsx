import { useLayoutEffect, useRef } from "react";
import { skills } from "../data/skills";
import './main.css'
import gsap from "gsap";


export function Main() {

  function Skill(skill: any) {
    const progressRef: React.MutableRefObject<any> = useRef()
    const hoursRef: React.MutableRefObject<any> = useRef()


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





      gsap.to(progressRef.current, {
        width: `${percent}%`,
        background,
      })


    }, [])

    return (
      <li key={skill.id}>
        <h1>{skill.title}</h1>
        <div className="progress-bar">
          <div className="skill-progress" ref={progressRef}></div>
        </div>
        <h2 ref={hoursRef}>0</h2>
      </li>
    )
  }


  return (
    <div className="main">
      <div className="skills">
        <ul>
          {skills.map(skill => {
            return (
              <Skill key={skill.id} {...skill} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}