'use client'
import Image from 'next/image'
import {
  Grid,
  Paper,
} from '@mui/material'
import image156 from "@/images/156.png"
import image157 from "@/images/157.png"

const MemorialFlowers = () => {
  const images = [ image156, image157 ];
  const imagesContainer = images.map((image, index) =>
    <Grid size={ 4 } key={ index }>
      <Image
        src={ image.src }
        width={ 613 }
        height={ 820 }
        alt='Memorial-Flower Image'
        style={{ objectFit: "contain" }}
      />
    </Grid>
  )
  return (
    <Paper>
      <Grid container spacing={ 70 }>
        { imagesContainer }
      </Grid>
    </Paper>
  )
}

export default MemorialFlowers