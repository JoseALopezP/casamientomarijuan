import { playfair } from '../ui/fonts'
import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <section className={`${styles.presentationSection}`}>
            <div className={`${styles.presentationBlock}`}>
                <h1 className={`${playfair.className} antialiased`}>M |&nbsp; J</h1>
                <p className={`${styles.presentationQuote}`}>&quot;La medida del amor es amar sin medida&quot;</p>
                <span>¡NOS CASAMOS!</span>
            </div>
        </section>
    )
}