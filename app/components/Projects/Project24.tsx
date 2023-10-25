import MoreInfoButton24 from "./Buttons/ButtonMoreInfo24"
import { Project } from "../Project"

export default function Project22() {
  return (
    <Project
      title="24_dashboard-mui"
      subTitle="Whole site"
      leftInfo={
        <>
          React + Vite + TypeScript + MUI
          <br />
          No Responsive
          <br />
          07.2023 - 08.2023 (~30h)
        </>
      }
      moreInfoButton={MoreInfoButton24}
      siteUrl="https://24-dashboard-mui.vercel.app"
      githubUrl="https://github.com/Nicitaa/24_dashboard-mui"
      figmaUrl="https://www.figma.com/file/ugi51UXz9ehKvXR1CSz1CJ/Purity-UI-Dashboard---Chakra-UI-Dashboard-(Community)?type=design&node-id=1516-368&mode=design&t=4eHHT6vtEqZZq67S-0"
    />
  )
}
