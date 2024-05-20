import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  children?: React.ReactNode
  href?: string

  target?: "_slef" | "_blank" | "_parent" | "_top"
  className?: string
}

export function Button({ onClick, children, href, target, className = "", ...props }: ButtonProps) {
  if (href) {
    return (
      <Link
        className={`px-sm py-xs border-[1px] border-solid border-cta rounded flex justify-center items-center gap-x-xs 
  hover:bg-primary-foreground transition-colors duration-300 text-secondary ${className}`}
        href={href}
        target={target}>
        {children}
      </Link>
    )
  } else
    return (
      <button
        className={`px-sm py-xs border-[1px] border-solid border-cta rounded flex justify-center items-center gap-x-xs 
  hover:bg-primary-foreground transition-colors duration-300 text-secondary ${className}`}
        onClick={onClick}
        {...props}>
        {children}
      </button>
    )
}
