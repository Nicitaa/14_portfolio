import { Skill } from "../components/Skills/Skill";
import { TooltipHTMLCSS, TooltipOther, TooltipReact } from "../components/Tooltips";
import { Project } from "../components/Project";
import { ModalMoreInfo } from "../components/Modal/ModalMoreInfo";
import { CollaborationIcon } from "../components/CollaborationIcon";
import { useModalMoreInfo15, useModalMoreInfo16, useModalMoreInfo22 } from "../hooks";

export function Main() {

  const moreInfo22 = useModalMoreInfo22()
  const moreInfo16 = useModalMoreInfo16()
  const moreInfo15 = useModalMoreInfo15()

  return (
    <div className="flex flex-col justify-center items-center gap-y-xl my-xl">

      {/* Skills + Text */}
      <div className="flex flex-col laptopL:flex-row justify-between items-center gap-lg w-full px-sm
      tablet:px-md
      laptopL:max-w-[80%] laptopL:h-[40rem]">
        <ul className="flex flex-col gap-y-sm">
          <Skill id={1} label="html&css" hours={1080} tooltip tooltiptext={<TooltipHTMLCSS />} />
          <Skill id={2} label="react" hours={950} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="typescript" hours={650} />
          <Skill id={4} label="other" hours={34} tooltip tooltiptext={<TooltipOther />} />
        </ul>
        <div className="tablet:px-md text-center laptopL:max-w-[650px] laptopL:px-[0] laptopL:text-start">
          <h1 data-text="WEB Frontend developer" className="text-shadow text-lg min-[380px]:whitespace-nowrap before:text-secondary" />
          <div className="text-md font-bold">I’m going to be WEB FullStack Developer. I see a lot of things to improve in WEB and I
            have knowledge about <div className="relative inline-block">
              <span data-text="conversion" className="text-tooltip tooltip">
                <div className="tooltiptext">
                  <h1 className="text-xs whitespace-nowrap">When 100 people visit your site<br /> and only 1 of them buy smth - it means conversion rate =1%</h1>
                </div>
              </span>
            </div> that’s why I create web-site for you which will have high conversion rate - so you will sell more. </div>
        </div>
      </div>





      {/* Protfolio projects */}
      <div className="flex flex-col gap-xl w-[1440px] max-w-[80%]">

        <Project title="22_aer"
          subTitle="Team leader - main page"
          leftInfo={<>
            T3 Next App + TypeScript + tailwind + css<br />
            Responsive + Fluid<br />
            19.06.2023 - now
          </>}
          onClick={moreInfo22.onOpen}
          siteUrl=""
          githubUrl="https://github.com/Nicitaa/22_aer"
          figmaUrl="https://www.figma.com/file/llWyCvntsW1ZdIHgyVybUW/Untitled?type=design&node-id=0%3A1&t=iJdxmi7OnRcPZ8dg-1" />
        <ModalMoreInfo isOpen={moreInfo22.isOpen} onClose={moreInfo22.onClose}
          label="22_aer"
          taskLabel="Create web site which will sell begs"
          deadline="1 month"
          price="200-500$"
          collaborationChildren={
            <>
              <CollaborationIcon tooltiptext={
                <div className="flex flex-col gap-y-md">
                  <h1>Rest of figma design</h1>
                  <div>
                    <h1>Team leader:</h1>
                    <h1>Notion organization</h1>
                    <h1>Pull requests reviewing</h1>
                    <h1> Tasks assigning</h1>
                  </div>
                  <div>
                    <h1>Pages:</h1>
                    <h1>root - navbar + animations</h1>
                    <h1>/ - whole page</h1>
                    <h1>/products - dropdown</h1>
                  </div>
                </div>} />
              <CollaborationIcon imgSrc="/collaborations/22_aer/ottakist.png" profileUrl="https://github.com/ottakist" tooltiptext={
                <div className="flex flex-col gap-y-md">
                  <h1>Initial figma design</h1>
                  <div>
                    <h1>Pull requests reviewing</h1>
                    <h1>Tasks completing</h1>
                  </div>
                  <div>
                    <h1>Pages:</h1>
                    <h1>root - tailwind setup</h1>
                    <h1>/products - whole page</h1>
                    <h1>/product - whole page</h1>
                  </div>
                </div>} />
              <CollaborationIcon imgSrc="/collaborations/22_aer/arifm6.png" profileUrl="https://github.com/arifm6" tooltiptext={
                <div className="flex flex-col gap-y-md">
                  <div>
                    <h1>Pull requests reviewing</h1>
                    <h1>Tasks completing</h1>
                  </div>
                  <div>
                    <h1>Pages:</h1>
                    <h1>/auth/signin - frontend + backend</h1>
                    <h1>/auth/signup - frontend + backend</h1>
                    <h1>/auth/recover - frontend + backend</h1>
                  </div>
                </div>} />
            </>
          } />







        <Project title="16_gericht-restaurant"
          subTitle="Whole site"
          leftInfo={<>
            React TS + Vite + tailwind + css<br />
            Responsive + Fluid<br />
            05.2023 - 31.07.2023
          </>}
          onClick={moreInfo16.onOpen}
          siteUrl="https://16-gericht-restaurant.vercel.app"
          githubUrl="https://github.com/Nicitaa/16_gericht-restaurant"
          figmaUrl="https://www.figma.com/file/at7kfXpaRagcwAwkkRVviz/Modern-UI%2FUX%3A-Gericht-(Copy)?type=design&node-id=0%3A1&mode=design&t=qbkbNwCPoXCSdZM4-1" />
        <ModalMoreInfo isOpen={moreInfo16.isOpen} onClose={moreInfo16.onClose}
          label="16_gericht-restaurant"
          taskLabel="Create site with high conversion rate for restaurant with booking system and delivery option"
          deadline="1 month"
          price="100$-2000$"
          collaborationChildren={
            <>
              <CollaborationIcon imgSrc="/collaborations/16_gericht-restaurant/Kilomebit17.png" profileUrl="https://github.com/Kilomebit17" tooltiptext={
                <>Scroll in ModalMenu.tsx</>} />
              <CollaborationIcon tooltiptext={
                <>Whole site</>} />
            </>} />






        <Project title="15_HooBank"
          subTitle="Whole site"
          leftInfo={<>
            React TS + Vite + tailwind<br />
            Responsive<br />
            05.2023 - 05.2023
          </>}
          onClick={moreInfo15.onOpen}
          siteUrl="https://15-hoo-bank.vercel.app"
          githubUrl="https://github.com/Nicitaa/15_HooBank"
          figmaUrl="https://www.figma.com/file/QRQCYjU0PxVyMJW2MjZ50p/HooBank-(Copy)?type=design&node-id=0%3A1&mode=design&t=jJPu1kzoLGIwvFKk-1" />
        <ModalMoreInfo isOpen={moreInfo15.isOpen} onClose={moreInfo15.onClose}
          label="15_HooBank"
          taskLabel="Create frontend part for bank"
          deadline="2 weeks"
          price="60$-100$"
          collaborationChildren={
            <CollaborationIcon tooltiptext={
              <>Whole site</>} />} />


      </div>


    </div>
  )
}