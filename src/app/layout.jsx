import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Playfair_Display } from 'next/font/google'

export const metadata = {
  title: 'Nos Casamos M|J',
  description: 'Casamiento Mari y Juanfra',
}
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: '600'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
