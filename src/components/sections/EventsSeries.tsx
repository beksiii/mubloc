// components/events/EventSeries.tsx - FINAL SIMPLIFIED
'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Trophy, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'

const series = [
  {
    id: 'nalar',
    title: 'NALAR 2024',
    subtitle: 'Road to MUBLOC',
    desc: 'Coaching klinik dan sprint orienteering untuk persiapan menuju event utama MUBLOC.',
    date: 'April 2024',
    status: 'registration-open',
    badge: 'Registration Open',
    icon: <BookOpen className='w-6 h-6' />,
    features: [
      'Coaching Klinik (Workshop)',
      'Sprint Orienteering Competition',
      '4 Kategori Peserta',
      'Electronic Punching System',
    ],
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 'mubloc-2024',
    title: 'MUBLOC 2024',
    subtitle: 'Main Championship Event',
    desc: 'Event orienteering utama dengan berbagai kategori dan tantangan teknis tingkat nasional.',
    date: 'Juli 2024',
    status: 'coming-soon',
    badge: 'Coming Soon',
    icon: <Trophy className='w-6 h-6' />,
    features: [
      'Multiple Distance Categories',
      'Technical Forest Terrain',
      'National Ranking Points',
      'Professional Timing',
    ],
    color: 'from-orange-500 to-red-600',
  },
]

export default function EventSeries() {
  return (
    <section className='w-full py-12 md:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-10 md:mb-14 text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight'>
            Event{' '}
            <span
              className='text-transparent bg-clip-text'
              style={{
                background:
                  'linear-gradient(135deg, #3b82f6, #8a00c4, #ec4899, #3b82f6)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 8s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
              }}>
              Series
            </span>
          </h2>
          <p className='text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4'>
            Dari road to event hingga kompetisi utama. Mulai perjalanan
            orienteering Anda.
          </p>
        </motion.div>

        {/* Series Cards - Simple Overview */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {series.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                border-2 rounded-xl
                p-6 md:p-8
                flex flex-col
                bg-white
                shadow-lg hover:shadow-xl
                transition-all duration-300
                hover:scale-[1.01]
                ${
                  item.status === 'registration-open'
                    ? 'border-accent/30 hover:border-accent/60'
                    : 'border-gray-200 hover:border-gray-300'
                }
              `}>
              {/* Card Header with Icon */}
              <div className='flex items-start mb-6'>
                <div
                  className={`
                  p-3 rounded-xl mr-4
                  bg-linear-to-br ${item.color}
                  text-white
                `}>
                  {item.icon}
                </div>

                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>
                        {item.title}
                      </h3>
                      <p className='text-lg text-accent font-medium mt-1'>
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${
                        item.status === 'registration-open'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }
                    `}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Date */}
                  <div className='flex items-center mt-3 text-gray-500'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span className='text-sm'>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className='text-gray-600 mb-6'>{item.desc}</p>

              {/* Quick Features */}
              <div className='mb-8'>
                <h4 className='font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide'>
                  Highlights:
                </h4>
                <ul className='space-y-2'>
                  {item.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-gray-600'>
                      <span className='w-1.5 h-1.5 bg-accent rounded-full mr-3'></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Khusus NALAR, hint tentang 4 kategori */}
                {item.id === 'nalar' && (
                  <div className='mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100'>
                    <div className='flex items-center text-blue-700'>
                      <Users className='w-4 h-4 mr-2' />
                      <span className='text-sm font-medium'>
                        4 Kategori: Pelajar Putra/Putri • Umum Putra/Putri
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className='mt-auto'>
                <Button
                  variant={
                    item.status === 'registration-open' ? 'gradient' : 'outline'
                  }
                  size='lg'
                  href={`/events/${item.id}`}
                  className='w-full text-center py-3 text-base font-medium'>
                  {item.status === 'registration-open'
                    ? 'View Details & Register'
                    : 'View Event Details'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
