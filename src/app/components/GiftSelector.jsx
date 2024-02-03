import getCollection from '@/firebase/firestore/getCollection'
import { useEffect, useState } from 'react'
import styles from './GiftSelector.module.css'

export default function GiftSelector () {
    const [gifts, setGifts] = useState('')
    useEffect(() =>{
        setGifts(getCollection('giftList'))
    }, [])
    return (
        <section className={`${styles.giftSelectorBlock}`}>
            {gifts.map((itm) => {
                    return(
                        <p>{itm}</p>
                    );
                })}
        </section>
    )
}