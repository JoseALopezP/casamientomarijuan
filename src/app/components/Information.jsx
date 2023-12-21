import { playfair } from '../ui/fonts'
import styles from './Information.module.css'
import Link from 'next/link'

export function Information () {
    return (
        <section className={`${styles.informationSection}`}>
            <div className={`${styles.informationBlock}`}>
            <div className={`${styles.dateInformationBlock}`}>
                <svg width="100" height="50" fillOpacity="0">
                    <path d="M 0 50 C 0 50, 150 0, 150 150" id='curve'></path>
                    <text className={`${styles.dateInformationMonth}`}><textPath href='#curve' fillOpacity="1">ABRIL</textPath></text>
                </svg>
                <div className={`${styles.dateInformationText}`}>
                <p className={`${styles.dateTextBox}`}>SABADO</p>
                <p className={`${styles.dateDayBox} ${playfair.className}`}>6</p>
                <p className={`${styles.dateTextBox}`}>2024</p>
                </div>
            </div>
            <h5 className={`${styles.dateInfoHour}`}>18:00 HS</h5>
            <h4 className={`${styles.dateInfoTitle}`}>CEREMONIA</h4>
            <p className={`${styles.dateInfoPlace}`}>CAPILLA ...</p>
            <p className={`${styles.dateInfoUbi}`}><i>Av Roca y Coronado</i></p>
            <Link href="https://en.wikipedia.org/wiki/Next.js" className={`${styles.dateInfoUbiTag}`}>VER UBICACION</Link>
            <h5 className={`${styles.dateInfoHour}`}>19:30 HS</h5>
            <h4 className={`${styles.dateInfoTitle}`}>RECEPCION</h4>
            <p className={`${styles.dateInfoPlace}`}>SALÓN DE EVENTOS ...</p>
            <p className={`${styles.dateInfoUbi}`}><i>Av. Roca y Coronado</i></p>
            <Link href="https://en.wikipedia.org/wiki/Next.js" className={`${styles.dateInfoUbiTag}`}>VER UBICACION</Link>
            </div>
        </section>
    )
}