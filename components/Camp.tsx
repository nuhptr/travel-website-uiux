import Image from "next/image"

import { PEOPLE_URL } from "@/constant"

interface ICampProps {
   backgroundImage: string
   title: string
   subtitle: string
   peopleJoined: string
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: ICampProps) => {
   return (
      <div
         className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
         <div className="flex flex-col items-start justify-between h-full p-6 lg:px-20 lg:py-10">
            <div className="gap-4 flexCenter">
               <div className="p-4 rounded-full bg-green-50">
                  <Image src={"/folded-map.svg"} alt="map" width={28} height={28} />
               </div>
               <div className="flex flex-col gap-1">
                  <h4 className="text-white bold-18">{title}</h4>
                  <p className="text-white regular-14">{subtitle}</p>
               </div>
            </div>

            <div className="gap-6 flexCenter">
               <span className="flex overflow-hidden -space-x-4">
                  {PEOPLE_URL.map((url) => (
                     <Image
                        src={url}
                        key={url}
                        alt="person"
                        width={52}
                        height={52}
                        className="inline-block w-10 h-10 rounded-full"
                     />
                  ))}
               </span>
               <p className="text-white bold-16 md:bold-20">{peopleJoined}</p>
            </div>
         </div>
      </div>
   )
}

export default function Camp() {
   return (
      <section className="relative flex flex-col py-10 2xl:max-container lg:mb-10 lg:py-20 xl:mb-20">
         <div className="flex hide-scrollbar h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            <CampSite
               backgroundImage="bg-bg-img-1"
               title="Putuk Truno Camp"
               subtitle="Prigen, Pasuruan"
               peopleJoined="50+ Joined"
            />
            <CampSite
               backgroundImage="bg-bg-img-2"
               title="Hidden Valley Hills"
               subtitle="Purwakarta, Jawa Barat"
               peopleJoined="100+ Joined"
            />
         </div>

         <div className="px-6 mt-10 flexEnd lg:-mt-60 lg:mr-6">
            <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
               <h2 className="text-white capitalize regular-24 md:regular-32 2xl:regular-64">
                  <strong>Feeling Lost </strong>
                  And Not Knowing The Way?
               </h2>
               <p className="mt-5 text-white regular-14 xl:regular-16">
                  Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of
                  getting lost is very large. That&apos;s why we are here for those of you who want to start adventure
               </p>
               <Image src={"/quote.svg"} alt="camp-2" width={186} height={219} className="camp-quote" />
            </div>
         </div>
      </section>
   )
}
