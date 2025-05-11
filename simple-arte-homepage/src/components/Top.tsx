'use client'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import image00 from '@/images/00.png'
import hall1 from '@/images/hall1.webp'
import hall2 from '@/images/hall2.webp'
import hall3 from '@/images/hall3.webp'
import hall4 from '@/images/hall4.webp'
import mv5 from '@/images/mv5.webp'

const Top = () => {
  const itemData = [
    {
      img: image00,
      title: '行事',
    },
    {
      img: hall1,
      title: 'アルテホール光祥院',
    },
    {
      img: hall2,
      title: '家族葬ホール 月あかり',
    },
    {
      img: hall3,
      title: '光祥院 花の里',
    },
    {
      img: hall4,
      title: '光祥院別館  結祥庵',
    },
    {
      img: mv5,
      title: 'ご葬儀',
    }
  ];
  return (
    <ImageList>
      { itemData.map((item, index) => (
        <ImageListItem key={ index }>
          <img
            srcSet={`${ item.img }?w=230&fit=crop&auto=format&dpr=2 2x`}
            src={`${ item.img.src }?w=230&fit=crop&auto=format`}
            alt={ item.title }
            loading="lazy"
          />
          <ImageListItemBar
            title={ item.title }
            position="top"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Top