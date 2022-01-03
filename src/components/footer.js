
export function Footer (props) {
  return (
    <footer className="py-4 bg-pink-500" {...props}>
      <div className="mt-0 mx-auto p-4 max-w-7xl text-xs text-pink-100">
        &copy; {new Date().getFullYear()} - Built with ♥︎ and
        {` `}<a href="https://nextein.elmasse.io">Nextein</a>
      </div>
    </footer>   
  )  
}
