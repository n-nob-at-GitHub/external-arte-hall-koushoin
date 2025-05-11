'use client'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar
} from '@mui/material'
import image31 from '@/images/31.png'
import image45 from '@/images/45.png'
import image64 from '@/images/64.png'
import image65 from '@/images/65.png'
import image67 from '@/images/67.png'
import image76 from '@/images/76.png'
import image77_1 from '@/images/77-1.png'
import image77_2 from '@/images/77-2.png'

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
      img: image31,
      title: 'ピウマ',
      rows: 1,
      cols: 1,
    },
    {
      img: image45,
      title: '花桜',
      rows: 1,
      cols: 1,
    },
    {
      img: image64,
      title: 'フェンネルⅡ',
      rows: 1,
      cols: 1,
    },
    {
      img: image65,
      title: 'フェンネルⅡ',
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
    }
  ];
  return (
    <ImageList sx={{ width: 1000, height: 800 }}
      variant='quilted'
      cols={ 4 }
      rowHeight={ 250 }
      >
      { itemData.map((item, index) => (
        <ImageListItem key={ index } cols={ item.cols || 1 } rows={ item.rows || 1 }>
          <img
            { ...srcset(item.img.src, 250, item.rows, item.cols) }
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
  )
}

export default BuddhistAltars