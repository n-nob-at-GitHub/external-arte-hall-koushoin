'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo.svg'

const Header = () => {
  return (
    <a
      href='https://arte-info.com/'
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={ logo.src }
        width={ 220 }
        height={ 72 }
        alt='Logo Image'
        style={{ objectFit: 'contain' }}
      />
    </a>
  )
}

export default Header