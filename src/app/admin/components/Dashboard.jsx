import styles from './Dashboard.module.css'
import { DataContext } from '@/context/DataContext';
import { useContext, useEffect } from 'react';

export default function Dashboard () {
    const {dinner, afterDinner, transfers, gifteds, notes, updateGifteds, updateGuests, updateNotes, updateTransfers} = useContext(DataContext);
    useEffect(() =>{
        updateGifteds();
        updateTransfers();
        updateGuests();
        updateNotes();
    })
    return (
        <section className={`${styles.graphsSection}`} style={{
            "--dinner": dinner,
            "--afterDinner": afterDinner,
            "--gifteds": (gifteds.length),
            "--transfers": (transfers.length),
            "--unread": 1,
            "--read": 1
        }}>
            <div className={`${styles.guestGraphBlock} ${styles.graphBlock}`}>
                <div className={`${styles.graphIcons}`}>
                    <div className={`${styles.dinner}  ${styles.graphIcon}`}>
                        <svg className={`${styles.graph} ${styles.dinnerGraph}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{dinner.toString()}</p>
                        <small>Cena</small>                
                    </div>
                    <div className={`${styles.afterDinner} ${styles.graphIcon}`}>
                        <svg className={`${styles.graph} ${styles.afterGraph}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{afterDinner.toString()}</p>
                        <small>Después</small>
                    </div>
                </div>
                <span className={`${styles.dinnerGraphLine} ${styles.graphLine}`}></span>
                <span className={`${styles.afterDinnerGraphLine} ${styles.graphLine}`}></span>
            </div>
            <span className={`${styles.division}`}></span>
            <div className={`${styles.giftGraphBlock} ${styles.graphBlock}`}>
                <div className={`${styles.graphIcons}`}>
                    <div className={`${styles.gifts}  ${styles.graphIcon}`}>
                        <svg className={`${styles.graph} ${styles.giftGraph}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 004.875-4.875V12m6.375 5.25a4.875 4.875 0 01-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 013.182 3.182zM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 113.182-3.182z" />
                        </svg>
                        <p>{gifteds.length}</p>
                        <small>Regalos</small>
                    </div>
                    <div className={`${styles.transfers}  ${styles.graphIcon}`}>
                        <svg className={`${styles.graph} ${styles.transferGraph}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                        <p>{transfers.length}</p>
                        <small>Transferencias</small>
                    </div>
                </div>
                <span className={`${styles.giftsGraphLine} ${styles.graphLine}`}></span>
                <span className={`${styles.transferGraphLine} ${styles.graphLine}`}></span>
            </div>
            <span className={`${styles.division}`}></span>
            <div className={`${styles.notesGraphBlock} ${styles.graphBlock}`}>

                <span className={`${styles.unreadNotesLine}`}></span>
                <span className={`${styles.readNotesLine}`}></span>
            </div>

        </section>
    )
}