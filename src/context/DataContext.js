import React, { createContext, useState} from "react";
import {doc, updateDoc, getFirestore} from 'firebase/firestore';
import firebase_app from "@/firebase/config";
import getCollection from "@/firebase/firestore/getCollection";
import addData from "@/firebase/firestore/addData";
import removeData from "@/firebase/firestore/removeData";
export const DataContext = createContext({});

const {Provider} = DataContext;
const db = getFirestore(firebase_app)
export const DataContextProvider = ({defaultValue = [], children}) => {
    const [gifts, setGifts] = useState(defaultValue);
    const [notes, setNotes] = useState(defaultValue);
    const [gifteds, setGifteds] = useState(defaultValue);
    const [transfers, setTransfers] = useState(defaultValue);
    const [confirmeds, setGuests] = useState(defaultValue);
    const [idSelected, setIdSelected] = useState('');
    

    const updateGifts = async() => {
        setGifts(await getCollection('giftList'))
    }
    const updateNotes = async() => {
        setNotes(await getCollection('notesList'))
    }
    const updateGifteds = async() => {
        setGifteds(await getCollection('giftedList'))
    }
    const updateTransfers = async() => {
        setTransfers(await getCollection('transferedList'))
    }
    const updateGuests = async() => {
        setGuests(await getCollection('guestList'))
    }

    const selectId = (id) =>{
        if(id === idSelected){
            setIdSelected('');
        }else{
            setIdSelected(id);
        }
    }
    
    const selectGift = async() => {
        const result = doc(db, "giftList", idSelected);
        await updateDoc(result, {
        status: false
        });
        addGifted(data)
    }

    const addGift = (data) => {
        addData('giftList', data)
    }
    const addNote = (data) => {
        addData('notesList', data)
    }
    const addGifted = async(data) => {
        addData('giftedList', data)
    }
    const addTransfered = async(data) => {
        addData('transferedList', data)
    }
    const addGuest = async(data) => {
        addData('guestList', data)
    }

    const removeGift = (id) => {
        removeData('giftList', id)
    }
    const removeNote = async (id) => {
        removeData('notesList', id)
    }
    const removeGifted = async (id) => {
        const result1 = doc(db, "giftedList", id);
        const result2 = doc(db, "giftList", result1.gid);
        await updateDoc(result2, {
        status: true
        });
        await removeData('giftedList', id)
    }
    const removeTransfered = (id) => {
        removeData('transferedList', id)
    }
    const removeGuest = (id) => {
        removeData('guestList', id)
    }

    const context = {
        updateGifts,
        updateNotes,
        updateGifteds,
        updateTransfers,
        updateGuests,
        selectId,
        selectGift,
        addGift,
        addNote,
        addGifted,
        addTransfered,
        addGuest,
        removeGift,
        removeNote,
        removeGifted,
        removeTransfered,
        removeGuest,
        gifts,
        notes,
        gifteds,
        transfers,
        confirmeds,
        idSelected
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}