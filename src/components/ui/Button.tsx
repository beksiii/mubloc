'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  href?: string
  className?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  variant = 'primary',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-5 py-2.5 rounded-md font-medium transition-all duration-200 inline-block'

  const variants = {
    primary: 'bg-primary text-black hover:brightness-90',
    secondary:
      'border border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white',
  }

  const combined = clsx(baseStyles, variants[variant], className)

  // Jika ada href → render Link
  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    )
  }

  // Jika tidak → render button biasa
  return (
    <button className={combined} {...props}>
      {children}
    </button>
  )
}
