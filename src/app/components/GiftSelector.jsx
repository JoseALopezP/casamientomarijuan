import styles from './GiftSelector.module.css'
import { useContext, useEffect } from 'react'
import { DataContext } from '@/context/DataContext'

export default function GiftSelector () {
    const {gifts, updateGifts} = useContext(DataContext)
    useEffect(() =>{
        updateGifts()
    }, [])
    return (
        <section className={`${styles.giftSelectorBlock}`}>
        </section>
    )
}