'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image117 from '@/images/117.png'

const PhotoFrames = () => {
  const images = [ image117 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 712 }
        height={ 765 }
        alt='Photo-Frame Image'
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

export default PhotoFrames