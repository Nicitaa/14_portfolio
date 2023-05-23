import { skills } from "../data/skills";
import './main.css'
export function Main () {



return (
<div className="main">
<div className="skills">
  <ul>
  {skills.map(skill => {
    return (
    <li key={skill.id}>
      <h1>{skill.title}</h1>
      <div className="progress-bar">
        <div className="skill-progress" style={{width:(skill.hours)/100+`%`}}>
        </div>
      </div>
    </li>
    )
  })}
  </ul>
</div>
</div>
)
}