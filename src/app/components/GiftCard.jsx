import styles from './GiftCard.module.css'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react'

export function GiftCard ({item , clicked}) {
    const {idSelected, selectId} = useContext(DataContext)
    const onClickHandler = () => {
        selectId(item.id);
        clicked()
    }
    return (
        <section onClick={() => {(item.stock > 0) && onClickHandler()}} className={(item.stock == 0) ? `${styles.giftCardBlock} ${styles.giftedCardBlock}` : (idSelected !== item.id) ? `${styles.giftCardBlock}` : `${styles.giftCardBlock} ${styles.giftCardBlockSelected}`} >
            <p className={`${styles.itemName}`}>{item.gName}</p>
            <div className={`${styles.linksBlock}`}>
                <a href={item.link1} target="_blank">link 1</a>
                <p className={`${styles.spacer}`}>&nbsp; | &nbsp;</p>
                <a href={item.link2} target="_blank">link 2</a>
            </div>
        </section>
    )
}