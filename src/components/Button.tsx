interface ButtonProps {
  onClick: () => void
  children?: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="px-sm py-xs border-[1px] border-solid border-cta rounded-xs flex items-center gap-x-xs 
    hover:bg-primary-dark transition-colors duration-300"
      onClick={onClick}>{children}</button>
  )
}