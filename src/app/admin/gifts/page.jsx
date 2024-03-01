'use client'
import { DataContextProvider } from "@/context/DataContext";
import { NavBar } from "../components/NavBar";
import {GiftedList} from "../components/GiftedList";

export default function Gifts() {
    return (
      <>
        <DataContextProvider>
        <NavBar/>
        <GiftedList/>
        </DataContextProvider>
      </>
    )
}