import { playfair } from '../ui/fonts'
import styles from './Information.module.css'
import Link from 'next/link'

export function Information ({dinner}) {
    return (
        <section className={`${styles.informationSection}`}>
            <div className={`${styles.informationBlock}`}>
            <div className={`${styles.dateInformationBlock}`}>
                <text className={`${styles.dateInformationMonth}`}>ABRIL</text>
                <div className={`${styles.dateInformationText}`}>
                <p className={`${styles.dateTextBox}`}>SABADO</p>
                <p className={`${styles.dateDayBox} ${playfair.className}`}>6</p>
                <p className={`${styles.dateTextBox}`}>2024</p>
                </div>
            </div>
            <h5 className={`${styles.dateInfoHour}`}>19:45 HS</h5>
            <h4 className={`${styles.dateInfoTitle}`}>CEREMONIA</h4>
            <p className={`${styles.dateInfoPlace}`}>PARROQUIA SANTA LUCÍA</p>
            <p className={`${styles.dateInfoUbi}`}><i>Gral. Paz y Ramón Franco</i></p>
            <Link target="_blank" href="https://maps.app.goo.gl/12mcXTTXgNSMR94T6" className={`${styles.dateInfoUbiTag}`}>VER UBICACION</Link>
            {dinner=='ccena'?
            <h5 className={`${styles.dateInfoHour}`}>21:00 HS</h5>
            :
            <h5 className={`${styles.dateInfoHour}`}>00:00 HS</h5>
            }
            <h4 className={`${styles.dateInfoTitle}`}>RECEPCIÓN</h4>
            <p className={`${styles.dateInfoPlace}`}>SALÓN GALANA EVENTOS</p>
            <p className={`${styles.dateInfoUbi}`}><i>Balcarce 198</i></p>
            <Link target="_blank" href="https://maps.app.goo.gl/QQDhXNS22eEAaMjS8" className={`${styles.dateInfoUbiTag}`}>VER UBICACION</Link>
            </div>
        </section>
    )
}