import MoreInfoButton29 from "./Buttons/ButtonMoreInfo29"
import { Project } from "../Project/Project"

export default function Project29() {
  return (
    <Project
      title="AI companion"
      subTitle="SaaS from Code With Antonio"
      leftInfo={
        <>
          Next.js + TypeScript + Tailwind
          <br />
          Responsive
          <br />
          02.2023 - 03.2023 (~50h)
        </>
      }
      moreInfoButton={MoreInfoButton29}
      siteUrl="https://29-ai-companion.vercel.app/"
      githubUrl="https://github.com/nicitaacom/29_ai-companion"
      youtubeUrl="https://www.youtube.com/watch?v=PjYWpd7xkaM"
    />
  )
}
