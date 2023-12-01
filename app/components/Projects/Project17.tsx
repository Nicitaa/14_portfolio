import MoreInfoButton17 from "./Buttons/ButtonMoreInfo17"
import { Project } from "../Project"

export default function Project17() {
  return (
    <Project
      title="17_messenger-clone"
      subTitle="Whole site"
      leftInfo={
        <>
          Next + TypeScript + Tailwind + prisma + pusher
          <br />
          Responsive
          <br />
          10.2023 - 10.2023 (~40h)
        </>
      }
      moreInfoButton={MoreInfoButton17}
      siteUrl="https://17-messenger-clone.vercel.app/"
      githubUrl="https://github.com/nicitaacom/17_messenger-clone"
      youtubeUrl="https://www.youtube.com/watch?v=PGPGcKBpAk8"
    />
  )
}
