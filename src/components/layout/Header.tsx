'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: session } = useSession()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/results', label: 'Results' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm border-b' : 'bg-transparent'
      }`}>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-8 py-4 flex items-center justify-between relative'>
        {/* Logo */}
        <Link
          href='/'
          className={`text-xl font-bold transition-colors ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}>
          🧭 MUBLOC
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-6 lg:space-x-8 xl:space-x-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium text-sm lg:text-base xl:text-lg ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-lime-300'
              }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right section */}
        <div className='flex items-center space-x-3 md:space-x-4 lg:space-x-5'>
          {session ? (
            <div className='relative' ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='focus:outline-none'>
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                )}
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50'>
                    <div className='px-4 py-2 text-gray-700 font-medium'>
                      {session.user?.name || 'User'}
                    </div>
                    <button
                      onClick={() => {
                        signOut()
                        setIsDropdownOpen(false)
                      }}
                      className='w-full text-left px-4 py-2 hover:bg-gray-100 font-medium text-gray-700'>
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Button
              variant='primary'
              onClick={() => signIn('google')}
              className={`hidden md:inline-flex text-sm lg:text-base ${
                isScrolled
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-lime-400 hover:bg-lime-300 text-black'
              }`}>
              Login with Google
            </Button>
          )}

          {/* Mobile Hamburger */}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute top-full left-0 right-0 mt-4 border-t pt-4 pb-4 text-center rounded-lg shadow-lg transition-colors ${
                isScrolled
                  ? 'bg-white border-gray-200'
                  : 'bg-black/80 border-white/20'
              }`}>
              <nav className='flex flex-col space-y-4'>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}

                {!session && (
                  <button
                    onClick={() => {
                      signIn('google')
                      setIsMenuOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      isScrolled
                        ? 'bg-gray-800 text-white'
                        : 'bg-lime-400 text-black'
                    }`}>
                    Login with Google
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
