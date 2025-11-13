// components/sections/partners-showcase.tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function PartnersShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    const speed = 0.8 // smooth scroll

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += speed
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const partners = [
    {
      name: 'International Orienteering Federation',
      logo: '/images/mubloc.png',
    },
    { name: 'Ministry of Youth and Sports', logo: '/images/mubloc.png' },
    { name: 'Budi Luhur University', logo: '/images/mubloc.png' },
    { name: 'Makopala', logo: '/images/mubloc.png' },
    { name: 'Nike', logo: '/images/mubloc.png' },
    { name: 'Garmin', logo: '/images/mubloc.png' },
    { name: 'Kompas', logo: '/images/mubloc.png' },
    { name: 'Detik Sport', logo: '/images/mubloc.png' },
  ]

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className='pb-20 bg-white relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-3 text-lime-500 tracking-wide'>
          Supported By
        </h2>
        <p className='text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm'>
          Partners and sponsors supporting the success of MUBLOC World Ranking
          Event 2026
        </p>

        {/* Scrolling Logos */}
        <div className='relative'>
          <div
            ref={scrollRef}
            className='flex overflow-x-hidden py-6 space-x-14 select-none'
            style={{ scrollBehavior: 'auto' }}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className='shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300'>
                <div className='relative w-28 h-28 md:w-36 md:h-36 group'>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className='object-contain group-hover:opacity-90 transition-all duration-300'
                    onError={e => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.innerHTML = `
                        <div class="text-center">
                          <span class="text-xs text-gray-500">${
                            partner.name.split(' ')[0]
                          }</span>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges for smooth look */}
          <div className='absolute left-0 top-0 w-24 h-full bg-linear-to-r from-white to-transparent z-20'></div>
          <div className='absolute right-0 top-0 w-24 h-full bg-linear-to-l from-white to-transparent z-20'></div>
        </div>
      </div>
    </section>
  )
}
