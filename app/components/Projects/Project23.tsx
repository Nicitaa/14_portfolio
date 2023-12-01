import MoreInfoButton15 from "./Buttons/ButtonMoreInfo15"
import { Project } from "../Project"

export default function Project23() {
  return (
    <Project
      title="23_store"
      subTitle="Whole site"
      leftInfo={
        <>
          Next + TypeScript + Tailwind + zustand + stripe + paypal
          <br />
          Responsive
          <br />
          09.2023 - 11.2023 (~670h)
        </>
      }
      moreInfoButton={MoreInfoButton15}
      siteUrl="https://23-store.vercel.app/"
      githubUrl="https://github.com/nicitaacom/23_store"
    />
  )
}
