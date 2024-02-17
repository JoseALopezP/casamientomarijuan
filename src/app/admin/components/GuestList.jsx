import styles from './GuestList.module.css'
import { useContext, useEffect } from 'react'
import { DataContext } from '@/context/DataContext';

export default function GuestList () {
    const {guests, updateGuests} = useContext(DataContext);
    useEffect(() =>{
        updateGuests();
    }, [])
    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    return (
        <section className={`${styles.guestListSection}`}>
            {guests && guests.map((guest)=>{
                return(
                    <div id={guest.id} className={`${styles.guestBlock}`}>
                        <p>{guest.date.toDate().toLocaleDateString(undefined, dateOptions)}</p>
                        {guest.guests.map(itm =>{
                            return(
                                <div className={`${styles.guestLine}`}>
                                    <p>{itm.name}</p>
                                    <p>{itm.LastName}</p>
                                    <p>{itm.diet}</p>
                                    <p>{itm.dni}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}
