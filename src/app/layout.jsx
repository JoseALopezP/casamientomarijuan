import './globals.css'

export const metadata = {
  title: 'Nos Casamos M|J',
  description: 'Casamiento Mari y Juanfra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
