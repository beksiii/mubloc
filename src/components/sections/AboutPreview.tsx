// components/sections/about-preview.tsx - FIXED VERSION
'use client'

import Button from '@/components/ui/Button'

export default function AboutPreview() {
  return (
    <section className='py-20 bg-white relative overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 right-10 w-64 h-64 bg-lime-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 container mx-auto px-6'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Visual Section - Keren */}
          <div className='md:order-1'>
            <div className='relative group'>
              {/* Main Visual Card */}
              <div className='rounded-3xl shadow-2xl h-80 relative overflow-hidden bg-white'></div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full shadow-lg'></div>
            </div>
          </div>

          {/* Text Section - Keren */}
          <div className='md:order-2'>
            {/* Section Badge */}
            <div className='inline-flex items-center space-x-2 bg-lime-50 border border-lime-200 rounded-full px-4 py-2 mb-6'>
              <div className='w-2 h-2 bg-lime-400 rounded-full'></div>
              <span className='text-lime-700 text-sm font-medium'>
                WORLD CLASS EVENT
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight'>
              What is <span className='text-lime-500'>MUBLOC</span>?
            </h2>

            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              <span className='font-semibold text-lime-600'>MUBLOC</span>{' '}
              (Makopala Universitas Budi Luhur Orienteering Championship) is
              Southeast Asia&apos;s premier international orienteering
              competition, designed to challenge the world&apos;s best athletes
              in navigation, strategy, and endurance.
            </p>

            <p className='text-gray-600 mb-8 leading-relaxed'>
              As an official{' '}
              <span className='font-semibold'>IOF World Ranking Event</span>,
              MUBLOC offers competitors the opportunity to earn global ranking
              points while competing in professionally organized, world-class
              navigation challenges across diverse terrains.
            </p>

            {/* Key Highlights */}
            <div className='grid grid-cols-2 gap-4 mb-8'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center'>
                  <span className='text-lime-600 text-lg'>🌍</span>
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>
                    International
                  </div>
                  <div className='text-gray-500 text-sm'>30+ Countries</div>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center'>
                  <span className='text-lime-600 text-lg'>🏆</span>
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>
                    IOF Certified
                  </div>
                  <div className='text-gray-500 text-sm'>World Ranking</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                href='/about'
                variant='primary'
                className='bg-lime-500 hover:bg-lime-400 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all'>
                Discover MUBLOC 2026
              </Button>
              <Button
                href='/events'
                variant='secondary'
                className='border-gray-300 text-gray-700 hover:border-lime-400 hover:text-lime-600 font-semibold'>
                View Categories
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-lime-400 to-transparent opacity-50'></div>
    </section>
  )
}
