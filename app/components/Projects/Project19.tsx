import MoreInfoButton19 from "./Buttons/ButtonMoreInfo19"
import { Project } from "../Project/Project"

export default function Project19() {
  return (
    <Project
      title="19_spotify-clone"
      subTitle="Whole site"
      leftInfo={
        <>
          Next + TypeScript + Tailwind + stripe
          <br />
          Responsive
          <br />
          05.2023 - 05.2023 (~50h)
        </>
      }
      moreInfoButton={MoreInfoButton19}
      siteUrl="https://19-spotify-clone.vercel.app/"
      githubUrl="https://github.com/nicitaacom/19_spotify-clone/tree/development/app"
      youtubeUrl="https://youtube.com/watch?v=2aeMRB8LL4o"
    />
  )
}
