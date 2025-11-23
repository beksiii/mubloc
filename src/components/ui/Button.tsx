'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'pink'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'btn font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2 focus:ring-offset-custom-dark inline-flex items-center justify-center'

  // Pattern yang lebih smooth dengan xl breakpoint
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm md:px-5 md:py-3 md:text-base lg:px-6',
    lg: 'px-5 py-3 text-base md:px-6 md:py-3.5 md:text-lg lg:px-7 lg:py-4 xl:px-8 xl:text-xl',
  }

  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    gradient: 'btn-gradient',
    pink: 'btn-pink',
  }

  const buttonClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  // Jika ada href, render sebagai Link
  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }

  // Default button
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
