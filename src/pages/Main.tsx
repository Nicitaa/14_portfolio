import { Link } from "react-router-dom";
import { Skill } from "../components/Skills/Skill";
import { TooltipHTMLCSS, TooltipOther, TooltipReact } from "../components/Tooltips";

export function Main() {

  return (
    <div className="flex flex-col justify-center items-center gap-y-xl">

      {/* Skills + Text */}
      <div className="flex flex-col laptop:flex-row justify-between items-center gap-lg w-full px-sm
      tablet:px-md
      laptop:max-w-[80%] laptop:h-[40rem]">
        <ul className="flex flex-col gap-y-sm">
          <Skill id={1} label="html&css" hours={1080} tooltip tooltiptext={<TooltipHTMLCSS />} />
          <Skill id={2} label="react" hours={950} tooltip tooltiptext={<TooltipReact />} />
          <Skill id={3} label="typescript" hours={650} />
          <Skill id={4} label="other" hours={34} tooltip tooltiptext={<TooltipOther />} />
        </ul>
        <div className="laptop:max-w-[650px]">
          <h1 data-text="WEB Frontend developer" className="text-shadow text-lg whitespace-nowrap" />
          <p className="text-md font-bold">I’m going to be WEB FullStack Developer. I see a lot of things to improve in WEB and I
            have knowledge about <div className="relative inline-block">
              <span data-text="conversion" className="text-tooltip tooltip">
                <div className="tooltiptext">
                  <h1 className="text-xs whitespace-nowrap">When 100 people visit your site<br /> and only 1 of them buy smth - it means conversion rate =1%</h1>
                </div>
              </span>
            </div> that’s why I create web-site for you which will have high conversion rate - so you will sell more. </p>
        </div>
      </div>





      {/* Protfolio projects */}
      <div className="flex flex-col gap-xl w-[1440px] max-w-[80%] mb-xl">

        <div className="relative w-full h-[720px] rounded-md border-[1px] border-solid border-secondary overflow-hidden">
          <Link className="absolute top-sm right-sm w-[48px] h-[48px] rounded-[50%] bg-primary-dark cursor-pointer" target="_blank"
            to='https://www.figma.com/file/at7kfXpaRagcwAwkkRVviz/Modern-UI%2FUX%3A-Gericht-(Copy)?type=design&node-id=0%3A1&mode=design&t=qbkbNwCPoXCSdZM4-1'>
            <div className="relative w-[48px] h-[48px]">
              <img className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px]" src="/figma.png" alt="figma" />
            </div>
          </Link>
          <iframe className="w-full h-[640px] border-b-[1px] border-solid border-secondary" src="https://16-gericht-restaurant.vercel.app" />
          {/* Footer */}
          <div className="relative flex justify-between items-center px-md h-[80px]">
            <div>
              <h1 className="text-sm font-b">
                React TS + Vite + tailwind + css<br />
                Responsive + Fluid<br />
                v.1.0.0.0
              </h1>
            </div>
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
              <h1 className="text-lg font-b">16_gericht-restaurant</h1>
              <p className="text-sm font-b">Whole site</p>
            </div>
            <div>
              <div className="tooltip">
                <img className="w-[48px] h-[48px] cursor-pointer before:shadow-[inset_0px_4px_12px_var(--cta)]" onClick={() => window.open('https://github.com/Nicitaa')} src="/WEB.ico" alt="collaboration" />
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}