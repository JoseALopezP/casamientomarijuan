'use client'
import { DataContextProvider } from "@/context/DataContext";
import GuestList from "../components/GuestList";
import { NavBar } from "../components/NavBar";
export default function Guests() {
    return (
      <>
        <DataContextProvider>
        <NavBar/>
        <GuestList/>
        </DataContextProvider>
      </>
    )
}