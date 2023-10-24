interface ButtonProps {
  onClick: () => void
  children?: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="px-sm py-xs border-[1px] border-solid border-cta rounded-xs flex items-center gap-x-xs 
    hover:bg-primary-foreground transition-colors duration-300 text-secondary"
      onClick={onClick}>
      {children}
    </button>
  )
}
