// components/events/FeaturedEventBanner.tsx
'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function FeaturedEventBanner() {
  const featuredEvent = {
    title: 'Urban Sprint Championship 2024',
    date: '15 June 2024',
    location: 'Universitas Indonesia, Depok',
    type: 'Sprint Orienteering',
    participants: '120+ registered',
    timeLeft: 'Early bird ends in 2 days',
    ctaLink: '/events/urban-sprint-2024',
    status: 'open',
  }

  return (
    <section className='relative w-full py-12 md:py-16 bg-white'>
      {/* Container width konsisten dengan Header */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='
            relative bg-white
            border border-gray-200 hover:border-accent/50
            rounded-xl
            p-6 md:p-8
            overflow-hidden
            shadow-lg
            transition-all duration-300
            hover:shadow-xl
          '>
          {/* Subtle Background Pattern */}
          <div className='absolute inset-0 opacity-[0.03]'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)] bg-size-[40px_40px]' />
          </div>

          {/* Status Badge - responsif */}
          <div className='inline-flex items-center gap-2 mb-6'>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-linear-to-r from-blue-500 to-purple-600'></span>
            </span>
            <span
              className='font-medium text-sm'
              style={{
                background: 'linear-gradient(135deg, #1e3a8a, #8a00c4)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
              Registration Open • Featured Event
            </span>
          </div>

          <div className='relative z-10'>
            {/* Flex layout responsif seperti Header */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8'>
              {/* Left Content - 70% width pada desktop */}
              <div className='flex-1 w-full lg:w-[70%]'>
                {/* Title - responsif seperti judul Header */}
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                  {featuredEvent.title}
                </h2>

                {/* Event Details - responsif wrap */}
                <div className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6'>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Calendar className='w-4 h-4 text-blue-600 shrink-0' />
                    <span className='text-sm sm:text-base'>
                      {featuredEvent.date}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <MapPin className='w-4 h-4 text-purple-600 shrink-0' />
                    <span className='text-sm sm:text-base'>
                      {featuredEvent.location}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Users className='w-4 h-4 text-pink-600 shrink-0' />
                    <span className='text-sm sm:text-base'>
                      {featuredEvent.participants}
                    </span>
                  </div>
                </div>

                {/* Timer/Urgency - responsif */}
                <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 rounded-lg border border-accent/30 w-full sm:w-auto'>
                  <Clock
                    className='w-4 h-4 shrink-0'
                    style={{
                      background: 'linear-gradient(135deg, #1e3a8a, #8a00c4)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  />
                  <span
                    className='font-medium text-sm sm:text-base'
                    style={{
                      background: 'linear-gradient(135deg, #1e3a8a, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}>
                    {featuredEvent.timeLeft}
                  </span>
                </div>
              </div>

              {/* Right CTA - 30% width pada desktop, full width mobile */}
              <div className='flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-[30%] min-w-[200px] lg:min-w-[220px] mt-4 lg:mt-0'>
                <Button
                  variant='gradient'
                  size='lg'
                  href={featuredEvent.ctaLink}
                  className='w-full text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base py-3'>
                  Register Now
                </Button>

                <Button
                  variant='outline'
                  size='lg'
                  href={`${featuredEvent.ctaLink}#details`}
                  className='w-full text-center hover:scale-105 transition-all text-sm sm:text-base py-3 border-2'>
                  View Details
                </Button>
              </div>
            </div>

            {/* Event Type Badge - responsif */}
            <div className='mt-6 pt-6 border-t border-gray-200'>
              <span
                className='text-sm font-semibold tracking-wide'
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #8a00c4)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}>
                {featuredEvent.type}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
