'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image150 from '@/images/150.png'
import image151 from '@/images/151.png'

const Rosaries = () => {
  const images = [ image150, image151 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 600 }
        height={ 600 }
        alt='Rosary Image'
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

export default Rosaries