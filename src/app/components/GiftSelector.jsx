import getCollection from '@/firebase/firestore/getCollection'
import { useEffect } from 'react'
import styles from './GiftSelector.module.css'

export default function GiftSelector () {
    useEffect(() =>{
        const gifts = getCollection('giftList')
    }, [])
    return (
        <section className={`${styles.giftSelectorBlock}`}>
            {gifts}
        </section>
    )
}