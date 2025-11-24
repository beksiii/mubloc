// components/sections/about-preview.tsx - UPDATED VERSION
'use client'

import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className='py-20 bg-white relative overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-10 w-80 h-80 bg-tertiary rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Visual Section */}
          <div className='lg:order-1'>
            <div className='relative group'>
              {/* Main Visual Card */}
              <div className='rounded-3xl shadow-2xl h-80 relative overflow-hidden bg-custom-surface border border-accent/20'></div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full shadow-lg'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-tertiary rounded-full shadow-lg'></div>
            </div>
          </div>

          {/* Text Section */}
          <div className='lg:order-2'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary leading-tight'>
              What is{' '}
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
                MUBLOC
              </motion.span>
              ?
            </h2>

            <p className='text-base sm:text-lg text-custom-muted mb-6 leading-relaxed'>
              MUBLOC (Makopala Universitas Budi Luhur Orienteering Championship)
              is Southeast Asia&apos;s premier international orienteering
              competition, designed to challenge the world&apos;s best athletes
              in navigation, strategy, and endurance.
            </p>

            <p className='text-custom-muted mb-8 leading-relaxed'>
              As an official{' '}
              <span className='font-semibold text-accent'>
                IOF World Ranking Event
              </span>
              , MUBLOC offers competitors the opportunity to earn global ranking
              points while competing in professionally organized, world-class
              navigation challenges across diverse terrains.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
              <Button
                href='/about'
                variant='gradient'
                size='lg'
                className='font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all'>
                Discover MUBLOC 2026
              </Button>
              <Button
                href='/events'
                variant='outline'
                size='lg'
                className='font-semibold border-2 hover:-translate-y-0.5 transition-all'>
                View Categories
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-50'></div>
    </section>
  )
}
