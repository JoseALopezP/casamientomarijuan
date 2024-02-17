'use client'
import { AuthContextProvider } from '@/context/AuthContext'
import { NavBar } from './components/NavBar'

export default function AdminLayout({ children }) {
  return (
    <section>
      <AuthContextProvider>
      <NavBar/>
      {children}
      </AuthContextProvider>
    </section>
  )
}
