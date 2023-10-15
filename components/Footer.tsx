import Image from 'next/image'
import Link from 'next/link'

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constant'

export default function Footer() {
   return (
      <footer className='mb-24 flexCenter'>
         <div className='flex flex-col w-full padding-container max-container gap-14'>
            <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
               <Link href='/' className='mb-10'>
                  <Image src={'/hilink-logo.svg'} alt='logo' width={74} height={29} />
               </Link>
            </div>

            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
               {FOOTER_LINKS.map((columns) => (
                  <FooterColumn title={columns.title} key={columns.title}>
                     <ul className='flex flex-col gap-4 regular-14 text-gray-30'>
                        {columns.links.map((link) => (
                           <Link href={'/'} key={link}>
                              {link}
                           </Link>
                        ))}
                     </ul>
                  </FooterColumn>
               ))}

               <div className='flex flex-col gap-5'>
                  <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                     {FOOTER_CONTACT_INFO.links.map((link) => (
                        <Link href={'/'} key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                           <p className='whitespace-nowrap'>{link.label}:</p>
                           <p className='whitespace-nowrap text-blue-70 medium-14'>{link.value}</p>
                        </Link>
                     ))}
                  </FooterColumn>
               </div>

               <div className='flex flex-col gap-5'>
                  <FooterColumn title={SOCIALS.title}>
                     <ul className='flex gap-4 regular-14'>
                        {SOCIALS.links.map((link) => (
                           <Link href={'/'} key={link}>
                              <Image src={link} alt='logo' width={24} height={24} />
                           </Link>
                        ))}
                     </ul>
                  </FooterColumn>
               </div>
            </div>

            <div className='border bg-gray-20' />
            <p className='w-full text-center regular-14'>2023 Hilink | &copy; All right reserved</p>
         </div>
      </footer>
   )
}

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => {
   return (
      <div className='flex flex-col gap-5'>
         <h4 className='whitespace-nowrap bold-18'>{title}</h4>
         {children}
      </div>
   )
}
