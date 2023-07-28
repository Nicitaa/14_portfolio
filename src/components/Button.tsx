interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="px-sm py-xs border-[1px] border-solid border-cta rounded-xs flex items-center gap-x-xs 
    hover:bg-primary-dark transition-colors duration-300"
      onClick={onClick}>{children}</button>
  )
}