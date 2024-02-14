'use client'
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { NavBar } from "./components/NavBar";

export default function Admin() {
    const { user } = useAuthContext()
    const router = useRouter()
    useEffect(() => {
      console.log(user)
      if (user == null) router.push("/signin")
    }, [user])
    return (
        <NavBar/>
    )
}