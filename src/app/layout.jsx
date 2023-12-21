import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { notosans } from './ui/fonts'

export const metadata = {
  title: 'Nos Casamos M|J',
  description: 'Casamiento Mari y Juanfra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notosans.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
