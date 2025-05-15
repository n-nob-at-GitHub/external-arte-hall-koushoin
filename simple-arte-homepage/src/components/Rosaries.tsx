'use client'
import Image from 'next/image'
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from '@mui/material'
import image150_01 from '@/images/150-01.webp'
import image150_02 from '@/images/150-02.webp'
import image150_03 from '@/images/150-03.webp'
import image150_04 from '@/images/150-04.webp'
import image150_05 from '@/images/150-05.webp'
import image150_06 from '@/images/150-06.webp'
import image150_07 from '@/images/150-07.webp'
import image150_08 from '@/images/150-08.webp'
import image150_09 from '@/images/150-09.webp'
import image150_10 from '@/images/150-10.webp'
import image150_11 from '@/images/150-11.webp'
import image151_01 from '@/images/151-01.webp'
import image151_02 from '@/images/151-02.webp'
import image151_03 from '@/images/151-03.webp'
import image151_04 from '@/images/151-04.webp'
import image151_05 from '@/images/151-05.webp'
import image151_06 from '@/images/151-06.webp'
import image151_07 from '@/images/151-07.webp'
import image151_08 from '@/images/151-08.webp'
import image151_09 from '@/images/151-09.webp'
import image151_10 from '@/images/151-10.webp'
import image151_11 from '@/images/151-11.webp'
import image151_12 from '@/images/151-12.webp'
import image151_13 from '@/images/151-13.webp'
import image151_14 from '@/images/151-14.webp'
import image151_15 from '@/images/151-15.webp'
import image151_16 from '@/images/151-16.webp'
import image151_17 from '@/images/151-17.webp'
import image151_18 from '@/images/151-18.webp'

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${ image }?w=${ size * cols }&h=${ size * rows }&fit=crop&auto=format`,
    srcSet: `${ image }?w=${ size * cols }&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Rosaries = () => {
  const fioriRings = [
    {
      img: image150_01,
      title: 'FR-001',
      cost: '9,350円',
      rows: 1,
      cols: 1,
    },
    {
      img: image150_02,
      title: 'FR-002',
      cost: '10,450円',
    },
    {
      img: image150_03,
      title: 'FR-003',
      cost: '10,450円',
    },
    {
      img: image150_04,
      title: 'FR-004',
      cost: '9,350円',
    },
    {
      img: image150_05,
      title: 'FR-005',
      cost: '9,350円',
    },
    {
      img: image150_06,
      title: 'FR-006',
      cost: '12,100円',
    },
    {
      img: image150_07,
      title: 'FR-007',
      cost: '12,100円',
    },
    {
      img: image150_08,
      title: 'FR-008',
      cost: '14,300円',
    },
    {
      img: image150_09,
      title: 'FR-009',
      cost: '14,300円',
    },
    {
      img: image150_10,
      title: 'FR-010',
      cost: '12,100円',
    },
  ];
  const fioriFringes = [
    {
      img: image150_11,
      title: '各フリンジ',
      cost: '各5,500円',
      rows: 1,
      cols: 3,
    },
  ];
  const laVeneziaRings = [
    {
      img: image151_01,
      title: 'LV-1001',
      cost: '3,850円',
      rows: 1,
      cols: 1,
    },
    {
      img: image151_02,
      title: 'LV-1002',
      cost: '3,850円',
    },
    {
      img: image151_03,
      title: 'LV-1003',
      cost: '3,850円',
    },
    {
      img: image151_04,
      title: 'LV-1004',
      cost: '4,400円',
    },
    {
      img: image151_05,
      title: 'LV-1005',
      cost: '9,900円',
    },
    {
      img: image151_06,
      title: 'LV-1006',
      cost: '9,900円',
    },
    {
      img: image151_07,
      title: 'LV-1007',
      cost: '9,900円',
    },
    {
      img: image151_08,
      title: 'LV-1008',
      cost: '9,900円',
    },
    {
      img: image151_09,
      title: 'LV-1009',
      cost: '9,900円',
    },
    {
      img: image151_10,
      title: 'LV-1010',
      cost: '7,700円',
    },
    {
      img: image151_11,
      title: 'LV-1011',
      cost: '9,900円',
    },
    {
      img: image151_12,
      title: 'LV-1012',
      cost: '7,700円',
    },
    {
      img: image151_13,
      title: 'LV-1013',
      cost: '7,700円',
    },
    {
      img: image151_14,
      title: 'LV-1014',
      cost: '7,700円',
    },
    {
      img: image151_15,
      title: 'LV-1015',
      cost: '7,700円',
    },
    {
      img: image151_16,
      title: 'LV-1016',
      cost: '6,050円',
    },
    {
      img: image151_17,
      title: 'LV-1017',
      cost: '6,050円',
    },
    {
      img: image151_18,
      title: 'LV-1018',
      cost: '6,050円',
    },
  ];

  const renderImageItem = (item: any, index: number) => {
    const cols = item.cols || 1;
    const rows = item.rows || 1;
    const size = 250;
    return (
      <Box key={ index } sx={{ border: 1, borderColor: 'grey.200', p: 2 }}>
        <ImageListItem cols={ cols } rows={ rows } sx={{ overflow: 'hidden' }}>
          <Image
            src={ item.img.src }
            alt={ item.title }
            width={ size * cols }
            height={ size * rows }
            style={{ objectFit: 'cover' }}
            loading='lazy'
          />
          <ImageListItemBar
            title={ item.title }
            subtitle={ item.cost }
            position='below'
          />
        </ImageListItem>
      </Box>
    );
  };

  return (
    <>
      <Typography variant='h5'>フィオーリ リング</Typography>
      <Typography variant='caption'>※金額は、税込表示になります。</Typography>
      <ImageList sx={{ width: 1000, height: 1000 }} cols={ 4 } rowHeight={ 250 }>
        { fioriRings.map(renderImageItem) }
      </ImageList>
      <Typography variant='h5'>フィオーリ フリンジ</Typography>
      <Typography variant='caption'>※金額は、税込表示になります。</Typography>
      <ImageList sx={{ width: 1000, height: 500 }} cols={ 1 } rowHeight={ 250 }>
        { fioriFringes.map(renderImageItem) }
      </ImageList>
      <Typography variant='h5'>ラ・ヴェネツィアーナ</Typography>
      <Typography variant='caption'>※金額は、税込表示になります。</Typography>
      <ImageList sx={{ width: 1000, height: 1500 }} cols={ 4 } rowHeight={ 250 }>
        { laVeneziaRings.map(renderImageItem) }
      </ImageList>
    </>
  )
}

export default Rosaries