import Image from 'next/image'
import styles from './Footer.module.css'

export function Footer () {
    return (
        <section className={`${styles.footerBlock}`}>
            <Image
                src="/images/bouquets/bottom.png"
                width={887}
                height={267}
                alt="Image"
            />
        </section>
    )
}