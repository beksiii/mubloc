import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='relative bg-linear-to-br from-custom-dark to-custom-surface text-custom-light overflow-hidden'>
      {/* Shape Divider - Match dengan Final CTA */}
      <div
        className='absolute top-0 left-0 w-full h-12 bg-linear-to-r from-accent to-pink'
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 20%, 0% 100%)',
        }}
      />

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute bottom-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl'></div>
        <div className='absolute top-10 right-10 w-40 h-40 bg-pink rounded-full blur-3xl'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-8 pt-20 pb-12 grid md:grid-cols-4 gap-14'>
        {/* Logo */}
        <div>
          <Link href='/'>
            <div className='relative mb-4'>
              <Image
                src='/images/mubloc-text-white.png'
                alt='MUBLOC Logo'
                width={200} // ↑ Lebih besar lagi
                height={85} // ↑ Lebih besar lagi
                className='cursor-pointer transition-all duration-300 w-32 md:w-36 lg:w-40 h-auto hover:scale-105'
                priority
              />
            </div>
          </Link>
          <p className='text-base text-custom-muted leading-relaxed font-semibold'>
            WORLD RANKING EVENT
          </p>
          <p className='text-custom-muted text-sm mt-4 leading-relaxed'>
            Kejuaraan orienteering internasional premium yang menantang
            kemampuan navigasi dan fisik.
          </p>
        </div>

        {/* Join Us */}
        <div>
          <h3 className='font-semibold text-base mb-6 uppercase tracking-wider text-accent border-l-4 border-accent pl-3'>
            Join Us
          </h3>
          <ul className='space-y-3 text-custom-muted'>
            <li>
              <Link
                href='/sponsorship'
                className='hover:text-accent transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Sponsorship
              </Link>
            </li>
            <li>
              <Link
                href='/organizers'
                className='hover:text-accent transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Race Organisers
              </Link>
            </li>
            <li>
              <Link
                href='/careers'
                className='hover:text-accent transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href='/volunteer'
                className='hover:text-accent transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Volunteer
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay In Touch */}
        <div>
          <h3 className='font-semibold text-base mb-6 uppercase tracking-wider text-pink border-l-4 border-pink pl-3'>
            Stay In Touch
          </h3>
          <ul className='space-y-3 text-custom-muted'>
            <li>
              <Link
                href='/faq'
                className='hover:text-pink transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-pink rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                FAQ and Help
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='hover:text-pink transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-pink rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href='/newsletter'
                className='hover:text-pink transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-pink rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                href='/media'
                className='hover:text-pink transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-pink rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Media Kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='font-semibold text-base mb-6 uppercase tracking-wider text-tertiary border-l-4 border-tertiary pl-3'>
            Follow Us
          </h3>
          <div className='flex items-center gap-4 text-xl mb-6'>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-custom-surface rounded-lg hover:bg-accent hover:text-custom-light'>
              <FaFacebookF />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-custom-surface rounded-lg hover:bg-pink hover:text-custom-light'>
              <FaInstagram />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-custom-surface rounded-lg hover:bg-tertiary hover:text-custom-light'>
              <FaTiktok />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-custom-surface rounded-lg hover:bg-accent hover:text-custom-light'>
              <FaYoutube />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-custom-surface rounded-lg hover:bg-tertiary hover:text-custom-light'>
              <FaLinkedinIn />
            </Link>
          </div>

          {/* Contact Info */}
          <div className='text-custom-muted text-sm space-y-2'>
            <div className='flex items-center'>
              <span className='text-accent mr-2'>📧</span>
              <span>info@mubloc.org</span>
            </div>
            <div className='flex items-center'>
              <span className='text-pink mr-2'>📍</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-custom-surface relative'>
        <div className='container mx-auto px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0'>
            <p className='text-custom-muted text-xs md:text-sm text-center md:text-left'>
              © 2025 MUBLOC. All rights reserved. MUBLOC® and World Ranking
              Event® are registered trademarks.
            </p>

            <div className='flex space-x-4 text-xs text-custom-muted'>
              <Link href='/privacy' className='hover:text-accent transition'>
                Privacy
              </Link>
              <span>•</span>
              <Link href='/terms' className='hover:text-pink transition'>
                Terms
              </Link>
              <span>•</span>
              <Link href='/cookies' className='hover:text-tertiary transition'>
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative M background */}
      <div className='absolute bottom-0 right-0 opacity-20 pointer-events-none select-none'>
        <div className='w-[300px] h-[300px] relative'>
          <Image
            src='/images/mubloc.png'
            alt='MUBLOC pattern'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </footer>
  )
}
