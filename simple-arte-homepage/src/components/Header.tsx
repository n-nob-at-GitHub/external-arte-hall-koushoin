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
    <Grid container direction='row' wrap='nowrap' spacing={ 2 }>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <Image
          src={ logo.src }
          width={ 220 }
          height={ 72 }
          alt='Logo Image'
          style={{ objectFit: 'contain' }}
        />
      </Grid>
      <Grid size={{ xs: false, sm: 1, md: 1 }}></Grid>
      <Grid size={{ xs: 6, sm: 7, md: 8 }}>
        <Typography noWrap sx={{ 
          fontFamily: '游明朝, Yu Mincho, Noto Serif JP', 
          color: '#7d5a1e', 
          fontSize: { xs: '1.2rem', sm: 'calc(0.4em + 1.0vw)', md: '1rem' },
          textAlign: 'right',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          365日 24時間いつでも受付
        </Typography>
        <Typography noWrap sx={{ 
          fontFamily: '游明朝, Yu Mincho, Noto Serif JP', 
          color: '#357a3b', 
          fontSize: { xs: '1.4rem', sm: 'calc(0.5em + 1.6vw)', md: '1.2rem' },
          textAlign: 'right',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          TEL: 0265-81-1239
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header