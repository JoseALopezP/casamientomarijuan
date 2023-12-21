import { windsong } from '../ui/fonts'
import styles from './Invitation.module.css'
import Image from 'next/image'

export function Invitation () {
    return (
        <section className={`${styles.invitationSection}`}>
            <Image
                className={`${styles.sideBouqet1}`}
                src="/images/bouquets/side1.png"
                width={738}
                height={756}
                alt="Image"
            />
            <div className={`${styles.invitationBlock}`}>
            <span className={`${windsong.className} antialiased ${styles.girlfriendN}`}><b>M</b>ariana</span>
            <span className={`${windsong.className} antialiased ${styles.ampersandN}`}>&</span>
            <span className={`${windsong.className} antialiased ${styles.boyfriendN}`}><b>J</b>uan</span>
            <p className={`${styles.invitationText}`}>TENEMOS EL HONOR DE INVITARTE A CELEBRAR NUESTRA BODA</p>
            </div>
            <Image
                className={`${styles.sideBouqet2}`}
                src="/images/bouquets/side2.png"
                width={738}
                height={756}
                alt="Image"
            />
        </section>
    )
}