interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="bg-background text-title
    min-h-screen transition-colors duration-300 pt-[62px]">
      {children}
    </div>
  )
}
