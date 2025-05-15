'use client'
import Image from 'next/image'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from '@mui/material'
import image144_1 from '@/images/144-1.png'
import image144_2 from '@/images/144-2.png'
import image144_3 from '@/images/144-3.png'
import image144_4 from '@/images/144-4.png'

const Bells = () => {
  const itemData = [
    {
      img: image144_1,
      title: 'ピンク',
      detail: '26,500円 Φ53×H53',
      rows: 1,
      cols: 1,
    },
    {
      img: image144_2,
      title: 'ミント',
      detail: '26,500円 Φ53×H53',
      rows: 1,
      cols: 1,
    },
    {
      img: image144_3,
      title: 'スノー',
      detail: '26,500円 Φ53×H53',
      rows: 1,
      cols: 1,
    },
        {
      img: image144_4,
      title: 'たまりんぼう',
      detail: '',
      rows: 1,
      cols: 1,
    }
  ];
  return (
    <>
      <Typography variant='h5'>たまゆら パステル</Typography>
      <Typography variant='caption'>※金額は、税込表示になります。</Typography>
      <ImageList sx={{ width: 1000, height: 800 }}
        cols={ 4 }
        rowHeight={ 250 }
        >
        { itemData.map((item, index) => (
          <ImageListItem 
            key={ index } 
            cols={ item.cols || 1 } 
            rows={ item.rows || 1 }
            sx={{
              position: 'relative'
            }}>
            <Image
              src={ item.img.src }
              alt={ item.title }
              width={ 250 * (item.cols || 1) }
              height={ 250 * (item.rows || 1) }
              style={{ objectFit: 'cover' }}
              loading='lazy'
            />
            <ImageListItemBar
              title={ item.title }
              subtitle={ item.detail }
              position='below'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

export default Bells