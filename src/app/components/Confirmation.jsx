'use client'

import { useState } from 'react'
import styles from './Confirmation.module.css'
import Image from 'next/image'

export function Confirmation () {
    const [confirmationView, setConfirmationView] = useState(false);
    return (
        <>
        {confirmationView && <div className={`${styles.confirmationViewBlock}`}>
                <button type="button" className={`${styles.closeConfirmationView}`} onClick={() => setConfirmationView(false)}>X</button>
        </div>}
        <Image
            className={`${styles.bouquet4}`}
            src="/images/bouquets/side4.png"
            width={284}
            height={498}
            alt="Image"
        />
        <section className={`${styles.confirmationBlock}`}>
            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" className={`${styles.confirmationTick}`}>
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className={`${styles.confirmationTitle}`}>CONFIRMACION</h3>
            <p className={`${styles.confirmationText}`}>POR FAVOR CONFIRMAR TU ASISTENCIA ANTES DEL 20 DE MARZO</p>
            <button type='button' className={`${styles.confirmationButton}`} onClick={() => setConfirmationView(true)}>CONFIRMAR ASISTENCIA</button>
        </section>
        </>
    )
}