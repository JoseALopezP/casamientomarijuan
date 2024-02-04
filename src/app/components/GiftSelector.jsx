import styles from './GiftSelector.module.css'
import { useContext, useEffect } from 'react'
import { DataContext } from '@/context/DataContext'
import { GiftCard } from './giftCard'

export default function GiftSelector () {
    const {gifts, updateGifts} = useContext(DataContext)
    useEffect(() =>{
        updateGifts()
    }, [])
    return (
        <section className={`${styles.giftSelectorBlock}`}>
            {gifts.map((itm)=>{
                return(
                    <GiftCard item={itm} key={itm.id}/>
                )
            })}
        </section>
    )
}