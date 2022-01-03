import Link from 'next/link'

import site from '../site.json'

export function Navigation ({className, ...props}) {
 return (
    <nav
      className={[
        "my-0 mx-auto p-4 max-w-7xl",
        className
      ].join(' ')}
      {...props}
    >
      <ul className="space-x-2">
        <li><Link href="/"><a>{site.name}</a></Link></li>
      </ul>
    </nav>
  )
}
