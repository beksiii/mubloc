// components/sections/final-cta.tsx
'use client'

import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

// Dynamic import dengan SSR disabled
const Countdown = dynamic(() => import('@/components/sections/Countdown'), {
  ssr: false,
  loading: () => (
    <div className='flex justify-center space-x-4'>
      {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map(unit => (
        <div key={unit} className='flex flex-col items-center'>
          <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-tertiary bg-custom-surface/50 rounded-lg px-3 py-2 min-w-16'>
            00
          </div>
          <div className='uppercase text-xs sm:text-sm text-custom-muted mt-1'>
            {unit}
          </div>
        </div>
      ))}
    </div>
  ),
})

export default function FinalCTA() {
  return (
    <section className='relative py-20 bg-linear-to-br from-custom-dark to-custom-surface text-custom-light overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 right-10 w-40 h-40 bg-pink rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Main Heading */}
          <h2 className='text-4xl md:text-6xl font-bold mb-6'>
            Ready to{' '}
            <motion.span
              className='inline-block'
              style={{
                background:
                  'linear-gradient(135deg, #1e3a8a, #8a00c4, #ec4899, #3b82f6)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'gradientShift 8s ease-in-out infinite',
              }}>
              Challenge
            </motion.span>{' '}
            Yourself?
          </h2>

          <p className='text-xl md:text-2xl text-custom-muted mb-8 leading-relaxed'>
            Join the ultimate orienteering competition and test your navigation
            skills against the world&apos;s best athletes.
          </p>

          {/* Countdown Timer */}
          <div className='bg-custom-surface/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-accent/20'>
            <h3 className='text-lg font-semibold mb-4 text-custom-muted'>
              Registration Closes In
            </h3>
            <div className='flex justify-center'>
              <Countdown targetDate='2026-10-24T00:00:00' />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Button
              href='/registration'
              variant='gradient'
              size='lg'
              className='text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all'>
              Register Now - Limited Slots!
            </Button>
            <Button
              href='/events'
              variant='outline'
              size='lg'
              className='text-lg px-8 py-4 font-bold border-2 hover:scale-105 transition-all'>
              View Event Details
            </Button>
          </div>

          {/* Urgency Message */}
          <div className='bg-accent/20 border border-accent/30 rounded-lg p-4 inline-block'>
            <p className='text-accent text-sm font-semibold'>
              Early bird discount available for the first 100 participants!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
