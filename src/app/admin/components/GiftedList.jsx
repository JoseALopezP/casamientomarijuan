import styles from './GiftedList.module.css'
import { useContext, useEffect } from 'react';
import { DataContext } from '@/context/DataContext';

export function GiftedList () {
    const {gifteds, updateGifteds} = useContext(DataContext);
    useEffect(() =>{
        updateGifteds();
    }, [])
    return (
        <section className={`${styles.giftedListSection}`}>
            {gifteds.map((gifted)=>{
                return(
                    <div key={gifted.id} className={`${styles.giftedBlock}`}>
                        <p>{gifted.gift}</p>
                        <p>{gifted.nya}</p>
                        <p>{gifted.note}</p>
                    </div>
                )
            })}
        </section>
    )
}
