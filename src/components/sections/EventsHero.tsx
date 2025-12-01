'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface EventsHeroProps {
  mainTitle: string // teks putih
  gradientTitle?: string // teks gradient
  subtitle?: string
  logoSrc?: string
  ctaLabel?: string
  ctaHref?: string
  gradientFirst?: boolean // default false
}

export default function EventsHero({
  mainTitle,
  gradientTitle,
  subtitle,
  logoSrc = '/images/mublocb.svg',
  ctaLabel,
  ctaHref,
  gradientFirst = false,
}: EventsHeroProps) {
  return (
    <section className='relative w-full pt-24 pb-32 overflow-hidden'>
      {/* Glow halus */}
      <div
        className='absolute inset-0 mx-auto max-w-3xl blur-[120px] opacity-20 pointer-events-none'
        style={{
          background:
            'radial-gradient(circle at center, rgba(140,82,255,0.45), transparent 80%)',
        }}
      />

      {/* Logo animasi */}
      {logoSrc && (
        <motion.img
          src={logoSrc}
          alt='Event Logo'
          initial={{ opacity: 0, x: '-40%', y: '10%', scale: 1 }}
          animate={{ opacity: 0.12, x: '-15%', y: '10%', scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className='
            absolute 
            left-2 sm:left-10 md:left-16 
            top-[70%] sm:top-1/2 
            w-40 sm:w-56 md:w-72 lg:w-[360px]
            -translate-y-1/2 
            pointer-events-none select-none
          '
        />
      )}

      {/* Teks */}
      <div className='relative text-center px-6'>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight'>
          {gradientFirst ? (
            <>
              {/* Gradient dulu */}
              {gradientTitle && (
                <span
                  style={{
                    background:
                      'linear-gradient(135deg, #1e3a8a, #8a00c4, #ec4899, #3b82f6)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradientShift 8s ease-in-out infinite',
                  }}>
                  {gradientTitle}
                </span>
              )}{' '}
              <span className='text-white'>{mainTitle}</span>
            </>
          ) : (
            <>
              {/* Putih dulu */}
              <span className='text-white'>{mainTitle} </span>
              {gradientTitle && (
                <span
                  style={{
                    background:
                      'linear-gradient(135deg, #1e3a8a, #8a00c4, #ec4899, #3b82f6)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradientShift 8s ease-in-out infinite',
                  }}>
                  {gradientTitle}
                </span>
              )}
            </>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg'>
            {subtitle}
          </motion.p>
        )}

        {/* CTA Button */}
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='mt-8'>
            <Button
              href={ctaHref}
              variant='gradient'
              size='lg'
              className='px-10 py-4 shadow-lg hover:shadow-xl'>
              {ctaLabel}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
