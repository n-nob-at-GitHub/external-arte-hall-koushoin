'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image152_1 from '@/images/152-1.png'
import image152_2 from '@/images/152-2.png'

const Lanterns = () => {
  const images = [ image152_1, image152_2 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 600 }
        height={ 600 }
        alt='Lantern Image'
        style={{ objectFit: 'contain' }}
      />
    </Grid>
  )
  return (
    <Paper>
      <Grid container spacing={ 75 }>
        { imagesContainer }
      </Grid>
    </Paper>
  )
}

export default Lanterns