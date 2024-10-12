import React from 'react'

import banner1 from "../../../public/slider2.jpg"
import Image from 'next/image'

const OpenProjectBanner = () => {
  return (
    <>
    <div className='project-banner h-[68dvh] my-10'>
        <Image 
        src={banner1}
        alt='Banner Image'
        className='max-w-full h-full object-cover'
        />
    </div>
    </>
  )
}

export default OpenProjectBanner