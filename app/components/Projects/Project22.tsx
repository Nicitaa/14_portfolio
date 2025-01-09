import MoreInfoButton22 from "./Buttons/ButtonMoreInfo22"
import { Project } from "../Project/Project"

export default function Project22() {
  return (
    <Project
      title="22_aer"
      subTitle="Team leader - home&about page"
      leftInfo={
        <>
          T3 Next App + TypeScript + tailwind + css
          <br />
          Responsive + Fluid
          <br />
          19.06.2023 - 26.08.2023 (~101h)
        </>
      }
      moreInfoButton={MoreInfoButton22}
      siteUrl="https://22-aer-nicitaa.vercel.app/"
      githubUrl="https://github.com/Nicitaa/22_aer"
      figmaUrl="https://www.figma.com/file/llWyCvntsW1ZdIHgyVybUW/Untitled?type=design&node-id=0%3A1&t=iJdxmi7OnRcPZ8dg-1"
    />
  )
}
