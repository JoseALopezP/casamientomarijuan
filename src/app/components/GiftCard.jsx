import styles from './GiftCard.module.css'
import { DataContext } from '@/context/DataContext'
import { useContext } from 'react'

export function GiftCard ({item}) {
    const {idSelected, selectId} = useContext(DataContext)
    const onClickHandler = () => {
        selectId(item.id);
        clicked();
    }
    return (
        <section className={(item.status) ? (idSelected == item.id) ? `${styles.giftCardBlock}`: `${styles.giftCardBlock} ${styles.giftCardBlockSelected}` : `${styles.giftCardBlock} ${styles.giftedCardBlock}`} >
            <p>{item.gName}</p>
        </section>
    )
}