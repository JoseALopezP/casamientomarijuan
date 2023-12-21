import styles from './Header.module.css'
import Image from 'next/image'

export function Header () {
    return (
        <section className={`${styles.headerBlock}`}>
            <Image
                src="/images/bouquets/topleft.png"
                width={738}
                height={756}
                alt="Image"
            />
        </section>
    )
}