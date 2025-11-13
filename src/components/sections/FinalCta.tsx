// components/sections/final-cta.tsx
'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-10-24T00:00:00')
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Initialize timer in setTimeout to avoid synchronous setState
    const initializeTimer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 0)

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      clearTimeout(initializeTimer)
      clearInterval(timer)
    }
  }, [])

  const stats = [
    { number: '500+', label: 'Expected Participants' },
    { number: '30+', label: 'Countries' },
    { number: '$50k', label: 'Prize Pool' },
    { number: '5', label: 'Competition Categories' },
  ]

  return (
    <section className='relative py-20 bg-linear-to-br from-gray-900 to-black text-white overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 right-10 w-40 h-40 bg-lime-500 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Main Heading */}
          <h2 className='text-4xl md:text-6xl font-bold mb-6'>
            Ready to <span className='text-lime-400'>Challenge</span> Yourself?
          </h2>

          <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
            Join the ultimate orienteering competition and test your navigation
            skills against the world&apos;s best athletes.
          </p>

          {/* Countdown Timer */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20'>
            <h3 className='text-lg font-semibold mb-4 text-lime-300'>
              ⏳ Registration Closes In
            </h3>
            <div className='flex justify-center space-x-6 md:space-x-8'>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className='flex flex-col items-center'>
                  <div className='bg-white/20 rounded-lg px-4 py-2 min-w-16'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>
                      {value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className='text-sm text-gray-300 mt-2 uppercase'>
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-2xl md:text-3xl font-bold text-lime-400 mb-1'>
                  {stat.number}
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Button
              href='/registration'
              variant='primary'
              className='bg-lime-500 hover:bg-lime-400 text-gray-900 text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all'>
              🎯 Register Now - Limited Slots!
            </Button>
            <Button
              href='/events'
              variant='secondary'
              className='border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 font-bold'>
              📋 View Event Details
            </Button>
          </div>

          {/* Urgency Message */}
          <div className='bg-lime-400/20 border border-lime-400/30 rounded-lg p-4 inline-block'>
            <p className='text-lime-300 text-sm font-semibold'>
              🚀 Early bird discount available for the first 100 participants!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
