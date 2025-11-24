'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
      color: 'from-tertiary to-cyan-500',
    },
    {
      number: `${counters.countries}+`,
      label: 'Countries',
      icon: '🌍',
      color: 'from-accent to-pink',
    },
    {
      number: `$${counters.prize}k`,
      label: 'Prize Pool',
      icon: '💰',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      number: `${counters.categories}`,
      label: 'Competition Categories',
      icon: '🏆',
      color: 'from-purple-500 to-accent',
    },
  ]

  return (
    <section className='relative pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 overflow-hidden'>
      {/* Background Aurora SAMA PERSIS seperti di Hero */}
      <div className='absolute inset-0 bg-aurora' />

      {/* Floating Orbs - lanjutan dari hero */}
      <div className='absolute inset-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          className='absolute -top-10 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl'
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
          className='absolute top-10 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl'
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
          className='absolute top-20 left-1/2 w-56 h-56 bg-pink/10 rounded-full blur-2xl'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16 lg:mb-20'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6'>
            BY THE{' '}
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
              NUMBER
            </motion.span>
          </h2>
          <p className='text-base md:text-lg lg:text-xl text-custom-muted max-w-2xl mx-auto px-4'>
            The scale of Southeast Asia&apos;s premier orienteering championship
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='relative group'>
              <div className='bg-custom-surface/80 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-tertiary/50 transition-all duration-300 group-hover:-translate-y-1 md:group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-tertiary/10'>
                {/* Icon */}
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-linear-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-3 md:mb-4 mx-auto shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Numbers */}
                <div className='text-center'>
                  <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-xs md:text-sm text-custom-muted font-medium tracking-wide leading-tight'>
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-r ${stat.color} rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='flex justify-center mt-12 md:mt-16'>
          <div className='w-24 md:w-32 h-1 bg-linear-to-r from-tertiary to-accent rounded-full'></div>
        </motion.div>

        {/* Footer Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-8 md:mt-12'>
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 text-custom-muted text-sm md:text-base'>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-tertiary rounded-full'></div>
              <span>World Ranking Event</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-accent rounded-full'></div>
              <span>International Standards</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-pink rounded-full'></div>
              <span>Professional Organization</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
