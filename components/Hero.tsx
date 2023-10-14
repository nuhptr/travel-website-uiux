import Image from 'next/image'

import Button from './Button'

export default function Hero() {
   return (
      <section className='flex flex-col py-10 pb-32 gap-20 max-container padding-container md:gap-28 lg:py-20 xl:flex-row'>
         <div className='hero-map' />

         {/* Left */}
         <div className='relative z-20 flex flex-col flex-1 xl:w-1/2'>
            <Image
               src='/camp.svg'
               alt='camp'
               width={50}
               height={50}
               className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            />
            <h1 className='bold-52 lg:bold-88'>Explore, Learn, and Have Fun at Hilink!</h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px] leading-relaxed'>
               Uncover the wonders of the natural world with hiking, wildlife exploration, and arts and crafts.
               Tailored programs for all ages ensure an amazing, age-appropriate adventure.
            </p>

            <div className='flex flex-wrap gap-5 my-11'>
               <div className='flex items-center gap-2'>
                  {Array(5)
                     .fill(1)
                     .map((_, index) => (
                        <Image src='/star.svg' key={index} alt='star' width={24} height={24} />
                     ))}
               </div>

               <p className='bold-16 lg:bold-20 text-blue-70'>
                  198k
                  <span className='ml-1 regular-16 lg:regular-20'>Excellent Reviews</span>
               </p>
            </div>

            <div className='flex flex-col w-full gap-3 sm:flex-row'>
               <Button type='button' title='Download App' variant='btn_green' />
               <Button type='button' title='How we work?' icon='/play.svg' variant='btn_white_text' />
            </div>
         </div>

         {/* Overlay */}
         <div className='relative flex items-start flex-1'>
            <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
               <div className='flex flex-col'>
                  <div className='flexBetween'>
                     <p className='regular-16 text-gray-20'>Location</p>
                     <Image src='/close.svg' alt='close' width={24} height={24} />
                  </div>
                  <p className='text-white bold-20'>Rinjani Mount</p>
               </div>

               <div className='flexBetween'>
                  <div className='flex flex-col'>
                     <p className='block regular-16 text-gray-20'>Distance</p>
                     <p className='text-white bold-20'>32 km</p>
                  </div>
                  <div className='flex flex-col'>
                     <p className='block regular-16 text-gray-20'>Elevation</p>
                     <p className='text-white bold-20'>3.726 m</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
