import styles from './Places.module.css'
import Image from 'next/image'

export function Places () {
    return (
        <>
        <Image
                className={`${styles.sideBouqet3}`}
                src="/images/bouquets/side3.png"
                width={282}
                height={498}
                alt="Image"
            />
        <section className={`${styles.placesBlock}`}>
            <svg width="60px" height="60px" viewBox="0 0 512 512" version="1.1">
                <g id="greeting_card-invitation-heart-love-valentine">
                <path d="M368,64H144c-13.2,0-24,10.8-24,24v297.6c0,3.503,2.316,6.409,5.467,7.485c0.151,0.077,0.23,0.188,0.431,0.243   l179.805,48.898C321.05,446.376,336,434.84,336,419.07V393.6h32c13.2,0,24-10.72,24-24V88C392,74.8,381.2,64,368,64z    M206.64,149.04c12.4-16.16,35.52-17.28,49.36-3.28c13.84-14,36.96-12.88,49.36,3.28c10.32,13.36,8.24,32.64-3.6,44.56   l-32.48,32.88c-7.36,7.44-19.2,7.44-26.56,0l-32.48-32.88C198.4,181.68,196.32,162.4,206.64,149.04z M304,280c0,4.4-3.6,8-8,8h-80   c-4.4,0-8-3.6-8-8s3.6-8,8-8h80C300.4,272,304,275.6,304,280z M192,312h128c4.4,0,8,3.6,8,8s-3.6,8-8,8H192c-4.4,0-8-3.6-8-8   S187.6,312,192,312z M320,419.07c0,5.278-5.017,9.079-10.094,7.719l-122.008-33.18H320V419.07z"/>
                </g>
                <g id="Layer_1"/>
            </svg>
            <p className={`${styles.placesText}`}>HAY</p>
            <span>2</span>
            <p className={`${styles.placesText}`}>LUGARES RESERVADOS PARA TI</p>
        </section>
        </>
    )
}