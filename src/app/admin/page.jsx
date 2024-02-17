'use client'
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { NavBar } from "./components/NavBar";
import { DataContextProvider } from "@/context/DataContext";
import LinkGenerator from "./components/LinkGenerator";
import Dashboard from "./components/dashboard";
import styles from './globals.module.css'

export default function Admin() {
    const { user } = useAuthContext()
    const router = useRouter()
    useEffect(() => {
      if (user == null) router.push("/signin")
    }, [user])
    return (
      <>
        <DataContextProvider>
        <main className={`${styles.mainSection}`}>
          <Dashboard/>
          <LinkGenerator/>
        </main>
        </DataContextProvider>
      </>
    )
}