import Image from 'next/image'

import { FEATURES } from '@/constant'

export default function Features() {
   return (
      <section className='flex-col py-24 overflow-hidden bg-center bg-no-repeat flexCenter bg-feature-bg'>
         <div className='relative justify-end w-full max-container padding-container'>
            <div className='flex flex-1 lg:min-h-[900px]'>
               <Image src={'/phone.png'} alt='phone' width={440} height={1000} className='feature-phone' />
            </div>
         </div>

         <div className='z-20 flex flex-col w-full lg:w-[60%]'>
            <div className='relative'>
               <Image
                  src={'/camp.svg'}
                  alt='camp'
                  width={50}
                  height={50}
                  className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
               />
               <h2 className='bold-40 lg:bold-64'>Our Features</h2>
            </div>
            <ul className='grid gap-10 mt-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
               {FEATURES.map((feature) => (
                  <FeatureItem
                     key={feature.title}
                     title={feature.title}
                     icon={feature.icon}
                     variant={feature.variant}
                     description={feature.description}
                  />
               ))}
            </ul>
         </div>
      </section>
   )
}

type TFeatureItem = {
   title: string
   icon: string
   variant: string
   description: string
}

const FeatureItem = ({ title, icon, variant, description }: TFeatureItem) => {
   return (
      <li className='flex flex-col items-start flex-1 w-full'>
         <div className='p-4 rounded-full lg:p-7 bg-green-50'>
            <Image src={icon} alt='map' width={28} height={28} />
         </div>
         <h2 className='mt-5 capitalize bold-20 lg:bold-32'>{title}</h2>
         <p className='mt-5 regular-16 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
      </li>
   )
}
