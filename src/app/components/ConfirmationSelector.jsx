import React, {useState, useContext} from 'react';
import styles from './SendGift.module.css'
import { DataContext } from '@/context/DataContext';
import { Timestamp } from 'firebase/firestore';

const ConfirmationSelector = ({quantity, dinner}) => {
    const [guests, setGuests] = useState([])
    const [left, setleft] = useState(quantity)
    const [diet, setDiet] = useState('')
    const [dni, setDni] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sentStatus, setSentStatus] = useState(true);
    const {addGuest} = useContext(DataContext);

    const handlePush = () =>{
        document.getElementById('confirmationForm').reset();
        const newGuest = {
            name: name,
            lastName: lastName,
            after: (dinner !== 'dcena' ? true : false),
            dni: dni,
            diet: diet
        }
        setGuests([...guests, newGuest])
        setleft(left -1)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const now = new Date()
        const timestamp = Timestamp.fromDate(now);
        const newGuest = {
            name: name,
            lastName: lastName,
            after: (dinner == 'dcena' ? true : false),
            dni: dni,
            diet: diet
        }
        const data = await {
            "date": timestamp,
            "guests": [...guests, newGuest]
        }
        await addGuest(data);
        setSentStatus(false);
        setleft(left -1)
    }

    return (
        <>
            {(left == 1) ? (<p className={`${styles.selectedName}`}>Queda {left} lugar para ti</p>) : (<p className={`${styles.selectedName}`}>Quedan {left} lugares para ti</p>)}
            {(sentStatus) ? (
            <form id='confirmationForm' onSubmit={(event) => handleSubmit(event)} className={`${styles.formBlock}`}>
                <div className={`${styles.inputBlock} ${styles.inputNameBlock}`}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="name" id="IngresarNombre" placeholder="Ingresar Nombre" onChange={e => setName(e.target.value)}/>
                </div>
                <div className={`${styles.inputBlock} ${styles.inputNameBlock}`}>
                    <label htmlFor="last-name">Apellido:</label>
                    <input type="apellido" id="IngresarApellido" placeholder="Ingresar Apellido" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className={`${styles.inputBlock} ${styles.inputNoteBlock}`}>
                    <label htmlFor="exampleInputEmail1">DNI:</label>
                    <input type="dni" id="IngresarDni" placeholder="123..." onChange={e => setDni(e.target.value)}/>
                </div>
                <div className={`${styles.inputBlock} ${styles.inputNameBlock}`}>
                    <label htmlFor="exampleInputEmail1">Ingresa dieta especial (opcional):</label>
                    <input type="lastName" id="IngresarApellido" onChange={e => setDiet(e.target.value)}/>
                </div>
                {(left > 1) && <button onClick={handlePush} type="reset" className={`${styles.submitButton}`} >AGREGAR</button>}
            <button type="submit" className={`${styles.submitButton}`}>LISTO <br/><b>(NO AGREGAR MÁS)</b></button>
            </form>
            ) : (<p className={`${styles.thanksMsg}`}><b>Confirmado!!!</b> Te esperamos ❤️​</p>)}
        </>
    );
}

export default ConfirmationSelector;