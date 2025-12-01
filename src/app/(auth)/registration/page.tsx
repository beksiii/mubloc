// app/(auth)/registration/page.tsx - UPDATED WITH PROPER LAYOUT
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import RegistrationForm from '@/components/registration/RegistrationForm'

// Type untuk kategori
interface CategoryData {
  name: string
  price: string
  earlyBirdPrice: string
  description: string
}

export default function RegistrationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { data: session, status } = useSession()

  const event = searchParams.get('event') // 'nalar'
  const category = searchParams.get('category') // 'pelajar-putra'

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Handle loading state
    if (status === 'unauthenticated') {
      router.push(
        `/auth/login?callbackUrl=/registration?event=${event}&category=${category}`
      )
      return
    }

    if (status === 'authenticated') {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [status, router, event, category])

  if (isLoading || status === 'loading') {
    return (
      <div className='min-h-screen flex items-center justify-center bg-white'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto'></div>
          <p className='mt-4 text-gray-600'>Memuat halaman pendaftaran...</p>
        </div>
      </div>
    )
  }

  // Data kategori berdasarkan ID
  const categoryData: Record<string, CategoryData> = {
    'pelajar-putra': {
      name: 'Pelajar Putra',
      price: 'Rp 75.000',
      earlyBirdPrice: 'Rp 60.000',
      description: 'Untuk siswa/pelajar laki-laki',
    },
    'pelajar-putri': {
      name: 'Pelajar Putri',
      price: 'Rp 75.000',
      earlyBirdPrice: 'Rp 60.000',
      description: 'Untuk siswa/pelajar perempuan',
    },
    'umum-putra': {
      name: 'Umum Putra',
      price: 'Rp 100.000',
      earlyBirdPrice: 'Rp 85.000',
      description: 'Untuk umum laki-laki',
    },
    'umum-putri': {
      name: 'Umum Putri',
      price: 'Rp 100.000',
      earlyBirdPrice: 'Rp 85.000',
      description: 'Untuk umum perempuan',
    },
  }

  const selectedCategory = category ? categoryData[category] : null

  return (
    <div className='min-h-screen bg-white'>
      {/* Simple Brand Header */}
      <div className='border-b py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {/* Logo */}
              <div className='relative w-10 h-10'>
                <Image
                  src='/images/mubloc-text-black.png'
                  alt='MUBLOC Logo'
                  fill
                  className='object-contain'
                />
              </div>
              <div>
                <h1 className='font-bold text-gray-900 text-lg'>
                  NALAR 2024 Registration
                </h1>
                <p className='text-sm text-gray-500'>Road to MUBLOC</p>
              </div>
            </div>
            <Link
              href={`/events/${event || 'nalar'}`}
              className='inline-flex items-center text-gray-600 hover:text-accent text-sm transition-colors group'>
              <ChevronLeft className='w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform' />
              Kembali ke Event
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className='bg-gray-50 py-3 border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-center gap-2'>
            {/* Step 1: Data Diri */}
            <div className='flex items-center'>
              <div className='w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium'>
                1
              </div>
              <div className='ml-2 text-sm font-medium text-accent hidden sm:block'>
                Data Diri
              </div>
            </div>

            {/* Line */}
            <div className='h-0.5 w-8 sm:w-12 bg-gray-300'></div>

            {/* Step 2: Pembayaran */}
            <div className='flex items-center'>
              <div className='w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-medium'>
                2
              </div>
              <div className='ml-2 text-sm text-gray-500 hidden sm:block'>
                Pembayaran
              </div>
            </div>

            {/* Line */}
            <div className='h-0.5 w-8 sm:w-12 bg-gray-300'></div>

            {/* Step 3: Konfirmasi */}
            <div className='flex items-center'>
              <div className='w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-medium'>
                3
              </div>
              <div className='ml-2 text-sm text-gray-500 hidden sm:block'>
                Konfirmasi
              </div>
            </div>
          </div>

          {/* Mobile Step Labels */}
          <div className='flex justify-between mt-2 sm:hidden text-xs text-center'>
            <span className='text-accent font-medium'>Data Diri</span>
            <span className='text-gray-500'>Pembayaran</span>
            <span className='text-gray-500'>Konfirmasi</span>
          </div>
        </div>
      </div>

      {/* Registration Content */}
      <section className='py-8 md:py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Page Header */}
          <div className='text-center mb-8 md:mb-12'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3'>
              Form Pendaftaran NALAR 2024
            </h1>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Lengkapi data diri Anda untuk melanjutkan ke pembayaran
            </p>
          </div>

          {/* Summary Card */}
          <div className='bg-linear-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 border border-accent/20'>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4'>
              Ringkasan Pendaftaran
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='font-semibold text-gray-700 mb-2'>Event</h3>
                <p className='text-lg font-bold text-gray-900'>NALAR 2024</p>
                <p className='text-gray-600'>Road to MUBLOC</p>
              </div>
              <div>
                <h3 className='font-semibold text-gray-700 mb-2'>Kategori</h3>
                {selectedCategory ? (
                  <>
                    <p className='text-lg font-bold text-gray-900'>
                      {selectedCategory.name}
                    </p>
                    <div className='flex items-baseline gap-2 mt-1'>
                      <span className='text-accent font-bold text-xl'>
                        {selectedCategory.earlyBirdPrice}
                      </span>
                      <span className='text-gray-400 line-through'>
                        {selectedCategory.price}
                      </span>
                    </div>
                    <p className='text-sm text-gray-500 mt-1'>
                      {selectedCategory.description}
                    </p>
                  </>
                ) : (
                  <p className='text-gray-500'>Belum memilih kategori</p>
                )}
              </div>
            </div>

            {/* Early Bird Notice */}
            <div className='mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg'>
              <div className='flex items-center text-yellow-800 text-sm'>
                <span className='font-medium'>⚡ Early Bird:</span>
                <span className='ml-2'>Harga khusus hingga 31 Maret 2024</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          {session?.user && (
            <RegistrationForm
              eventId={event || 'nalar'}
              category={category}
              user={session.user}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </section>

      {/* Simple Footer */}
      <div className='border-t py-6 mt-8 md:mt-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-500 text-sm space-y-2'>
            <p>
              © {new Date().getFullYear()} MUBLOC Orienteering Championship. All
              rights reserved.
            </p>
            <p className='text-xs'>
              Butuh bantuan?{' '}
              <a
                href='mailto:support@mubloc.id'
                className='text-accent hover:underline'>
                support@mubloc.id
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
