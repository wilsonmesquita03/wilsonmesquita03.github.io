import './globals.css'
import { Inter } from 'next/font/google'
import Hud from '@/components/Hud'
import localFont from 'next/font/local'

const glacial = localFont({
  variable: '--font-glacial',
  src: [
    {
      path: './GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wilson Mesquita',
  description: 'Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} ${glacial.variable}`}
      >
        <Hud/>
        {children}        
      </body>
    </html>
  )
}
