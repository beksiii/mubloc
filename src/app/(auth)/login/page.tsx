// src/app/(auth)/login/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi login
    console.log('Login attempt:', { email, password })
    router.push('/dashboard')
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center py-8'>
      <div className='max-w-md w-full'>
        <div className='text-center mb-8'>
          <Link href='/' className='inline-block mb-4'>
            <h1 className='text-2xl font-bold text-gray-800'>
              ORIENTEERING CHAMPIONSHIP 2024
            </h1>
          </Link>
          <h2 className='text-3xl font-bold text-gray-900'>Masuk ke Akun</h2>
          <p className='text-gray-600 mt-2'>Akses dashboard pendaftaran Anda</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-lg shadow-md p-6 space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Email *
            </label>
            <input
              type='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='email@example.com'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password *
            </label>
            <input
              type='password'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Masukkan password'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition'>
            Masuk
          </button>

          <div className='text-center pt-4 border-t'>
            <p className='text-gray-600'>
              Belum punya akun?{' '}
              <Link
                href='/register'
                className='text-green-600 hover:text-green-700 font-semibold'>
                Daftar di sini
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
