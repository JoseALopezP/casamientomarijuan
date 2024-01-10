import styles from './GiftSelector.module.css'
import { doc, getDoc } from "firebase/firestore";

async function getGiftList(){
    const docRef = doc(db, "giftList");
    const giftList = await getDoc(docRef);   
    return giftList
}

export async function GiftSelector () {
    const giftList = await getGiftList()   
    return (
        <section className={`${styles.giftSelectorBlock}`}>
            {giftList.map((gift) => {
                return(<p>{gift.gName}</p>)
            })}
        </section>
    )
}