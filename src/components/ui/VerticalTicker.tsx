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
        duration: 90,
        ease: 'linear',
        repeat: Infinity,
      }}
      className='flex flex-col gap-6 py-4'>
      {longImageArray.map((src, i) => (
        <div
          key={i}
          className='relative h-72 w-full overflow-hidden rounded-lg'>
          <Image
            src={src}
            alt={`poster-${i}`}
            fill
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            onError={e => {
              // Fallback ke gradient jika image error
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML = `
                <div class="absolute inset-0 bg-linear-to-br from-primary to-accent flex items-center justify-center">
                  <span class="text-white font-bold text-lg">POSTER ${
                    i + 1
                  }</span>
                </div>
              `
            }}
          />
          <div className='absolute inset-0 bg-linear-to-b from-transparent to-black/10' />
        </div>
      ))}
    </motion.div>
  )
}

export default function VerticalTicker() {
  // GUNAKAN IMAGE YANG SUDAH ADA di public folder
  const images = [
    '/images/mubloc.png', // ← Pastikan ini ada
    '/images/mubloc-text-white.png', // ← atau image lain yang ada
    '/images/mubloc-text-black.png', // ← atau image lain yang ada
  ]

  // Jika hanya ada 1 image, duplicate saja
  const availableImages = images.filter(src => {
    // Cek apakah image ada (basic validation)
    return src.startsWith('/images/')
  })

  // Fallback jika tidak ada images
  const finalImages =
    availableImages.length > 0 ? availableImages : ['/images/mubloc.png']

  return (
    <div className='relative h-120 w-full overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='overflow-hidden'>
          <TickerColumn images={finalImages} />
        </div>
        <div className='overflow-hidden hidden md:block'>
          <TickerColumn images={finalImages} reverse />
        </div>
        <div className='overflow-hidden hidden lg:block'>
          <TickerColumn images={finalImages} />
        </div>
      </div>
      <div className='pointer-events-none absolute left-0 top-0 h-32 w-full bg-linear-to-b from-custom-dark to-transparent' />
      <div className='pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-custom-dark to-transparent' />
    </div>
  )
}
