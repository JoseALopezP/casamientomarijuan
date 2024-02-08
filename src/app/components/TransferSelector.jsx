import React, {useState, useContext} from 'react';
import styles from './SendGift.module.css'
import { DataContext } from '@/context/DataContext';
import { Timestamp } from 'firebase/firestore';

const TransferSelector = ({type}) => {
    const [name, setName] = useState('');
    const [comprobante, setComprobante] = useState('');
    const [isOk, setIsOk] = useState('');
    const [msg, setMsg] = useState('');
    const [sentStatus, setSentStatus] = useState(true);
    const {addTransfered} = useContext(DataContext);

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(name === ''){
            setIsOk('noName')
        }else if(comprobante === ''){
            setIsOk('noComprobante')
        } else{
            const now = new Date()
            now.setHours(10, 0, 0, 0)
            const timestamp = Timestamp.fromDate(now);
            const data = {
                "date": timestamp,
                "note": msg,
                "nya": name,
                "nComprobante": comprobante
            }
            await addTransfered(data);
            setSentStatus(false);
        }
    }


    return (
        <>
            {sentStatus ? ( 
            <form onSubmit={(event) => handleSubmit(event)} className={`${styles.formBlock}`}>
            <div className={`${styles.inputBlock} ${styles.inputNameBlock}`}>
                <label htmlFor="exampleInputEmail1">Nombre y Apellido:</label>
                <input type="name" id="IngresarNombre" placeholder="Ingresar Nombre" onChange={e => setName(e.target.value)}/>
            </div>
            <div className={`${styles.inputBlock} ${styles.inputNoteBlock}`}>
                <label htmlFor="exampleInputEmail1">N° de comprobante o monto</label>
                <input type="comprobante" id="IngresarComprobante" placeholder="123..." onChange={e => setComprobante(e.target.value)}/>
            </div>
            <div className={`${styles.inputBlock} ${styles.inputNoteBlock}`}>
                <label htmlFor="exampleInputEmail1">Notita (opcional)</label>
                <textarea name="Text1" cols="10" rows="3" type="msg" id="IngresarMensaje" placeholder="Disfruten..." onChange={e => setMsg(e.target.value)}/>
            </div>
            {isOk === 'noName' && (
                <div className={`${styles.alertNotSelectedBlock}`} role="alert">
                    Agrega tu nombre para confirmar el regalo
                </div>
            )}
            {isOk === 'noComprobante' && (
                <div className={`${styles.alertNotSelectedBlock}`} role="alert">
                    Escribe el monto o comprobante para saber quién nos lo mandó
                </div>
            )}
            <button type="submit" className={`${styles.submitButton}`}>CONFIRMAR</button>
            </form>
            ) : (<p className={`${styles.thanksMsg}`}><b>Muchas gracias!!!</b> Tu obsequio nos ayuda mucho ❤️​</p>)}
        </>
    );
}

export default TransferSelector;