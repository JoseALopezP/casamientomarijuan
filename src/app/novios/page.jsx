'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Admin({params}) {
    const { user } = useAuthContext()
    const router = useRouter()
    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])
    return (
        <h1>Solo los novios pueden ver esto</h1>
    )
}