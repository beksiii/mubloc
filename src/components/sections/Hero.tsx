'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Nonaktifkan SSR untuk Countdown agar tidak muncul mismatch
const Countdown = dynamic(() => import('./Countdown'), { ssr: false })

export default function Hero() {
  return (
    <section className='relative w-full min-h-screen flex items-center bg-black text-white overflow-hidden pt-30'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative py-16 md:py-0'>
        {/* Kiri: Frame konten */}
        <div
          className='
    flex-1
    max-w-md md:max-w-[520px] lg:max-w-xl
    bg-black/80 p-6 md:p-8 lg:p-10 rounded-2xl border border-lime-400
    backdrop-blur-sm z-20 
    md:absolute md:left-[5%] lg:left-[7%] md:top-1/2 md:-translate-y-1/2
    flex flex-col gap-6 md:gap-8
  '>
          {/* Headline Section */}
          <div className='space-y-3 md:space-y-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              MUBLOC
            </h1>
            <p className='text-xl sm:text-2xl md:text-3xl text-gray-200'>
              WORLD RANKING EVENT
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-300'>
              Challenge your navigation and physical skills in the international
              Orienteering Championship.
            </p>
          </div>

          {/* Buttons Section */}
          <div className='flex flex-col md:flex-row gap-3 md:gap-4'>
            <Link
              href='/registration'
              className='bg-lime-400 text-black px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-lime-300 transition text-center'>
              Register Now
            </Link>
            <Link
              href='/events'
              className='border border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition text-center'>
              View Events
            </Link>
          </div>

          {/* Countdown Section */}
          <div className='mt-3 md:mt-4'>
            <Countdown targetDate='2026-10-24T00:00:00' />
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className='relative flex-1 w-full md:w-auto mt-10 md:mt-0'>
          <div className='relative w-full h-64 sm:h-80 md:w-[520px] md:h-[580px] rounded-2xl overflow-hidden shadow-lg md:ml-auto md:mr-[7%]'>
            <Image
              src='/images/10.jpg'
              alt='Orienteering background'
              fill
              className='object-cover object-center'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
