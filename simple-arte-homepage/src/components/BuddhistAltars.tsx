'use client'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import image31_1 from '@/images/31-1.png'
import image31_2 from '@/images/31-2.png'
import image31_3 from '@/images/31-3.png'
import image31_4 from '@/images/31-4.png'
import image45_1 from '@/images/45-1.png'
import image45_2 from '@/images/45-2.png'
import image45_3 from '@/images/45-3.png'
import image45_4 from '@/images/45-4.png'
import image64_1 from '@/images/64-1.png'
import image65_1 from '@/images/65-1.png'
import image65_2 from '@/images/65-2.png'
import image65_3 from '@/images/65-3.png'
import image65_4 from '@/images/65-4.png'
import image65_5 from '@/images/65-5.png'
import image65_6 from '@/images/65-6.png'
import image65_7 from '@/images/65-7.png'
import image67_1 from '@/images/67-1.png'
import image67_2 from '@/images/67-2.png'
import image67_3 from '@/images/67-3.png'
import image67_4 from '@/images/67-4.png'
import image67_5 from '@/images/67-5.png'
import image67_6 from '@/images/67-6.png'
import image67_7 from '@/images/67-7.png'
import image76_1 from '@/images/76-1.png'
import image76_2 from '@/images/76-2.png'
import image76_3 from '@/images/76-3.png'
import image76_4 from '@/images/76-4.png'
import image76_5 from '@/images/76-5.png'
import image76_6 from '@/images/76-6.png'
import image76_7 from '@/images/76-7.png'
import image76_8 from '@/images/76-8.png'
import image76_9 from '@/images/76-9.png'
import image76_10 from '@/images/76-10.png'
import image77_1 from '@/images/77-1.png'
import image77_2 from '@/images/77-2.png'
import image77_3 from '@/images/77-3.png'
import image77_4 from '@/images/77-4.png'
import image77_5 from '@/images/77-5.png'
import image83_1 from '@/images/83-1.png'
import image83_2 from '@/images/83-2.png'
import image83_3 from '@/images/83-3.png'
import image83_4 from '@/images/83-4.png'
import image83_5 from '@/images/83-5.png'

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${ image }?w=${ size * cols }&h=${ size * rows }&fit=crop&auto=format`,
    srcSet: `${ image }?w=${ size * cols }&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const BuddhistAltars = () => {
  const itemData = [
    {
      img: image31_1,
    },
    {
      img: image31_2,
      rows: 1,
      cols: 2,
    },
    {
      img: image31_3,
    },
    {
      img: image31_4,
    },
    {
      img: image45_1,
    },
    {
      img: image45_2,
      rows: 1,
      cols: 2,
    },
    {
      img: image45_3,
    },
    {
      img: image45_4,
    },
    {
      img: image64_1,
      rows: 1,
      cols: 2,
    },
    {
      img: image65_1,
    },
    {
      img: image65_2,
    },
    {
      img: image65_3,
    },
    {
      img: image65_4,
    },
    {
      img: image65_5,
    },
    {
      img: image65_6,
    },
    {
      img: image65_7,
    },
    {
      img: image67_1,
    },
    {
      img: image67_2,
    },
    {
      img: image67_3,
    },
    {
      img: image67_4,
    },
    {
      img: image67_5,
    },
    {
      img: image67_6,
    },
    {
      img: image67_7,
    },
    {
      img: image76_1,
    },
    {
      img: image76_2,
    },
    {
      img: image76_3,
    },
    {
      img: image76_4,
    },
    {
      img: image76_5,
    },
    {
      img: image76_6,
    },
    {
      img: image76_7,
    },
    {
      img: image76_8,
    },
    {
      img: image76_9,
    },
    {
      img: image76_10,
    },
    {
      img: image77_1,
    },
    {
      img: image77_2,
    },
    {
      img: image77_3,
    },
    {
      img: image77_4,
    },
    {
      img: image77_5,
    },
    {
      img: image83_1,
      rows: 1,
      cols: 2,
    },
    {
      img: image83_2,
    },
    {
      img: image83_3,
    },
    {
      img: image83_4,
    },
    {
      img: image83_5,
    }
  ];
  return (
    <>
      <ImageList sx={{ width: 1500, height: 1500 }}
        variant='quilted'
        cols={ 5 }
        rowHeight={ 260 }
        >
        { itemData.map((item, index) => (
          <ImageListItem key={ index } cols={ item.cols || 1 } rows={ item.rows || 1 }>
            <img
              { ...srcset(item.img.src, 260, item.rows, item.cols) }
              alt={ '' }
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

export default BuddhistAltars