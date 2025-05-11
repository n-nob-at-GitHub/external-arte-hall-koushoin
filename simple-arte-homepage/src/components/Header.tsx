'use client'
import React from 'react'
import Image from 'next/image'
import {
  Grid,
  Typography
} from '@mui/material'
import logo from '@/images/logo.svg'

const Header = () => {
  return (
    <Grid container spacing={ 2 }>
      <Grid size={ 3 }>
        <Image
          src={ logo.src }
          width={ 220 }
          height={ 72 }
          alt='Logo Image'
          style={{ objectFit: 'contain' }}
        />
      </Grid>
      <Grid size={ 6 }></Grid>
      <Grid size={ 3 }>
        <Typography noWrap sx={{ 
          fontFamily: '游明朝, Yu Mincho, Noto Serif JP', 
          color: '#7d5a1e', 
          fontSize: 'calc(0.4em + 1.0vw)',
          textAlign: 'right'
        }}>
          365日 24時間いつでも受付
        </Typography>
        <Typography noWrap sx={{ 
          fontFamily: '游明朝, Yu Mincho, Noto Serif JP', 
          color: '#357a3b', 
          fontSize: 'calc(0.5em + 1.6vw)',
          textAlign: 'right'
        }}>
          TEL: 0265-81-1239
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header