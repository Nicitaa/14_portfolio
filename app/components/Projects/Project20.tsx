import MoreInfoButton20 from "./Buttons/ButtonMoreInfo20"
import { Project } from "../Project/Project"

export default function Project20() {
  return (
    <Project
      title="20_flowmazon-clone"
      subTitle="Whole site"
      leftInfo={
        <>
          Next + TypeScript + Tailwind + daisyui
          <br />
          Responsive
          <br />
          09.2023 - 09.2023 (~7h)
        </>
      }
      moreInfoButton={MoreInfoButton20}
      siteUrl="https://20-flowmazon-clone.vercel.app/"
      githubUrl="https://github.com/nicitaacom/20_flowmazon-clone/tree/development/src/app"
      youtubeUrl="https://www.youtube.com/watch?v=AaiijESQH5o"
    />
  )
}
