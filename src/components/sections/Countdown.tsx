'use client'

import { useEffect, useState, useCallback } from 'react'

export default function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date()
    if (difference <= 0) return null

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  if (!timeLeft) return null

  return (
    <div
      className='
        flex 
        gap-4 sm:gap-8 md:gap-12 
        text-center font-mono 
        justify-center
      '>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className='flex flex-col items-center'>
          {/* Ganti warna dari lime-400 ke warna tema */}
          <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-tertiary'>
            {value.toString().padStart(2, '0')}
          </div>
          <div className='uppercase text-xs sm:text-sm text-custom-muted'>
            {unit}
          </div>
        </div>
      ))}
    </div>
  )
}
