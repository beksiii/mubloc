'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm border-b' : 'bg-transparent'
      }`}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo - Berubah warna berdasarkan scroll */}
          <Link
            href='/'
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>
            🧭 MUBLOC
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              href='/'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-lime-300'
              }`}>
              Home
            </Link>
            <Link
              href='/events'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-lime-300'
              }`}>
              Events
            </Link>
            <Link
              href='/results'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-lime-300'
              }`}>
              Results
            </Link>
            <Link
              href='/about'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-lime-300'
              }`}>
              About
            </Link>
            <Link
              href='/contact'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-lime-300'
              }`}>
              Contact
            </Link>
          </nav>

          {/* Right Section */}
          <div className='flex items-center space-x-4'>
            {/* Admin Login */}
            <Link
              href='/admin/login'
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-500 hover:text-gray-700 text-sm hidden lg:block'
                  : 'text-white/70 hover:text-lime-300 text-sm hidden lg:block'
              }`}
              title='Admin Login'>
              Admin
            </Link>

            {/* Register Button */}
            <Button
              variant='primary'
              href='/registration'
              className={
                isScrolled ? '' : 'bg-lime-400 hover:bg-lime-300 text-black'
              }>
              Register Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2'
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className={`w-6 h-6 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                fill='none'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 border-t pt-4 pb-4 text-center ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
            <nav className='flex flex-col space-y-4'>
              <Link
                href='/'
                className={`py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href='/events'
                className={`py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
              <Link
                href='/results'
                className={`py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Results
              </Link>
              <Link
                href='/about'
                className={`py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href='/contact'
                className={`py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href='/admin/login'
                className={`py-2 ${
                  isScrolled ? 'text-gray-500' : 'text-white/70'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Admin Login
              </Link>
              <Link
                href='/registration'
                className={`px-4 py-2 rounded-lg text-center font-semibold ${
                  isScrolled
                    ? 'bg-orange-500 text-white'
                    : 'bg-lime-400 text-black'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Register Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
