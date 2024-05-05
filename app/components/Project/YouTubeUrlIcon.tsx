import Image from "next/image"
import Link from "next/link"

export function YoutubeUrlIcon({ youTubeUrl }: { youTubeUrl: string }) {
  return (
    <Link
      className=" w-[48px] h-[48px] rounded-[50%] bg-primary-foreground cursor-pointer hidden desktop:flex"
      target="_blank"
      href={youTubeUrl}>
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
  )
}
