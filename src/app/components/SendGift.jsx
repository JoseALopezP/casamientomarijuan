import React, {useState, useContext} from 'react';
import styles from './SendGift.module.css'
import { DataContext } from '@/context/DataContext';
import { Timestamp } from 'firebase/firestore';

const SendGift = ({type}) => {
    const [name, setName] = useState('');
    const [isOk, setIsOk] = useState('');
    const [msg, setMsg] = useState('');
    const [sentStatus, setSentStatus] = useState(true);
    const {idSelected, updateGifts, selectId, selectGift, gift} = useContext(DataContext);

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(idSelected === ''){
            setIsOk('noSelected')
        }else if(name === ''){
            setIsOk('noName')
        }else{
            const now = new Date()
            const timestamp = Timestamp.fromDate(now);
            const data = {
                "date": timestamp,
                "note": msg,
                "nya": name,
                "gid": gift.id,
                "gift": gift.gName
            }
            await selectGift(data, gift.stock);
            await updateGifts();
            setSentStatus(false);
            selectId('');
        }
    }


    return (
        <>
            {sentStatus ? ( 
            <form onSubmit={(event) => handleSubmit(event)} className={`${styles.formBlock}`}>
            {idSelected == '' ? (
                <p className={`${styles.selectedName}`}>Aún no has seleccionado un regalo <br/> _______</p>
            ): <><p className={`${styles.selectedName}`}>Has seleccionado: <br/><b>{gift.gName}</b></p>
            <p className={`${styles.exampleText}`}>Aquí hay algunos ejemplos que nos gustaron de ese regalo</p>
            <div className={`${styles.linksBlock}`}>
                <a href={gift.link1} target="_blank">link 1</a>
                <p className={`${styles.spacer}`}>&nbsp; | &nbsp;</p>
                <a href={gift.link2} target="_blank">link 2</a>
            </div>
            </>}
            <div className={`${styles.inputBlock} ${styles.inputNameBlock}`}>
                <label htmlFor="exampleInputEmail1">Nombre y Apellido:</label>
                <input type="name" id="IngresarNombre" aria-describedby="emailHelp" placeholder="Ingresar Nombre" onChange={e => setName(e.target.value)}/>
            </div>
            <div className={`${styles.inputBlock} ${styles.inputNoteBlock}`}>
                <label htmlFor="exampleInputEmail1">Notita (opcional)</label>
                <textarea name="Text1" cols="10" rows="3" type="msg" id="IngresarMensaje" aria-describedby="emailHelp" placeholder="" onChange={e => setMsg(e.target.value)}/>
            </div>
            {isOk === 'noName' && (
                <div className={`${styles.alertNotSelectedBlock}`} role="alert">
                    Agrega tu nombre para confirmar el regalo
                </div>
            )}
            {isOk === 'noSelected' && (
                <div className={`${styles.alertNotSelectedBlock}`} role="alert">
                    Selecciona un regalo para continuar
                </div>
            )}
            <button type="submit" className={`${styles.submitButton}`}>CONFIRMAR</button>
            </form>
            ) : (<p className={`${styles.thanksMsg}`}><b>Muchas gracias!!!</b> Tu obsequio nos ayuda mucho ❤️​</p>)}
        </>
    );
}

export default SendGift;