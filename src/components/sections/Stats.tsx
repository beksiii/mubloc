// components/sections/stats.tsx - DARK VERSION
'use client'

import { useState, useEffect } from 'react'

export default function Stats() {
  const [counters, setCounters] = useState({
    participants: 0,
    countries: 0,
    prize: 0,
    categories: 0,
  })

  useEffect(() => {
    const targets = {
      participants: 500,
      countries: 30,
      prize: 50,
      categories: 5,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const animateCounters = () => {
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          participants: Math.floor(targets.participants * progress),
          countries: Math.floor(targets.countries * progress),
          prize: Math.floor(targets.prize * progress),
          categories: Math.floor(targets.categories * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      number: `${counters.participants}+`,
      label: 'Expected Participants',
      icon: '🏃‍♂️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: `${counters.countries}+`,
      label: 'Countries',
      icon: '🌍',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: `$${counters.prize}k`,
      label: 'Prize Pool',
      icon: '💰',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      number: `${counters.categories}`,
      label: 'Competition Categories',
      icon: '🏆',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className='py-20 bg-linear-to-b from-black to-gray-900 text-white relative overflow-hidden'>
      {/* Background Elements - Match dengan Hero */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-lime-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-500 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30'></div>
      </div>

      <div className='relative z-10 container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            BY THE <span className='text-lime-400'>NUMBERS</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            The scale of Southeast Asia&apos;s premier orienteering championship
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='relative group'>
              {/* Main Card - Dark Theme */}
              <div className='bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-lime-400/10'>
                {/* Icon with Gradient Background */}
                <div
                  className={`w-16 h-16 bg-linear-to-r ${stat.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Animated Number */}
                <div className='text-center mb-2'>
                  <div className='text-3xl md:text-4xl font-bold text-white mb-1'>
                    {stat.number}
                  </div>
                  <div className='text-gray-300 text-sm font-medium tracking-wide'>
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Gradient Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className='flex justify-center mt-16'>
          <div className='w-32 h-1 bg-linear-to-r from-lime-400 to-lime-500 rounded-full'></div>
        </div>

        {/* Additional Info */}
        <div className='text-center mt-12'>
          <div className='inline-flex items-center space-x-6 text-gray-400 text-sm'>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-lime-400 rounded-full'></div>
              <span>World Ranking Event</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-lime-400 rounded-full'></div>
              <span>International Standards</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-lime-400 rounded-full'></div>
              <span>Professional Organization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Divider untuk transisi ke section berikutnya */}
      <div
        className='absolute bottom-0 left-0 w-full h-12 bg-white'
        style={{
          clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
    </section>
  )
}
