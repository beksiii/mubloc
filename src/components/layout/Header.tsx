'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// ✅ Komponen NavLink dengan active indicator
const NavLink = ({
  href,
  label,
  isScrolled,
}: {
  href: string
  label: string
  isScrolled: boolean
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        relative
        transition-colors 
        font-medium 
        text-sm 
        lg:text-base
        pb-1
        ${
          isScrolled
            ? isActive
              ? 'text-accent'
              : 'text-gray-700 hover:text-accent'
            : isActive
            ? 'text-accent'
            : 'text-white hover:text-accent'
        }
      `}>
      {label}

      {/* Active Indicator Line */}
      {isActive && (
        <motion.div
          layoutId='activeIndicator'
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent`}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
    </Link>
  )
}

// ✅ Mobile NavLink dengan active indicator
const MobileNavLink = ({
  href,
  label,
  isScrolled,
  onClick,
}: {
  href: string
  label: string
  isScrolled: boolean
  onClick: () => void
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative
        py-2
        px-4
        transition-colors
        font-medium
        ${
          isScrolled
            ? isActive
              ? 'text-accent bg-accent/10 rounded-lg'
              : 'text-gray-700 hover:text-accent hover:bg-gray-50 rounded-lg'
            : isActive
            ? 'text-accent bg-white/10 rounded-lg'
            : 'text-white hover:text-accent hover:bg-white/5 rounded-lg'
        }
      `}>
      {label}

      {/* Active Indicator untuk mobile */}
      {isActive && (
        <motion.div
          layoutId='mobileActiveIndicator'
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-accent rounded-full`}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
    </Link>
  )
}

// ✅ LoginButton dengan gradient dan logo Google asli
const LoginButton = ({
  isMobile = false,
  onClick,
}: {
  isMobile?: boolean
  onClick?: () => void
}) => (
  <button
    onClick={onClick}
    className={`
      ${
        isMobile
          ? 'mx-4 px-4 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-3 w-[calc(100%-2rem)] transition-all duration-300'
          : 'inline-flex items-center gap-3 text-sm px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg font-semibold transition-all duration-300'
      }
      bg-linear-to-r from-primary to-accent
      text-white
      shadow-lg
      hover:shadow-xl
      hover:scale-105
      active:scale-95
    `}>
    {/* Logo Google dengan warna putih */}
    <svg className='w-4 h-4 md:w-5 md:h-5' viewBox='0 0 24 24'>
      <path
        fill='#ffffff'
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
      />
      <path
        fill='#ffffff'
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
      />
      <path
        fill='#ffffff'
        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
      />
      <path
        fill='#ffffff'
        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
      />
    </svg>
    <span className='hidden sm:inline'>Login with Google</span>
    <span className='sm:hidden'>Login</span>
  </button>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: session } = useSession()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown dan mobile menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Close dropdown user
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false)
      }

      // Close mobile menu jika klik di luar
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // ✅ Fix: Gunakan useEffect yang proper untuk close menu pada route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]) // Hanya pathname sebagai dependency

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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo - Kiri */}
          <Link href='/' className='shrink-0'>
            <div className='relative'>
              <Image
                src='/images/mubloc-text-white.png'
                alt='MUBLOC Logo'
                width={120}
                height={50}
                className={`
                  cursor-pointer 
                  transition-all 
                  duration-300 
                  w-24 sm:w-28 md:w-32 lg:w-36
                  h-auto
                  ${isScrolled ? 'opacity-0 scale-95' : 'opacity-100'}
                  hover:scale-105
                `}
                priority
              />
              <Image
                src='/images/mubloc-text-black.png'
                alt='MUBLOC Logo'
                width={120}
                height={50}
                className={`
                  cursor-pointer 
                  transition-all 
                  duration-300 
                  w-24 sm:w-28 md:w-32 lg:w-36
                  h-auto
                  absolute top-0 left-0
                  ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  hover:scale-105
                `}
              />
            </div>
          </Link>

          {/* Desktop Navigation - Tengah */}
          <nav className='hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='flex space-x-6 lg:space-x-8 xl:space-x-10'>
              {navLinks.map(link => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isScrolled={isScrolled}
                />
              ))}
            </div>
          </nav>

          {/* Right Section - Kanan */}
          <div className='flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 z-10'>
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
                      className='rounded-full w-8 h-8 md:w-9 md:h-9'
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
              <LoginButton onClick={() => signIn('google')} />
            )}

            {/* Mobile Hamburger */}
            <button
              className='md:hidden p-2'
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute top-full left-0 right-0 mt-2 border-t pt-4 pb-4 rounded-lg shadow-lg transition-colors ${
                isScrolled
                  ? 'bg-white border-gray-200'
                  : 'bg-black/80 border-white/20'
              }`}>
              <nav className='flex flex-col space-y-2'>
                {navLinks.map(link => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    isScrolled={isScrolled}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}

                {!session && (
                  <LoginButton
                    isMobile
                    onClick={() => {
                      signIn('google')
                      setIsMenuOpen(false)
                    }}
                  />
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
