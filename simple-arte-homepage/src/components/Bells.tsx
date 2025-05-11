'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image144 from '@/images/144.png'

const Bells = () => {
  const images = [ image144 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 830 }
        height={ 407 }
        alt='Bell Image'
        style={{ objectFit: 'contain' }}
      />
    </Grid>
  )
  return (
    <Paper>
      <Grid container spacing={ 2 }>
        { imagesContainer }
      </Grid>
    </Paper>
  )
}

export default Bells