
export function Footer (props) {
  return (
    <footer className="py-4 bg-purple-100 border-pink-500 border-solid border-t-2" {...props}>
      <div className="my-0 mx-auto p-4 max-w-7xl text-purple-700">
        &copy; {new Date().getFullYear()} - Built with ♥︎ and
        {` `}<a href="https://nextein.elmasse.io">Nextein</a>
      </div>
    </footer>   
  )  
}
