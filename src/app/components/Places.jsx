import styles from './Places.module.css'

export function Places () {
    return (
        <section className={`${styles.placesBlock}`}>
            <p>Tenemos reservados para ti</p>
            <span>2</span>
            <p>lugares</p>
        </section>
    )
}