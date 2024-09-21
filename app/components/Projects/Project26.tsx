import MoreInfoButton26 from "./Buttons/ButtonMoreInfo26"
import { Project } from "../Project/Project"

export default function Project26() {
  return (
    <Project
      title="Hot delivery (click)"
      subTitle="I created this site and UI/UX for this site you may check in figma"
      leftInfo={
        <>
          Next + TypeScript + Tailwind + supabase
          <br />
          Responsive
          <br />
          11.2023 - 01.2023 (~643h)
        </>
      }
      moreInfoButton={MoreInfoButton26}
      siteUrl="https://hot-delivery.net/"
      figmaUrl="https://www.figma.com/file/naTRYx4iTl8QhsEM584Nvv/26_hot-delivery?type=design&node-id=136-97&mode=design&t=mbTnMKHyu81vCueg-0"
      youTubeEmbedPreview="https://www.youtube.com/embed/7WX6zA8qgp4?si=8zNxCVLensQBIRbJ"
    />
  )
}
