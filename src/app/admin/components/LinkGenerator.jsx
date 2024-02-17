import styles from './LinkGenerator.module.css'
import { useState } from 'react'

export default function LinkGenerator () {
    const [dinner, setDinner] = useState(0)
    const [quant, setQuant] = useState(0)
    return (
        <section className={`${styles.linkGeneratorSection}`}>
            <div className={`${styles.dinnerSelector}`}>
                <button className={(dinner == 1) ? `${styles.buttonDinner} ${styles.buttonDinnerActive}` : `${styles.buttonDinner}`} onClick={() => (dinner == 1) ? setDinner(0) : setDinner(1)}>CENA</button>
                <button className={(dinner == -1) ? `${styles.buttonDinner} ${styles.buttonDinnerActive}` : `${styles.buttonDinner}`} onClick={() => (dinner == -1) ? setDinner(0) : setDinner(-1)}>DESPUÉS</button>
            </div>
            <div className={`${styles.quantityBlock}`}>
                <button className={`${styles.buttonPlus}`} onClick={() => setQuant(quant + 1)}>▲</button>
                <p className={`${styles.quantityBox}`}>{quant}</p>
                <button className={`${styles.buttonMinus}`} onClick={() => (quant > 0) && setQuant(quant - 1)}>▼</button>
            </div>
            <button className={`${styles.copyButton}`} onClick={() => navigator.clipboard.writeText()}>COPIAR LINK</button>
            <p className={`${styles.linkBox}`}>casamientomarijuan.vercel.app{dinner !== '' && (dinner ? '/ccena' : '/dcena')}{(dinner !== null) && '/' + quant}</p>
        </section>
    )
}

