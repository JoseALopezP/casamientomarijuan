import styles from './Gift.module.css'

export function Gift () {
    return (
        <section className={`${styles.giftBlock}`}>
            <p>Tu presencia es el mejor regalos pero si quieres ayudarnos puedes hacerlo de las siguientes formas:</p>
            <button type="button">Lista de Regalos</button>
            <button type="button">Transferencia</button>
        </section>
    )
}