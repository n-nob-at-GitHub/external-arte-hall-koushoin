'use client'
import React from 'react'
import {
  Box,
  IconButton,
  Link,
} from '@mui/material'

const Header = () => {
  return(
    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/`}>
          トップ
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/buddhist-altars`}>
          仏壇
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/bells`}>
          御鈴
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/lanterns`}>
          提灯
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/memorial-flowers`}>
          メモリアルフラワー
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/rosaries`}>
          念珠
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/chirimen-crafts`}>
          ちりめん細工
        </Link>
      </IconButton>
      <IconButton>
        <Link style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} href={`/top/photo-frames`}>
          フォトフレーム
        </Link>
      </IconButton>
    </Box>
  )
}

export default Header