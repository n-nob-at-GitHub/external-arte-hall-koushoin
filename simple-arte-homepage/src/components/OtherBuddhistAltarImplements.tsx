'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
	Box,
  ImageList,
  styled,
  Typography,
	useMediaQuery,
  useTheme,
} from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import image200 from '@/images/200.webp'

type ImageItem = {
  img: StaticImageData
  title: string
	detail: string
  cols?: number
  rows?: number
}

// https://mui.com/material-ui/react-accordion/
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={ 0 } square { ...props } />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={ <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} /> }
    { ...props }
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${ accordionSummaryClasses.expandIconWrapper }.${ accordionSummaryClasses.expanded }`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${ accordionSummaryClasses.content }`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const makeImageListContent = (data: ImageItem[], maxCols = 1) => {
  return <ImageList 
    cols={ maxCols }
    sx={{
      '& .MuiImageListItem-root': {
        position: 'relative',
      },
    }}>
    { data.map((item, index) => (
      <Box
        key={ index }
        sx={{
          border: 1,
          borderColor: 'grey.200',
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src={ item.img.src }
          alt={ item.title }
          width={ 250 }
          height={ 250 }
          style={{ objectFit: 'cover', borderRadius: '50%', }}
        />
        <Typography variant='subtitle1' component='div'>
          { item.title }
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          { item.detail }
        </Typography>
      </Box>
    ))}
  </ImageList>;
}

const makeAccordionContent = (
  key: string, 
  title: string, 
  data: ImageItem[], 
  maxCols = 1, 
  expanded: string | boolean, 
  handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
) => {
  return <Accordion expanded={ expanded === key } onChange={ handleChange(key) }>
    <AccordionSummary aria-controls={ `${ key }-content` } id={`${ key }-header`}>
      <Typography component='span'>{ title }</Typography>
    </AccordionSummary>
    <AccordionDetails>
			<Typography variant='caption'>※金額は、税込表示になります。</Typography>
      { makeImageListContent(data, maxCols) }
    </AccordionDetails>
  </Accordion>;
}

const OtherBuddhistAltarImplements = () => {
  const [ expanded, setExpanded ] = useState<string | false>('');
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  }
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.up('sm'))
	const isSm = useMediaQuery(theme.breakpoints.up('md'))
	const isMd = useMediaQuery(theme.breakpoints.up('lg'))
	const maxCols = 2 + Number(isXs) + Number(isSm) + Number(isMd)

  const tieredClothData = [
    {
      img: image200,
      title: 'B-8 抹茶',
			detail: '9,900円',
      rows: 1,
      cols: 1,
    },
  ];
  return (
    <>
      { makeAccordionContent('tiered-cloth', '段掛布', tieredClothData, maxCols, expanded, handleChange) }
    </>
  )
}

export default OtherBuddhistAltarImplements