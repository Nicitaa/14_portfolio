import { FunctionComponent, ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"

import { AiFillGithub } from "react-icons/ai"

interface ProjectProps {
  figmaUrl?: string
  youtubeUrl?: string
  githubUrl?: string
  siteUrl: string
  title: string
  subTitle: string
  leftInfo: ReactElement
  moreInfoButton: FunctionComponent
}

export function Project({
  figmaUrl,
  youtubeUrl,
  githubUrl,
  siteUrl,
  title,
  subTitle,
  leftInfo,
  moreInfoButton: MoreInfoButton,
}: ProjectProps) {
  return (
    <div className="relative w-full h-[720px]">
      <div className="absolute top-sm right-sm flex gap-x-md">
        {figmaUrl && (
          <Link
            className=" w-[48px] h-[48px] rounded-[50%] bg-primary-foreground cursor-pointer hidden desktop:flex"
            target="_blank"
            href={figmaUrl}>
            <div className="relative w-[48px] h-[48px]">
              <Image
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px]"
                src="/figma.png"
                alt="figma"
                width={32}
                height={32}
              />
            </div>
          </Link>
        )}
        {githubUrl && (
          <Link
            className="w-[48px] h-[48px] rounded-[50%] bg-primary-foreground cursor-pointer hidden desktop:flex"
            target="_blank"
            href={githubUrl}>
            <div className="relative">
              <AiFillGithub className="text-secondary-foreground" size={48} />
            </div>
          </Link>
        )}
        {youtubeUrl && (
          <Link
            className=" w-[48px] h-[48px] rounded-[50%] bg-primary-foreground cursor-pointer hidden desktop:flex"
            target="_blank"
            href={youtubeUrl}>
            <div className="relative w-[48px] h-[48px]">
              <Image
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px]"
                src="/YouTube.png"
                alt="YouTube"
                width={128}
                height={128}
              />
            </div>
          </Link>
        )}
      </div>
      <div className="w-full h-[640px] border-[1px] border-solid border-secondary rounded-t-md overflow-hidden">
        <iframe className="w-full h-full" title={title} src={siteUrl} />
      </div>
      {/* Footer */}
      <div
        className="relative flex justify-end desktop:justify-between items-center 
          border-r-[1px] border-l-[1px] border-b-[1px] border-solid border-secondary rounded-b-md px-md h-[80px]">
        <h1 className="hidden desktop:flex desktop:text-sm font-bold">{leftInfo}</h1>
        <div className="hidden tablet:flex flex-col text-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ">
          <a
            className="text-md desktop:text-lg font-bold text-secondary hover:text-secondary-foreground
          transition-all duration-300"
            href={siteUrl}
            target="_blank">
            {title}
          </a>
          <p className="text-xs desktop:text-sm font-bold">{subTitle}</p>
        </div>
        <MoreInfoButton />
      </div>
    </div>
  )
}
