import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  title: 'Zidio Development',
  description: 'Built by Team ZJSSY',
  viewport: 'width=device-width, initial-scale=1.0',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        </body>
    </html>
  )
}
