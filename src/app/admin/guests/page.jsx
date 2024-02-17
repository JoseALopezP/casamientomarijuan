'use client'
import { DataContextProvider } from "@/context/DataContext";
import GuestList from "../components/guestList";

export default function Guests() {
    return (
      <>
        <DataContextProvider>
        <GuestList/>
        </DataContextProvider>
      </>
    )
}