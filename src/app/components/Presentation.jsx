import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <section className={`${styles.presentationSection}`}>
            <div className={`${styles.presentationBlock}`}>
                <h1>M | J</h1>
                <p>Yo únicamente quería lo mejor para Fiona, pero ahora veo que ya lo tiene. Shrek, Fiona, ¿aceptaríais las disculpas de esta vieja rana y aceptaríais su bendición?
                <br/>
                <i>Rey Harold</i>
                </p>
                <span>NOS CASAMOS!</span>
            </div>
        </section>
    )
}