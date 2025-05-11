'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image31 from "@/images/31.png"
import image45 from "@/images/45.png"
import image64 from "@/images/64.png"
import image65 from "@/images/65.png"
import image67 from "@/images/67.png"
import image76 from "@/images/76.png"
import image77_1 from "@/images/77-1.png"
import image77_2 from "@/images/77-2.png"

const BuddhistAltars = () => {
  const images = [ image31, image45, image64, image65, image67, image76, image77_1, image77_2 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 450 }
        height={ 450 }
        alt='Buddhist-Altar Image'
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

export default BuddhistAltars