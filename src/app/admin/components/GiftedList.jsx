import styles from './GiftedList.module.css'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '@/context/DataContext';

export function GiftedList () {
    const [idSelected, setIdSelected] = useState('')
    const {gifteds, updateGifteds} = useContext(DataContext);
    useEffect(() =>{
        updateGifteds();
    }, [])
    return (
        <section className={`${styles.giftedListSection}`}>
            {gifteds.map((gifted)=>{
                return(
                    <div key={gifted.id} className={`${styles.giftedBlock}`} onClick={(idSelected == gifted.id) ? setIdSelected('') : setIdSelected(gifted.id)}>
                        <p>{gifted.gift}</p>
                        <p>{gifted.nya}</p>
                        {(gifted.id == idSelected) && <p>{gifted.note}</p>}
                    </div>
                )
            })}
        </section>
    )
}
