import { FunctionComponent, ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"

import { AiFillGithub } from "react-icons/ai"
import { FigmaUrlIcon } from "./FigmaUrlIcon"
import { GithubUrlIcon } from "./GithubUrlIcon"
import { YoutubeUrlIcon } from "./YouTubeUrlIcon"

interface ProjectProps {
  figmaUrl?: string
  youtubeUrl?: string
  githubUrl?: string
  siteUrl?: string
  youTubeEmbedPreview?: string
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
  youTubeEmbedPreview,
  title,
  subTitle,
  leftInfo,
  moreInfoButton: MoreInfoButton,
}: ProjectProps) {
  return (
    <div className="relative w-full h-[720px]">
      <div className="absolute top-sm right-sm flex gap-x-md">
        {figmaUrl && <FigmaUrlIcon figmaUrl={figmaUrl} />}
        {githubUrl && <GithubUrlIcon githubUrl={githubUrl} />}
        {youtubeUrl && <YoutubeUrlIcon youTubeUrl={youtubeUrl} />}
      </div>
      <div className="w-full h-[640px] border-[1px] border-solid border-secondary rounded-t-md overflow-hidden">
        {youTubeEmbedPreview ? (
          <iframe
            width="100%"
            height="100%"
            src={youTubeEmbedPreview}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        ) : (
          <iframe className="w-full h-full" title={title} src={youtubeUrl} loading="lazy" />
        )}
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
