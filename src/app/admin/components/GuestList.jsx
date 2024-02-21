'use client'
import styles from './GuestList.module.css'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/context/DataContext';

export default function GuestList () {
    const {guests, updateGuests, removeGuest} = useContext(DataContext);
    const [deleteGuestBlock, setDeleteGuestBlock] = useState(false)
    const [deleteGuest, setDeleteGuest] = useState('')
    useEffect(() =>{
        updateGuests();
    }, [])
    const dateOptions = {
        year: "2-digit",
        month: 'numeric',
        day: 'numeric',
    }
    const handleDelete = (g) =>{
        setDeleteGuestBlock(true)
        setDeleteGuest(g)
    }
    const handleConfirmDelete = () =>{
        removeGuest(deleteGuest.id)
        console.log(deleteGuest)
        setDeleteGuestBlock(false)
    }
    return (
        <section className={`${styles.guestListSection}`}>
            {deleteGuestBlock && (
                <div className={`${styles.deleteBlock}`}>
                    <p className={`${styles.deleteExplained}`}>Se eliminarán los siguientes invitados:</p>
                    {deleteGuest.guests.map((itm) =>{
                        return(
                            <p key={itm.id}>{itm.name} {itm.lastName}</p>
                        )
                    })}
                    <button className={`${styles.deleteButtons}`} onClick={() => handleConfirmDelete()}>ELIMINAR</button>
                    <button className={`${styles.deleteButtons} ${styles.cancelButtons}`}  onClick={() => setDeleteGuestBlock(false)}>CANCELAR</button>
                </div>
            )} 
            {guests && guests.map((guest)=>{
                return(
                    <div key={guest.id} className={ guest.after ? `${styles.guestBlock} ${styles.guestBlockAfter}` : `${styles.guestBlock} ${styles.guestBlockDinner}`}>
                        <div className={`${styles.dateDelete}`}>
                            <p className={`${styles.guestDate}`}>{guest.date.toDate().toLocaleDateString(undefined, dateOptions)}</p>
                            <button onClick={() => handleDelete(guest)} className={`${styles.deleteButton}`}>
                                X
                            </button>
                        </div>
                        <div className={`${styles.guestsBlock}`}>
                            {guest.guests.map(itm =>{
                                return(
                                    <div key={itm.dni} className={`${styles.guestLine}`}>
                                        <p className={`${styles.guestName}`}>{itm.name}{itm.lastName}</p>
                                        <p className={`${styles.guestDiet}`}>{itm.diet}</p>
                                        <p className={`${styles.guestDni}`}>{itm.dni}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
