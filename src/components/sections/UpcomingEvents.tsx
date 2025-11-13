// components/sections/upcoming-events.tsx
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
      ELITE: 'bg-red-500',
      JUNIOR: 'bg-blue-500',
      BEGINNER: 'bg-green-500',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <section id='events' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Upcoming Events
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Jadwal kejuaraan orienteering MUBLOC 2026. Siapkan strategi dan
            kemampuan navigasi Anda!
          </p>
        </div>

        {/* Events Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {events.map(event => (
            <div
              key={event.id}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2'>
              {/* Event Image */}
              <div className='relative h-48 bg-linear-to-br from-lime-400 to-lime-600 overflow-hidden'>
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
                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors'>
                  {event.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                  {event.description}
                </p>

                {/* Event Details */}
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-gray-500'>
                    <span className='mr-3'>📅</span>
                    <span className='text-sm'>{event.date}</span>
                  </div>
                  <div className='flex items-center text-gray-500'>
                    <span className='mr-3'>📍</span>
                    <span className='text-sm'>{event.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex space-x-3'>
                  <button className='flex-1 bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-600 transition-colors text-sm font-semibold'>
                    Daftar Sekarang
                  </button>
                  <button className='flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-lime-400 hover:text-lime-600 transition-colors text-sm'>
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
