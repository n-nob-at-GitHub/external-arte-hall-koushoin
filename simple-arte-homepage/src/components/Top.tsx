'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image00 from '@/images/00.png'

const Top = () => {
  const images = [ image00 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 1281 }
        height={ 850 }
        alt='Top Image'
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

export default Top