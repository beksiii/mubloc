'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  School,
  User,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import EventsHero from '@/components/sections/EventsHero'

const CATEGORIES = [
  {
    id: 'pelajar-putra',
    name: 'Pelajar Putra',
    icon: <School className='w-4 h-4 sm:w-5 sm:h-5' />,
    price: 'Rp 75.000',
    earlyBirdPrice: 'Rp 60.000',
  },
  {
    id: 'pelajar-putri',
    name: 'Pelajar Putri',
    icon: <School className='w-4 h-4 sm:w-5 sm:h-5' />,
    price: 'Rp 75.000',
    earlyBirdPrice: 'Rp 60.000',
  },
  {
    id: 'umum-putra',
    name: 'Umum Putra',
    icon: <User className='w-4 h-4 sm:w-5 sm:h-5' />,
    price: 'Rp 100.000',
    earlyBirdPrice: 'Rp 85.000',
  },
  {
    id: 'umum-putri',
    name: 'Umum Putri',
    icon: <User className='w-4 h-4 sm:w-5 sm:h-5' />,
    price: 'Rp 100.000',
    earlyBirdPrice: 'Rp 85.000',
  },
]

const COACHING_DATA = {
  title: 'Coaching Klinik & Sprint Orienteering',
  description:
    'Pelatihan intensif + kompetisi sprint distance untuk pemula dan berpengalaman.',
  date: '13-14 April 2024',
  location: 'Auditorium FTUI, Universitas Indonesia',
  trainer: 'Pelatih Nasional Orienteering Indonesia',
  topics: [
    'Dasar-dasar pembacaan peta',
    'Teknik penggunaan kompas',
    'Strategi route choice',
    'Electronic punching system',
    'Persiapan fisik dan mental',
  ],
  includes: [
    'Materi digital',
    'Sertifikat partisipasi',
    'Praktik lapangan',
    'Snack & minuman',
    'Coaching kit',
  ],
}

export default function NalarDetailPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isCategoriesHighlighted, setIsCategoriesHighlighted] = useState(false)

  const handleRegisterClick = (e: React.MouseEvent) => {
    if (!selectedCategory) {
      e.preventDefault()

      // Scroll to categories section
      document.getElementById('categories')?.scrollIntoView({
        behavior: 'smooth',
      })

      // Highlight categories section
      setIsCategoriesHighlighted(true)
      setTimeout(() => {
        setIsCategoriesHighlighted(false)
      }, 2000)
    }
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className='min-h-screen'>
      {/* Hero */}
      <EventsHero
        gradientTitle='NALAR'
        mainTitle='2025'
        subtitle='Coaching klinik dan sprint orienteering untuk persiapan menuju MUBLOC'
        ctaLabel='Daftar Sekarang'
        ctaHref={
          selectedCategory
            ? `/registration?event=nalar&category=${selectedCategory}`
            : '#categories'
        }
        gradientFirst
        logoSrc='/images/mublocb.svg'
      />

      {/* Konten Ringkas */}
      <section className='py-8 md:py-12 lg:py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12'>
          {/* Info Utama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-8'>
            <div className='text-center space-y-4'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                {COACHING_DATA.title}
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2'>
                {COACHING_DATA.description}
              </p>
            </div>

            {/* Info Grid - Seimbang */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto'>
              <InfoCard
                icon={<Calendar className='w-5 h-5 sm:w-6 sm:h-6' />}
                title='Tanggal'
                content={COACHING_DATA.date}
              />
              <InfoCard
                icon={<MapPin className='w-5 h-5 sm:w-6 sm:h-6' />}
                title='Lokasi'
                content={COACHING_DATA.location}
              />
              <InfoCard
                icon={<Users className='w-5 h-5 sm:w-6 sm:h-6' />}
                title='Pelatih'
                content={COACHING_DATA.trainer}
              />
            </div>
          </motion.div>

          {/* Materi & Bonus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Materi */}
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-900 text-lg sm:text-xl'>
                Materi yang Akan Dipelajari
              </h3>
              <div className='bg-linear-to-br from-blue-50 to-purple-50 p-5 sm:p-6 rounded-xl'>
                <ul className='space-y-3'>
                  {COACHING_DATA.topics.map((topic, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-gray-700 text-sm sm:text-base'>
                      <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 shrink-0' />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bonus */}
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-900 text-lg sm:text-xl'>
                Yang Anda Dapatkan
              </h3>
              <div className='space-y-3'>
                {COACHING_DATA.includes.map((item, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-3 bg-white p-4 sm:p-5 rounded-lg border shadow-sm'>
                    <CheckCircle className='w-5 h-5 text-green-500 shrink-0' />
                    <span className='text-gray-700 text-sm sm:text-base'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kategori Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-8'
            id='categories'>
            <div className='text-center space-y-4'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
                Pilih Kategori Peserta
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto text-sm sm:text-base'>
                Pilih kategori yang sesuai dengan Anda
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`
                    border rounded-xl p-4 sm:p-5 text-center transition-all duration-300
                    hover:shadow-lg focus:outline-none
                    ${
                      selectedCategory === cat.id
                        ? 'border-accent shadow-lg bg-linear-to-br from-blue-50 to-purple-50'
                        : 'border-gray-200 hover:border-accent'
                    }
                    ${
                      isCategoriesHighlighted && !selectedCategory
                        ? 'ring-2 ring-yellow-400'
                        : ''
                    }
                  `}>
                  <div className='flex justify-center mb-3'>
                    <div
                      className={`
                      p-2 sm:p-3 rounded-lg
                      ${
                        selectedCategory === cat.id
                          ? 'bg-linear-to-br from-blue-100 to-purple-100'
                          : 'bg-gray-100'
                      }
                    `}>
                      {cat.icon}
                    </div>
                  </div>
                  <h4 className='font-bold text-gray-900 mb-1 text-base sm:text-lg'>
                    {cat.name}
                  </h4>
                  <div className='space-y-1'>
                    <p className='text-accent font-semibold text-base sm:text-lg'>
                      {cat.earlyBirdPrice}
                    </p>
                    <p className='text-gray-400 line-through text-sm'>
                      {cat.price}
                    </p>
                  </div>

                  {/* Selected indicator */}
                  {selectedCategory === cat.id && (
                    <div className='mt-3 pt-3 border-t border-accent/30'>
                      <span className='inline-flex items-center text-sm text-green-600'>
                        <CheckCircle className='w-4 h-4 mr-1' /> Terpilih
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tombol Pendaftaran */}
          <div className='space-y-6 pt-4 md:pt-8' id='registration'>
            {/* Smart Button */}
            <div className='text-center'>
              <Button
                variant='gradient'
                size='lg'
                href={
                  selectedCategory
                    ? `/registration?event=nalar&category=${selectedCategory}`
                    : '#categories'
                }
                onClick={handleRegisterClick}
                className={`
                  w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4
                  shadow-lg hover:shadow-xl transition-all
                  ${!selectedCategory ? 'animate-pulse' : ''}
                  text-sm sm:text-base
                `}>
                {selectedCategory
                  ? `🎯 Daftar ${
                      CATEGORIES.find(c => c.id === selectedCategory)?.name
                    }`
                  : 'Pilih Kategori untuk Mendaftar'}
              </Button>
            </div>

            {/* Selected Category Info - DIBAWAH BUTTON */}
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-center'>
                <div className='inline-flex items-center gap-2 bg-linear-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-lg border border-green-200'>
                  <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-green-600' />
                  <span className='text-green-800 font-medium text-sm sm:text-base'>
                    Kategori terpilih:{' '}
                    <span className='font-semibold'>
                      {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                    </span>
                  </span>
                </div>
              </motion.div>
            )}

            {/* Helper text */}
            {!selectedCategory && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center text-sm text-gray-500'>
                ⚠️ Silakan pilih kategori peserta terlebih dahulu
              </motion.p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

/* ------------------ Sub-components ------------------ */
const InfoCard = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: string
}) => (
  <div className='flex flex-col items-center text-center p-4 sm:p-5 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow'>
    <div className='text-accent mb-3'>{icon}</div>
    <div>
      <p className='font-semibold text-gray-900 text-sm sm:text-base mb-1'>
        {title}
      </p>
      <p className='text-gray-600 text-xs sm:text-sm leading-tight'>
        {content}
      </p>
    </div>
  </div>
)
