import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section>
        <div className='px-8 py-12'>
          <div className='flex flex-col md:flex-row lg:ml-28'>
            <div className='w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-16 md:py-12 flex flex-col justify-between'>
              <div>
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the <br /> future, with the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='w-[170px] h-[56px] bg-gray-500 text-white border border-gray-600 font-bold mt-12'>
                    View collection
                  </button>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className='w-full md:w-[40%] h-auto md:h-[580px] mr-28 hidden md:block bg-white flex justify-center items-end'>
              <Image src={'/right-pic.png'} width={1000} height={10000} alt='right' className='w-[520px] h-[580px]' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
