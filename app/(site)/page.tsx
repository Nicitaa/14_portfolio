"use client"

import Link from "next/link"

import { Skill } from "@/components/Skill"
import { TooltipOther, TooltipReact } from "../components/Tooltips"
import { ProjectsSwitcher } from "@/components/ProjectsSwitcher"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-xl my-xl">
        {/* Skills + Text */}
        <div
          className="flex flex-col desktop:flex-row justify-between items-center gap-lg w-full px-sm
      tablet:px-md desktop:max-w-[80%] desktop:h-[40rem]">
          <ul className="flex flex-col gap-y-sm">
            <Skill id={1} label="html&css" hours={3596} />
            <Skill id={2} label="React" hours={3252} tooltip tooltiptext={<TooltipReact />} />
            <Skill id={4} label="Next" hours={2066} />
            <Skill id={3} label="TypeScript" hours={3098} />
            <Skill id={5} label="other" hours={1103} tooltip tooltiptext={<TooltipOther />} />
          </ul>
          <div className="text-center w-fit break-words max-w-[650px] desktop:px-[0] desktop:text-start">
            <h1 data-text="WEB Frontend developer" className="text-shadow text-lg before:text-secondary">
              Teamlead WEB developer
            </h1>
            <div className="text-md font-bold text-secondary-foreground">
              <b>I&apos;m started</b> my career in 2018 and tried 4 different programming languages.
              <br />
              <b>My main stack</b> - Next + TypeScript + Tailwind
              <br />
              <b>I&apos;m creating</b> websites with high&nbsp;
              <div className="relative inline-block">
                <span data-text="conversion" className="text-tooltip tooltip">
                  <div className="tooltiptext">
                    <h1 className="text-sm tablet:text-xs whitespace-nowrap">
                      When 100 people visit your site
                      <br /> and only 1 of them buy smth
                      <br className="tablet:hidden" /> - it means conversion rate = 1%
                    </h1>
                  </div>
                </span>
              </div>
              &nbsp; rate and amazing UI/UX/CX
              <br />
              Here is&nbsp;
              <div className="relative inline-block">
                <span data-text="message" className="text-tooltip tooltip">
                  <div className="tooltiptext">
                    <h2 className="text-sm tablet:text-xs">
                      <b>I dropped</b> my academy and want
                      <br className="tablet:hidden" /> to say people
                      <br className="hidden tablet:block" /> in young age that knowlege
                      <br className="tablet:hidden" /> that you get in&nbsp;
                      <br className="hidden tablet:block" />
                      <i>school/colledge/academy</i>
                      <br className="tablet:hidden" /> don&apos;t help you to get <br className="hidden tablet:block" />
                      success in your life
                      <br className="tablet:hidden" /> - that&apos;s why you need invest your
                      <br /> free time in vision in your head
                      <br className="tablet:hidden" /> of how to get success.
                      <br />
                    </h2>
                  </div>
                </span>
              </div>
              &nbsp; I want to say
              <br />
              {/* <b>I dropped</b> my academy and want to say people in young age that knowlege that you get in&nbsp;
            <i>school/colledge/academy</i> don&apos;t help you to get success in your life - that&apos;s why you need
            invest your free time in vision in your head of how to get success.
            <br /> */}
              <b> Book call</b> with me&nbsp;
              <Link className="text-cta" href="/appointment">
                here
              </Link>
            </div>
          </div>
        </div>

        {/* Protfolio projects */}
        <div className="flex flex-col gap-xl max-w-[80vw] w-full">
          <ProjectsSwitcher />
        </div>
      </div>
      <Footer />
    </>
  )
}
