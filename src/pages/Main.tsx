import { useEffect, useState } from "react";
import { skills } from "../data/skills";
import './main.css'
export function Main () {

function Skill(skill:any) {
  const [mounted,setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
},[])

const width = mounted ? `${(skill.hours)/100+`%`}` : '0'

return (
<li key={skill.id}>
      <h1>{skill.title}</h1>
      <div className="progress-bar">
        <div className="skill-progress" style={{width}}></div>
      </div>
    </li>
)
}


return (
<div className="main">
<div className="skills">
  <ul>
  {skills.map(skill => {
    return (
    <Skill key={skill.id} {...skill}/>
    )
  })}
  </ul>
</div>
</div>
)
}