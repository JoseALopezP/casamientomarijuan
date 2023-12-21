import { windsong } from '../ui/fonts'
import styles from './Invitation.module.css'

export function Invitation () {
    return (
        <section className={`${styles.invitationSection}`}>
            <div className={`${styles.invitationBlock}`}>
            <span className={`${windsong.className} antialiased`}>Mariana</span>
            <span className={`${windsong.className} antialiased`}>&</span>
            <span className={`${windsong.className} antialiased`}>Juan</span>
            <p>Tenemos el honor de invitarte a nuestra boda</p>
            </div>
        </section>
    )
}