import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  children?: React.ReactNode
  href?: string
  target?: "_slef" | "_blank" | "_parent" | "_top"
  isDisabled?: boolean
  className?: string
}

export function Button({ onClick, children, href, target, isDisabled, className = "", ...props }: ButtonProps) {
  const buttonCSS = twMerge(
    "px-sm py-xs border-[1px] border-solid border-cta rounded flex justify-center items-center gap-x-xs",
    "hover:bg-primary-foreground transition-colors duration-300 text-secondary",
    isDisabled && "opacity-50 cursor-default pointer-events-none",
    className,
  )

  if (href) {
    return (
      <Link className={buttonCSS} href={href} target={target}>
        {children}
      </Link>
    )
  } else
    return (
      <button className={buttonCSS} onClick={onClick} {...props}>
        {children}
      </button>
    )
}
