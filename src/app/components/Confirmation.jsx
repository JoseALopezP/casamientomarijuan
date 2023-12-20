import styles from './Confirmation.module.css'

export function Confirmation () {
    return (
        <section className={`${styles.confirmationBlock}`}>
            <h3>CONFIRMACION</h3>
            <p>Por favor confirma tu asistencia antes de:</p>
            <button type='button'>CONFIRMAR ASISTENCIA</button>
        </section>
    )
}