import Link from "next/link"

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  href?: string
  target?: "_slef" | "_blank" | "_parent" | "_top"
}

export function Button({ onClick, children, href, target }: ButtonProps) {
  if (href) {
    return (
      <Link
        className="px-sm py-xs border-[1px] border-solid border-cta rounded-xs flex items-center gap-x-xs 
  hover:bg-primary-foreground transition-colors duration-300 text-secondary"
        href={href}
        target={target}>
        {children}
      </Link>
    )
  } else
    return (
      <button
        className="px-sm py-xs border-[1px] border-solid border-cta rounded-xs flex items-center gap-x-xs 
  hover:bg-primary-foreground transition-colors duration-300 text-secondary"
        onClick={onClick}>
        {children}
      </button>
    )
}
