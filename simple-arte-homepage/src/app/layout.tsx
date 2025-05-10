import Box from '@mui/material/Box'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout(
  { children } : { children: React.ReactNode }
) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        <Box sx={{ minHeight: 'calc(100vh - 48px)' }}>
          { children }
        </Box>
        <Footer />
      </body>
    </html>
  )
}
