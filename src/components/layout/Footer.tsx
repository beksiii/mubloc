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
    <footer className='relative bg-linear-to-br from-gray-900 to-black text-white overflow-hidden'>
      {/* Shape Divider - Match dengan Final CTA */}
      <div
        className='absolute top-0 left-0 w-full h-12 bg-linear-to-r from-lime-400 to-lime-500'
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 20%, 0% 100%)',
        }}
      />

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute bottom-10 left-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl'></div>
        <div className='absolute top-10 right-10 w-40 h-40 bg-lime-500 rounded-full blur-3xl'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-8 pt-20 pb-12 grid md:grid-cols-4 gap-14'>
        {/* Logo */}
        <div>
          <h2 className='text-5xl font-extrabold mb-4 tracking-tight text-lime-400'>
            MUBLOC
          </h2>
          <p className='text-base text-gray-400 leading-relaxed font-semibold'>
            WORLD RANKING EVENT
          </p>
          <p className='text-gray-500 text-sm mt-4 leading-relaxed'>
            Kejuaraan orienteering internasional premium yang menantang
            kemampuan navigasi dan fisik.
          </p>
        </div>

        {/* Join Us */}
        <div>
          <h3 className='font-semibold text-base mb-6 uppercase tracking-wider text-lime-400 border-l-4 border-lime-400 pl-3'>
            Join Us
          </h3>
          <ul className='space-y-3 text-gray-400'>
            <li>
              <Link
                href='/sponsorship'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Sponsorship
              </Link>
            </li>
            <li>
              <Link
                href='/organizers'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Race Organisers
              </Link>
            </li>
            <li>
              <Link
                href='/careers'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href='/volunteer'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Volunteer
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay In Touch */}
        <div>
          <h3 className='font-semibold text-base mb-6 uppercase tracking-wider text-lime-400 border-l-4 border-lime-400 pl-3'>
            Stay In Touch
          </h3>
          <ul className='space-y-3 text-gray-400'>
            <li>
              <Link
                href='/faq'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                FAQ and Help
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href='/newsletter'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                href='/media'
                className='hover:text-lime-400 transition-all hover:translate-x-1 flex items-center group'>
                <span className='w-1 h-1 bg-lime-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                Media Kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='font-semibold text-base mb-6 uppercase tracking-wider text-lime-400 border-l-4 border-lime-400 pl-3'>
            Follow Us
          </h3>
          <div className='flex items-center gap-4 text-xl mb-6'>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-gray-800 rounded-lg hover:bg-lime-400 hover:text-gray-900'>
              <FaFacebookF />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-gray-800 rounded-lg hover:bg-lime-400 hover:text-gray-900'>
              <FaInstagram />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-gray-800 rounded-lg hover:bg-lime-400 hover:text-gray-900'>
              <FaTiktok />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-gray-800 rounded-lg hover:bg-lime-400 hover:text-gray-900'>
              <FaYoutube />
            </Link>
            <Link
              href='#'
              className='transition-all duration-200 hover:scale-110 p-2 bg-gray-800 rounded-lg hover:bg-lime-400 hover:text-gray-900'>
              <FaLinkedinIn />
            </Link>
          </div>

          {/* Contact Info */}
          <div className='text-gray-400 text-sm space-y-2'>
            <div className='flex items-center'>
              <span className='text-lime-400 mr-2'>📧</span>
              <span>info@mubloc.org</span>
            </div>
            <div className='flex items-center'>
              <span className='text-lime-400 mr-2'>📍</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-800 relative'>
        <div className='container mx-auto px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0'>
            <p className='text-gray-500 text-xs md:text-sm text-center md:text-left'>
              © 2025 MUBLOC. All rights reserved. MUBLOC® and World Ranking
              Event® are registered trademarks.
            </p>

            <div className='flex space-x-4 text-xs text-gray-500'>
              <Link href='/privacy' className='hover:text-lime-400 transition'>
                Privacy
              </Link>
              <span>•</span>
              <Link href='/terms' className='hover:text-lime-400 transition'>
                Terms
              </Link>
              <span>•</span>
              <Link href='/cookies' className='hover:text-lime-400 transition'>
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
