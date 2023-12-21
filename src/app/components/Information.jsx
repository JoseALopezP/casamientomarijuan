import styles from './Information.module.css'
import Link from 'next/link'

export function Information () {
    return (
        <section className={`${styles.informationSection}`}>
            <div className={`${styles.informationBlock}`}>
            <span>Mariana</span>
            <span>&</span>
            <span>Juan</span>
            <h5>18:00</h5>
            <h4>CEREMONIA</h4>
            <p>CAPILLA ...</p>
            <p>Av Roca y Coronado</p>
            <Link href="https://en.wikipedia.org/wiki/Next.js">VER UBICACION</Link>
            <h5>19:30</h5>
            <h4>RECEPCION</h4>
            <p>SALÓND DE EVENTOS ...</p>
            <p>Av. Roca y Coronado</p>
            <Link href="https://en.wikipedia.org/wiki/Next.js">VER UBICACION</Link>
            </div>
        </section>
    )
}