import Image from "next/image"
import Link from "next/link"

export function FigmaUrlIcon({ figmaUrl }: { figmaUrl: string }) {
  return (
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
  )
}
