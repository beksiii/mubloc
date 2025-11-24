'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import VerticalTicker from '@/components/ui/VerticalTicker'

const Countdown = dynamic(() => import('./Countdown'), { ssr: false })

export default function Hero() {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center bg-custom-dark text-custom-light overflow-hidden'>
      {/* Background Aurora */}
      <div className='absolute inset-0 bg-aurora' />

      {/* Floating Orbs */}
      <div className='absolute inset-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
          className='absolute bottom-1/3 right-1/3 w-80 h-80 bg-black/20 rounded-full blur-3xl'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.08, scale: 1.2 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2,
          }}
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-neutral-900/20 rounded-full blur-2xl'
        />
      </div>

      {/* CONTENT WRAPPER - SESUAIKAN DENGAN HEADER */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-10 relative z-10'>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='flex-1 max-w-md md:max-w-xl bg-custom-surface/90 p-4 sm:p-6 md:p-8 rounded-2xl border border-primary/20 backdrop-blur-xl flex flex-col gap-4 sm:gap-6 shadow-2xl'>
          {/* Title & Description */}
          <div className='space-y-3 sm:space-y-4'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className='space-y-2 sm:space-y-3'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight'>
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
                  WORLD
                </span>{' '}
                <span className='text-custom-light'>RANKING EVENT</span>
              </h1>

              <p className='text-sm sm:text-base md:text-lg text-custom-muted leading-relaxed font-medium'>
                Elite Orienteering Championship where navigation mastery meets
                physical excellence. Join athletes from across the globe in the
                ultimate test of skill and endurance.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='space-y-3 sm:space-y-4'>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
              <Button
                variant='gradient'
                size='lg'
                href='/registration'
                className='flex-1 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base'>
                Register Now
              </Button>

              <Button
                variant='outline'
                size='lg'
                href='/events'
                className='flex-1 text-center border-2 hover:scale-105 transition-all text-sm sm:text-base'>
                View Events
              </Button>
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className='bg-custom-dark/50 rounded-xl p-3 sm:p-4 border border-tertiary/20'>
              <p className='text-custom-muted text-xs sm:text-sm font-semibold mb-2 text-center'>
                REGISTRATION CLOSES IN
              </p>
              <div className='flex justify-center'>
                <Countdown targetDate='2026-10-24T00:00:00' />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT - VERTICAL TICKER */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='relative flex-1 w-full md:w-auto mt-4 sm:mt-6 md:mt-0 hidden md:flex justify-center'>
          <VerticalTicker />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className='absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex flex-col items-center space-y-1 sm:space-y-2'>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='text-custom-muted text-xs font-semibold tracking-wider'>
            EXPLORE MORE
          </motion.span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='w-5 h-7 sm:w-6 sm:h-8 border-2 border-accent rounded-full flex justify-center relative'>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-2 sm:h-3 bg-accent rounded-full mt-1'
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
