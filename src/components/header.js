
export function Header ({ children, ...props }) {
  return (
    <header className="py-44 bg-gradient-to-br from-pink-500 to-purple-700" {...props}>
      {children}
    </header>
  )
}