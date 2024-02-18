'use client'
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { DataContextProvider } from "@/context/DataContext";
import LinkGenerator from "./components/LinkGenerator";
import Dashboard from "./components/Dashboard";
import styles from './globals.module.css'
import { NavBar } from "./components/NavBar";

export default function Admin() {
    const { user } = useAuthContext()
    const router = useRouter()
    useEffect(() => {
      if (user == null) router.push("/signin")
    }, [user])
    return (
      <>
        <DataContextProvider>
        <NavBar/>
        <main className={`${styles.mainSection}`}>
          <Dashboard/>
          <LinkGenerator/>
        </main>
        </DataContextProvider>
      </>
    )
}