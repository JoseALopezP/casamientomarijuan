'use server'
import getCollection from '@/firebase/firestore/getCollection'
import styles from './GiftSelector.module.css'

export async function GiftSelector () {
    const gifts = await getCollection('giftList')
    await console.log(gifts)
    return (
        <section className={`${styles.giftSelectorBlock}`}>
        </section>
    )
}