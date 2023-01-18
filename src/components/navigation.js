import Link from 'next/link'
import site from '../site.json'

export function Navigation ({className, ...props}) {
 return (
   <nav
     className={[
       className
     ].join(' ')}
     {...props}
   >
     <ul className="space-x-2 mx-auto py-8 max-w-7xl">
       <li>
         <Link href="/" className='flex items-center gap-2'>

           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
           </svg>
           {site.name}

         </Link>
       </li>
     </ul>
   </nav>
 );
}
