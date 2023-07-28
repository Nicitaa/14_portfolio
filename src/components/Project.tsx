import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

interface ProjectProps {
  figmaUrl: string
  siteUrl: string
  title: string
  subTitle: string
  leftInfo: ReactElement
  onClick: () => void
}

export function Project({ figmaUrl, siteUrl, title, subTitle, leftInfo, onClick }: ProjectProps) {
  return (
    <div className="relative w-full h-[720px]">
      <Link className="absolute top-sm right-sm w-[48px] h-[48px] rounded-[50%] bg-primary-dark cursor-pointer hidden laptopL:flex" target="_blank"
        to={figmaUrl}>
        <div className="relative w-[48px] h-[48px]">
          <img className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px]" src="/figma.png" alt="figma" />
        </div>
      </Link>
      <div className="w-full h-[640px] border-[1px] border-solid border-secondary rounded-t-md overflow-hidden">
        <iframe className="w-full h-full" src={siteUrl} />
      </div>
      {/* Footer */}
      <div className="relative flex justify-end laptopL:justify-between items-center 
          border-r-[1px] border-l-[1px] border-b-[1px] border-solid border-secondary rounded-b-md px-md h-[80px]">
        <h1 className="hidden laptopL:flex laptopL:text-sm font-bold">
          {leftInfo}
        </h1>
        <div className="hidden tablet:flex flex-col text-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="text-md laptopL:text-lg font-bold text-secondary">{title}</h1>
          <p className="text-xs laptopL:text-sm font-bold">{subTitle}</p>
        </div>
        <Button onClick={onClick}>More info</Button>
      </div>
    </div>
  )
}