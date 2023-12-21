import { playfair } from '../ui/fonts'
import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <section className={`${styles.presentationSection}`}>
            <div className={`${styles.presentationBlock}`}>
                <h1  className={`${playfair.className} antialiased`}>M | J</h1>
                <p className={`${styles.quote}`}>"Yo únicamente quería lo mejor para Fiona, pero ahora veo que ya lo tiene. Shrek, Fiona, ¿aceptaríais las disculpas de esta vieja rana y aceptaríais su bendición?"
                </p>
                <span>¡NOS CASAMOS!</span>
            </div>
        </section>
    )
}