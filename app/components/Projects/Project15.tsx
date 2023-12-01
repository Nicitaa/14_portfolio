import MoreInfoButton15 from "./Buttons/ButtonMoreInfo15"
import { Project } from "../Project"

export default function Project15() {
  return (
    <Project
      title="15_HooBank"
      subTitle="Whole site"
      leftInfo={
        <>
          React TS + Vite + tailwind
          <br />
          Responsive
          <br />
          05.2023 - 05.2023 (~50h)
        </>
      }
      moreInfoButton={MoreInfoButton15}
      siteUrl="https://15-hoo-bank.vercel.app"
      githubUrl="https://github.com/Nicitaa/15_HooBank"
      figmaUrl="https://www.figma.com/file/QRQCYjU0PxVyMJW2MjZ50p/HooBank-(Copy)?type=design&node-id=0%3A1&mode=design&t=jJPu1kzoLGIwvFKk-1"
    />
  )
}
