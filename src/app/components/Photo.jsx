import styles from './Photo.module.css'
import Image from 'next/image'

export function Photo () {
    return (
        <section className={`${styles.photoBlock}`}>
            <Image
                src="/images/namorados.png"
                width={1921}
                height={1070}
                alt="Image"
            />
        </section>
    )
}