import React, { createContext, useState} from "react";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';
import getCollection from "@/firebase/firestore/getCollection";
import db from '../services/firebase';
export const GListContext = createContext({});

const {Provider} = DataContext;

export const DataContext = ({defaultValue = [], children}) => {
    const [gifts, setGifts] = useState(defaultValue);
    const [notes, setNotes] = useState(defaultValue);
    const [gifteds, setGifteds] = useState(defaultValue);
    const [transfers, setTransfers] = useState(defaultValue);
    const [confirmeds, setGuests] = useState(defaultValue);
    const [idSelected, setIdSelected] = useState('');
    const collectionReference = collection(db, "askedGifts");

    const updateGifts = async() => {
        setGifts(getCollection('giftList'))
    }
    const updateNotes = async() => {
        setNotes(getCollection('giftList'))
    }
    const updateGifteds = async() => {
        setGifteds(getCollection('giftedList'))
    }
    const updateTransfers = async() => {
        setTransfers(getCollection('giftList'))
    }
    const updateGuests = async() => {
        setGuests(getCollection('guestList'))
    }

    const selectId = (id) =>{
        if(id === idSelected){
            setIdSelected('');
        }else{
            setIdSelected(id);
        }
    }
    const selectGift = async() => {
        const result = doc(db, "askedGifts", idSelected);
        await updateDoc(result, {
        status: false
        });
    }

    const addGift = async(data) => {
        try {
            await addDoc(collectionReference, data);
        } catch (error) {
            console.log(error)
        }
    }

    const removeGift = async (id) => {
        try{
            await deleteDoc(doc(db, 'askedGifts', id))
            await updateGList();
        }catch (error){
            console.log(error)
        }
    }
    const context = {
        addGift,
        updateGList,
        selectGift,
        gList,
        idSelected,
        selectId, 
        setIdSelected,
        removeGift
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}