import styles from './GiftSelector.module.css'
import { useContext, useEffect, useRef } from 'react'
import { DataContext } from '@/context/DataContext'
import { GiftCard } from './GiftCard'
import SendGift from './SendGift';

export default function GiftSelector () {
    const {gifts, updateGifts} = useContext(DataContext);
    const ref = useRef(null);
    useEffect(() =>{
        updateGifts()
    }, [])
    const clicked = () =>{
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <section className={`${styles.giftSelectorBlock}`}>
            {gifts.map((itm)=>{
                return(
                    <GiftCard item={itm} clicked={clicked} key={itm.id}/>
                )
            })}
            <div ref={ref}>
                <SendGift/>
            </div>
        </section>
    )
}