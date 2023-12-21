import styles from './Invitation.module.css'

export function Invitation () {
    return (
        <section className={`${styles.invitationSection}`}>
            <div className={`${styles.invitationBlock}`}>
            <span>Mariana</span>
            <span>&</span>
            <span>Juan</span>
            <p>Tenemos el honor de invitarte a nuestra boda</p>
            </div>
        </section>
    )
}