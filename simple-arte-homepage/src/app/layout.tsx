import Box from '@mui/material/Box'
import Contents from '@/components/Contents'
import Footer from '@/components/Footer'

export default function RootLayout(
  { children } : { children: React.ReactNode }
) {
  return (
    <html lang='ja'>
      <body>
        <Contents />
        <Footer />
      </body>
    </html>
  )
}
