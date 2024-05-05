import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"

export function GithubUrlIcon({ githubUrl }: { githubUrl: string }) {
  return (
    <Link
      className="w-[48px] h-[48px] rounded-[50%] bg-primary-foreground cursor-pointer hidden desktop:flex"
      target="_blank"
      href={githubUrl}>
      <div className="relative">
        <AiFillGithub className="text-secondary-foreground" size={48} />
      </div>
    </Link>
  )
}
