'use client'
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Admin() {
    const { user } = useAuthContext()
    const router = useRouter()
    useEffect(() => {
      console.log(user)
      if (user == null) router.push("/signin")
    }, [user])
    return (
        <h1>Solo los novios pueden ver esto</h1>
    )
}