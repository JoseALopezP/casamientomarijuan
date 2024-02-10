'use client'
import styles from './Gift.module.css'
import { useState} from 'react'
import GiftSelector from './GiftSelector';
import TransferSelector from './TransferSelector';
import { DataContextProvider } from "@/context/DataContext";

export function Gift () {
    const [giftView, setGiftView] = useState(false);
    const [transferView, setTransferView] = useState(false);
    return (
        <DataContextProvider>
        <section className={`${styles.giftBlock}`}>
            {giftView && 
            <>
                <button type="button" className={`${styles.closeView}`} onClick={() => setGiftView(false)}>X</button>
                <div className={`${styles.giftViewBlock}`}> 
                    <p className={`${styles.textExplained}`}>Podés elegir 1 regalo y dejarnos una notita <br/> (hay enlaces de ejemplo)</p>
                    <GiftSelector/>
                </div>
            </>}
            {transferView && <div className={`${styles.giftViewBlock}`}>
                <button type="button" className={`${styles.closeView}`} onClick={() => setTransferView(false)}>X</button>
                <p className={`${styles.textExplained}`}>Nos podés transferir a: y dejar el número de transferencia junto con un mensajito</p>
                <TransferSelector/>
            </div>}
            <svg className={`${styles.giftIcon}`} width="120px" height="120px" viewBox="0 0 24 24" fill='#991D31'>
            <path d="M19.5 7.75H18.1C18.5 7.27 18.75 6.67 18.75 6C18.75 4.48 17.52 3.25 16 3.25C14.32 3.25 12.84 4.14 12 5.46C11.16 4.14 9.68 3.25 8 3.25C6.48 3.25 5.25 4.48 5.25 6C5.25 6.67 5.5 7.27 5.9 7.75H4.5C3.81 7.75 3.25 8.31 3.25 9V11.5C3.25 12.1 3.68 12.58 4.25 12.7V19.5C4.25 20.19 4.81 20.75 5.5 20.75H18.5C19.19 20.75 19.75 20.19 19.75 19.5V12.7C20.32 12.58 20.75 12.1 20.75 11.5V9C20.75 8.31 20.19 7.75 19.5 7.75ZM19.25 11.25H12.75V9.25H19.25V11.25ZM16 4.75C16.69 4.75 17.25 5.31 17.25 6C17.25 6.69 16.69 7.25 16 7.25H12.84C13.18 5.82 14.47 4.75 16 4.75ZM8 4.75C9.53 4.75 10.82 5.82 11.16 7.25H8C7.31 7.25 6.75 6.69 6.75 6C6.75 5.31 7.31 4.75 8 4.75ZM4.75 9.25H11.25V11.25H4.75V9.25ZM5.75 12.75H11.25V19.25H5.75V12.75ZM18.25 19.25H12.75V12.75H18.25V19.25Z" />
            </svg>
            <p className={`${styles.giftText}`}>Si querés regalarnos algo más que tu hermosa presencia:</p>
            <button type="button" className={`${styles.giftButton}`} onClick={() => setGiftView(true)}>REGALO</button>
            <button type="button" className={`${styles.giftButton}`} onClick={() => setTransferView(true)}>TRANSFERENCIA</button>
        </section>
        </DataContextProvider>
    )
}

