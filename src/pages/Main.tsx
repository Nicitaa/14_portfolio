import { useModalsStore } from "../store/modalsStore";
import { TooltipHTMLCSS, TooltipOther, TooltipReact } from "../components/Tooltips";
import { TooltipBackend } from "../components/Tooltips/TooltipBackend";
import { CollaborationIcon } from "../components/CollaborationIcon";
import { ModalMoreInfo } from "../components/Modal/ModalMoreInfo";
import { Skill } from "../components/Skills/Skill";
import { Project } from "../components/Project";

export function Main() {

    const { isOpen,closeModal,openModal } = useModalsStore()




  return (
    <div className="flex flex-col justify-center items-center gap-y-xl my-xl">

      {/* Skills + Text */}
      <div className="flex flex-col desktop:flex-row justify-between items-center gap-lg w-full px-sm
      tablet:px-md
      desktop:max-w-[80%] desktop:h-[40rem]">
        <ul className="flex flex-col gap-y-sm">
          <Skill id={1} label="html&css" hours={1668} tooltip tooltiptext={<TooltipHTMLCSS />} />
          <Skill id={2} label="react" hours={1335} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="typescript" hours={1181} />
          <Skill id={4} label="backend" hours={84} tooltip tooltiptext={<TooltipBackend />}/>
          <Skill id={5} label="other" hours={54} tooltip tooltiptext={<TooltipOther />} />
        </ul>
        <div className="tablet:px-md text-center desktop:max-w-[650px] desktop:px-[0] desktop:text-start">
          <h1 data-text="WEB Frontend developer" className="text-shadow text-lg min-[380px]:whitespace-nowrap before:text-secondary">WEB Frontend developer</h1>
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
      <div className="flex flex-col gap-xl max-w-[80vw] w-full">

        <Project title="22_aer"
          subTitle="Team leader - home&about page"
          leftInfo={<>
            T3 Next App + TypeScript + tailwind + css<br />
            Responsive + Fluid<br />
            19.06.2023 - now (~51h)
          </>}
          onClick={() => openModal('22MoreInfo')}
          siteUrl="https://22-aer-nicitaa.vercel.app/"
          githubUrl="https://github.com/Nicitaa/22_aer"
          figmaUrl="https://www.figma.com/file/llWyCvntsW1ZdIHgyVybUW/Untitled?type=design&node-id=0%3A1&t=iJdxmi7OnRcPZ8dg-1" />
        <ModalMoreInfo isOpen={isOpen['22MoreInfo']} onClose={() => closeModal('22MoreInfo')}
          label="22_aer"
          siteUrl="https://22-aer-nicitaa.vercel.app/"
          taskLabel="Create web site which will sell begs"
          deadline="1 month"
          price="500-2900$"
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
                    <h1>/about - whole page</h1>
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





        <Project title="24_dashboard-mui"
          subTitle="Now I'm collaborating with clerk to fix this"
          leftInfo={<>
            React + Vite + TypeScript + MUI<br />
            No Responsive<br />
            07.2023 - 08.2023 (~30h)
          </>}
          onClick={() => openModal('24MoreInfo')}
          siteUrl="https://24-dashboard-c06zh8ry5-nicitaa.vercel.app"
          githubUrl="https://github.com/Nicitaa/24_dashboard-mui"
          figmaUrl="https://www.figma.com/file/ugi51UXz9ehKvXR1CSz1CJ/Purity-UI-Dashboard---Chakra-UI-Dashboard-(Community)?type=design&node-id=1516-368&mode=design&t=4eHHT6vtEqZZq67S-0" />
        <ModalMoreInfo isOpen={isOpen['24MoreInfo']} onClose={() => closeModal('24MoreInfo')}
          label="24_dashboard-mui"
          siteUrl="https://24-dashboard-c06zh8ry5-nicitaa.vercel.app"
          taskLabel="Create dashboard using MUI"
          deadline="2 weeks"
          price="400-2500$"
          collaborationChildren={
            <>
              <CollaborationIcon tooltiptext={
                <div className="flex flex-col gap-y-md">
                  <h1>Whole site</h1>
                  <div>
                    <h1>Functionalify:</h1>
                    <h1>Advanced dark mode</h1>
                    <h1>Auth with Clerk</h1>
                  </div>
                </div>} />
            </>
          } />






        <Project title="16_gericht-restaurant"
          subTitle="Whole site"
          leftInfo={<>
            React TS + Vite + tailwind + css<br />
            Responsive + Fluid<br />
            05.2023 - 31.07.2023 (~128h)
          </>}
          onClick={() => openModal('16MoreInfo')}
          siteUrl="https://16-gericht-restaurant.vercel.app"
          githubUrl="https://github.com/Nicitaa/16_gericht-restaurant"
          figmaUrl="https://www.figma.com/file/at7kfXpaRagcwAwkkRVviz/Modern-UI%2FUX%3A-Gericht-(Copy)?type=design&node-id=0%3A1&mode=design&t=qbkbNwCPoXCSdZM4-1" />
        <ModalMoreInfo isOpen={isOpen['16MoreInfo']} onClose={() => closeModal('16MoreInfo')}
          label="16_gericht-restaurant"
          siteUrl="https://16-gericht-restaurant.vercel.app"
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
            05.2023 - 05.2023 (~50h)
          </>}
          onClick={() => openModal('15MoreInfo')}
          siteUrl="https://15-hoo-bank.vercel.app"
          githubUrl="https://github.com/Nicitaa/15_HooBank"
          figmaUrl="https://www.figma.com/file/QRQCYjU0PxVyMJW2MjZ50p/HooBank-(Copy)?type=design&node-id=0%3A1&mode=design&t=jJPu1kzoLGIwvFKk-1" />
        <ModalMoreInfo isOpen={isOpen['15MoreInfo']} onClose={() => closeModal('15MoreInfo')}
          label="15_HooBank"
          siteUrl="https://15-hoo-bank.vercel.app"
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