import React from 'react'
import Image from 'next/image'
import MenuItem from '@/components/menu/MenuItem'

const HomeMenu = () => {
  return (
    <section className="">
        <div className="absolute h-full left-0 right-0 w-full justify-start">
            <div className="h-48 w-48 absolute -left-12 text-left -z-10">
            <Image src={'/sallad1.png'} width={109} height={189}  objectFit={'contain'} alt={'sallad'} />
            </div>
        </div>
        <div>
            <div className="absolute right-0 -top-[100px] -z-10">
            <Image src={'/sallad2.png'} width={107} height={195}  objectFit={'contain'} alt={'sallad'} />
            </div>
        </div>
        <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold leading-4">
                Check out
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-45">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </section>
  )
}

export default HomeMenu