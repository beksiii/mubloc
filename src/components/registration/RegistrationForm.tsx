// components/registration/RegistrationForm.tsx - FIXED
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

// Type untuk props
interface CategoryData {
  name: string
  price: string
  earlyBirdPrice: string
  description: string
}

interface UserData {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
}

interface RegistrationFormProps {
  eventId: string
  category: string | null
  user: UserData | null
  selectedCategory: CategoryData | null
}

export default function RegistrationForm({
  eventId,
  category,
  user,
  selectedCategory,
}: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    institution: '',
    idCardNumber: '',
    shirtSize: 'M',
    emergencyContact: '',
    medicalNotes: '',
    agreeTerms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId,
          category,
          userId: user?.id,
          userEmail: user?.email,
          ...formData,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Redirect to payment page
        window.location.href = `/payment/${data.registrationId}`
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className='space-y-8'>
      {/* Personal Information */}
      <div className='bg-white p-6 md:p-8 rounded-2xl border shadow-sm'>
        <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
          <User className='w-5 h-5' />
          Informasi Pribadi
        </h3>

        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Nama Lengkap *
            </label>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Email *
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              disabled
              className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50'
            />
            <p className='text-xs text-gray-500 mt-1'>
              Email dari akun Google Anda
            </p>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Nomor WhatsApp *
            </label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='0812-3456-7890'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
            />
          </div>

          {category?.includes('pelajar') ? (
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Sekolah/Universitas *
              </label>
              <input
                type='text'
                name='institution'
                value={formData.institution}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
              />
            </div>
          ) : (
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Institusi (Opsional)
              </label>
              <input
                type='text'
                name='institution'
                value={formData.institution}
                onChange={handleChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className='bg-white p-6 md:p-8 rounded-2xl border shadow-sm'>
        <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
          <AlertCircle className='w-5 h-5' />
          Informasi Tambahan
        </h3>

        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Ukuran Kaos *
            </label>
            <select
              name='shirtSize'
              value={formData.shirtSize}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'>
              <option value='S'>S</option>
              <option value='M'>M</option>
              <option value='L'>L</option>
              <option value='XL'>XL</option>
              <option value='XXL'>XXL</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Kontak Darurat *
            </label>
            <input
              type='text'
              name='emergencyContact'
              value={formData.emergencyContact}
              onChange={handleChange}
              required
              placeholder='Nama & Nomor Telepon'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Catatan Kesehatan (Alergi, Kondisi Khusus, dll)
            </label>
            <textarea
              name='medicalNotes'
              value={formData.medicalNotes}
              onChange={handleChange}
              rows={3}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
              placeholder='Contoh: Alergi seafood, asma, dll'
            />
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className='bg-linear-to-br from-blue-50 to-purple-50 p-6 rounded-xl border'>
        <div className='flex items-start gap-3'>
          <input
            type='checkbox'
            id='agreeTerms'
            name='agreeTerms'
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
            className='mt-1'
          />
          <label htmlFor='agreeTerms' className='text-sm text-gray-700'>
            Saya menyetujui{' '}
            <a
              href='/terms'
              className='text-accent hover:underline font-medium'>
              Syarat & Ketentuan
            </a>{' '}
            dan{' '}
            <a
              href='/privacy'
              className='text-accent hover:underline font-medium'>
              Kebijakan Privasi
            </a>{' '}
            yang berlaku. Saya juga menyatakan bahwa informasi yang saya berikan
            adalah benar dan siap mengikuti seluruh kegiatan dengan penuh
            tanggung jawab.
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className='text-center pt-4'>
        <Button
          type='submit'
          variant='gradient'
          size='lg' // Ganti dari "xl" ke "lg" karena Button component tidak support xl
          disabled={isSubmitting || !formData.agreeTerms}
          className='px-12 py-4 text-lg shadow-xl hover:shadow-2xl disabled:opacity-50'>
          {isSubmitting ? (
            <>
              <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
              Memproses...
            </>
          ) : (
            `Lanjutkan Pembayaran - ${
              selectedCategory?.earlyBirdPrice || 'Rp 0'
            }`
          )}
        </Button>

        <p className='text-sm text-gray-500 mt-3'>
          Anda akan diarahkan ke halaman pembayaran setelah mengisi form ini
        </p>
      </div>
    </motion.form>
  )
}
