import { ReactElement } from "react"

interface CollaborationIconIconProps {
  tooltiptext: string | ReactElement
  profileUrl?: string
  imgSrc?: string
}

export function CollaborationIcon({ tooltiptext, profileUrl, imgSrc }: CollaborationIconIconProps) {
  return (
    <div className="tooltip-modal collaboration-tooltip">
      <img className="cursor-pointer w-[48px] h-[48px] rounded-[50%]" onClick={() => window.open(profileUrl ? profileUrl : 'https://github.com/Nicitaa')}
        src={imgSrc ? imgSrc : "/WEB.ico"} alt="collaboration" />
      <div className="tooltiptext-modal">
        <h1>{tooltiptext}</h1>
      </div>
    </div>
  )
}