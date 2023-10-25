import MoreInfoButton16 from "./Buttons/ButtonMoreInfo16"
import { Project } from "../Project"

export default function Project16() {
  return (
    <Project
      title="16_gericht-restaurant"
      subTitle="Whole site"
      leftInfo={
        <>
          React TS + Vite + tailwind + css
          <br />
          Responsive + Fluid
          <br />
          05.2023 - 31.07.2023 (~128h)
        </>
      }
      moreInfoButton={MoreInfoButton16}
      siteUrl="https://16-gericht-restaurant.vercel.app"
      githubUrl="https://github.com/Nicitaa/16_gericht-restaurant"
      figmaUrl="https://www.figma.com/file/at7kfXpaRagcwAwkkRVviz/Modern-UI%2FUX%3A-Gericht-(Copy)?type=design&node-id=0%3A1&mode=design&t=qbkbNwCPoXCSdZM4-1"
    />
  )
}
