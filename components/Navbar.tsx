import Image from 'next/image'
import Link from 'next/link'

import { NAV_LINKS } from '@/constant'

import Button from './Button'

export default function Navbar() {
   return (
      <nav className='relative z-30 py-5 flexBetween max-container padding-container'>
         <Link href={'/'}>
            <Image src={'/hilink-logo.svg'} alt='Hilink Logo' width={74} height={29} />
         </Link>

         <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
               <Link
                  href={link.href}
                  key={link.key}
                  className='cursor-pointer regular-16 text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold'>
                  {link.label}
               </Link>
            ))}
         </ul>

         <div className='hidden lg:flexCenter'>
            <Button type='button' title='login' icon='/user.svg' variant='btn_dark_green' />
         </div>

         {/* responsive menu */}
         <Image
            src={'menu.svg'}
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
         />
      </nav>
   )
}
