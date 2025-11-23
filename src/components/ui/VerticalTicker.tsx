'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function TickerColumn({
  images,
  reverse = false,
}: {
  images: string[]
  reverse?: boolean
}) {
  const longImageArray = Array(4).fill(images).flat()

  return (
    <motion.div
      animate={{ y: reverse ? ['-100%', '0%'] : ['0%', '-100%'] }}
      transition={{
        duration: 70,
        ease: 'linear',
        repeat: Infinity,
      }}
      className='flex flex-col gap-6 py-4'>
      {longImageArray.map((src, i) => (
        <div
          key={i}
          // Height tetap seperti semula
          className='relative h-72 w-full overflow-hidden rounded-lg'>
          <Image
            src={src}
            alt={`poster-${i}`}
            fill
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
          <div className='absolute inset-0 bg-linear-to-b from-transparent to-black/10' />
        </div>
      ))}
    </motion.div>
  )
}

export default function VerticalTicker() {
  const images = [
    '/images/posters/1.jpg',
    '/images/posters/2.jpg',
    '/images/posters/3.jpg',
    '/images/posters/4.jpg',
    '/images/posters/5.jpg',
    '/images/posters/6.jpg',
  ]

  return (
    // Height container juga tetap
    <div className='relative h-120 w-full overflow-hidden'>
      {/* Hanya grid columns yang responsive */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='overflow-hidden'>
          <TickerColumn images={images} />
        </div>
        <div className='overflow-hidden hidden md:block'>
          <TickerColumn images={images} reverse />
        </div>
        <div className='overflow-hidden hidden lg:block'>
          <TickerColumn images={images} />
        </div>
      </div>
      <div className='pointer-events-none absolute left-0 top-0 h-32 w-full bg-linear-to-b from-custom-dark to-transparent' />
      <div className='pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-custom-dark to-transparent' />
    </div>
  )
}
