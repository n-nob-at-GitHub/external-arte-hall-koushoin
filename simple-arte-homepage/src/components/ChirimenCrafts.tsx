'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import image154 from '@/images/154.png'

const ChirimenCrafts = () => {
  const images = [ image154 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 935 }
        height={ 616 }
        alt='Chirimen-Craft Image'
        style={{ objectFit: 'contain' }}
      />
    </Grid>
  )
  return (
    <>
      <Typography noWrap sx={{ 
        fontFamily: '游明朝, Yu Mincho, Noto Serif JP', 
        color: '#ff5a1e', 
        fontSize: 'calc(0.4em + 1.0vw)',
        textAlign: 'left'
      }}>
        ※シーズン商品は売り切れの場合がございます。ご了承ください。
      </Typography>
          <Paper>
      <Grid container spacing={ 2 }>
        { imagesContainer }
      </Grid>
    </Paper>
    </>
  )
}

export default ChirimenCrafts