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
          color: '#357a3b', 
          fontSize: 'calc(0.5em + 1.0vw)',
          textAlign: 'right'
        }}>
          TEL: 0265-81-1239
        </Typography>
        <Typography noWrap sx={{ 
          fontFamily: '游明朝, Yu Mincho, Noto Serif JP', 
          color: '#357a3b', 
          fontSize: 'calc(0.5em + 1.0vw)',
          textAlign: 'right'
        }}>
          FAX: 0265-81-4512
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header