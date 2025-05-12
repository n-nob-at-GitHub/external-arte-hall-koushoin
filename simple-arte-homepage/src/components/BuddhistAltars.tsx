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
import image67 from '@/images/67.png'
import image76 from '@/images/76.png'
import image77_1 from '@/images/77-1.png'
import image77_2 from '@/images/77-2.png'
import image83_1 from '@/images/83-1.png'
import image83_2 from '@/images/83-2.png'

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
      rows: 1,
      cols: 1,
    },
    {
      img: image31_2,
      rows: 1,
      cols: 2,
    },
    {
      img: image31_3,
      rows: 1,
      cols: 1,
    },
    {
      img: image31_4,
      rows: 1,
      cols: 1,
    },
    {
      img: image45_1,
      rows: 1,
      cols: 1,
    },
    {
      img: image45_2,
      rows: 1,
      cols: 2,
    },
    {
      img: image45_3,
      rows: 1,
      cols: 1,
    },
    {
      img: image45_4,
      rows: 1,
      cols: 1,
    },
    {
      img: image64_1,
      rows: 1,
      cols: 2,
    },
    {
      img: image65_1,
      rows: 1,
      cols: 1,
    },
    {
      img: image65_2,
      rows: 1,
      cols: 1,
    },
    {
      img: image65_3,
      rows: 1,
      cols: 1,
    },
    {
      img: image65_4,
      rows: 1,
      cols: 1,
    },
    {
      img: image65_5,
      rows: 1,
      cols: 1,
    },
    {
      img: image65_6,
      rows: 1,
      cols: 1,
    },
    {
      img: image65_7,
      rows: 1,
      cols: 1,
    },
    {
      img: image67,
      title: 'フォーリーフ',
      rows: 1,
      cols: 1,
    },
    {
      img: image76,
      title: 'ガラ',
      rows: 1,
      cols: 1,
    },
    {
      img: image77_1,
      title: 'ショコラ',
      rows: 1,
      cols: 1,
    },
    {
      img: image77_2,
      title: 'ショコラ',
      rows: 1,
      cols: 1,
    },
    {
      img: image83_1,
      title: 'プログレ（配置）',
      rows: 1,
      cols: 1,
    },
    {
      img: image83_2,
      title: 'プログレ',
      rows: 1,
      cols: 1,
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
              alt={ item.title }
              loading='lazy'
            />
            <ImageListItemBar
              title={ item.title }
              position='below'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

export default BuddhistAltars