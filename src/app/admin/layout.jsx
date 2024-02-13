'use client'
import { AuthContextProvider } from '@/context/AuthContext'

export default function AdminLayout({ children }) {
  return (
    <section>
      <AuthContextProvider>
      {children}
      </AuthContextProvider>
    </section>
  )
}
