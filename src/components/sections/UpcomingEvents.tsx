// components/sections/upcoming-events.tsx
'use client'
import { motion } from 'framer-motion'

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'MUBLOC World Ranking Event 2026',
      date: '24 Oktober 2026',
      location: 'Jakarta International Circuit',
      category: 'ELITE',
      status: 'upcoming',
      image: '/images/events/elite-2026.jpg',
      description:
        'Kejuaraan orienteering internasional dengan sistem poin ranking resmi IOF',
    },
    {
      id: 2,
      title: 'MUBLOC Junior Championship',
      date: '25 Oktober 2026',
      location: 'Taman Menteng, Jakarta',
      category: 'JUNIOR',
      status: 'upcoming',
      image: '/images/events/junior-2026.jpg',
      description: 'Kompetisi untuk atlet muda usia di bawah 21 tahun',
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      ELITE: 'bg-accent',
      JUNIOR: 'bg-tertiary',
      BEGINNER: 'bg-green-500',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <section id='events' className='py-20 bg-white relative -mt-1'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary leading-tight'>
            UPCOMING{' '}
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
              EVENT
            </motion.span>
          </h2>
          <p className='text-lg sm:text-xl text-custom-muted max-w-2xl mx-auto'>
            Jadwal kejuaraan orienteering MUBLOC 2026. Siapkan strategi dan
            kemampuan navigasi Anda!
          </p>
        </div>

        {/* Events Grid */}
        <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
          {events.map(event => (
            <div
              key={event.id}
              className='card-cyber overflow-hidden group hover:-translate-y-2'>
              {/* Event Image */}
              <div className='relative h-48 bg-linear-to-br from-primary to-accent overflow-hidden'>
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors'></div>
                <div className='absolute top-4 left-4'>
                  <span
                    className={`${getCategoryColor(
                      event.category
                    )} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.category}
                  </span>
                </div>
                <div className='absolute bottom-4 left-4'>
                  <span className='bg-black/70 text-white px-3 py-1 rounded-lg text-sm'>
                    {event.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-custom-dark mb-3 group-hover:text-accent transition-colors'>
                  {event.title}
                </h3>
                <p className='text-custom-muted mb-4 text-sm leading-relaxed'>
                  {event.description}
                </p>

                {/* Event Details */}
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-custom-muted'>
                    <span className='mr-3'>📅</span>
                    <span className='text-sm'>{event.date}</span>
                  </div>
                  <div className='flex items-center text-custom-muted'>
                    <span className='mr-3'>📍</span>
                    <span className='text-sm'>{event.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex space-x-3'>
                  <button className='flex-1 bg-linear-to-r from-primary to-accent text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm font-semibold'>
                    Daftar Sekarang
                  </button>
                  <button className='flex-1 border border-gray-300 text-custom-muted py-2 px-4 rounded-lg hover:border-accent hover:text-accent transition-colors text-sm'>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
