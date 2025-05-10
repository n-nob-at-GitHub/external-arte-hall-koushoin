'use client'
import Image from 'next/image'
import {
  Box,
  Grid,
  Paper,
} from '@mui/material'
import image154 from "@/images/154.png"

const ChirimenCrafts = () => {
  const images = [ image154 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 935 }
        height={ 616 }
        alt='Chirimen-Craft Image'
        style={{ objectFit: "contain" }}
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

export default ChirimenCrafts