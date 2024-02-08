import React, {useState, useContext} from 'react';
import styles from './SendGift.module.css'
import { DataContext } from '@/context/DataContext';
import { Timestamp } from 'firebase/firestore';

const SendGift = ({type}) => {
    const [name, setName] = useState('');
    const [isOk, setIsOk] = useState('');
    const [msg, setMsg] = useState('');
    const [sentStatus, setSentStatus] = useState(true);
    const {idSelected, selectGift, addGifted, gift} = useContext(DataContext);

    const idToType = () =>{
        if(idSelected !== ''){
            setGift()
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(idSelected === ''){
            setIsOk('noSelected')
        }else if(name === ''){
            setIsOk('noName')
        }else{
            const now = new Date()
            now.setHours(10, 0, 0, 0)
            const timestamp = Timestamp.fromDate(now);
            const data = {
                "date": timestamp,
                "note": msg,
                "nya": name,
                "gid": gift.id,
                "gift": gift.gName
            }
            await addGifted(data);
            ((transferNum !== '') ? idToType() : await selectGift());
            setSentStatus(false);
            setIdSelected('');
        }
    }


    return (
        <>
            {sentStatus ? ( 
            <form onSubmit={(event) => handleSubmit(event)} className={`${styles.formBlock}`}>
            {idSelected == '' ? (
                <p className={`${styles.selectedName}`}>Aún no has seleccionado un regalo</p>
            ): <p className={`${styles.selectedName}`}>Has seleccionado: {gift.gName}</p>}
            <div className={`${styles.inputNameBlock}`}>
                <label htmlFor="exampleInputEmail1">Nombre y Apellido:</label>
                <input type="name" id="IngresarNombre" aria-describedby="emailHelp" placeholder="Ingresar Nombre" onChange={e => setName(e.target.value)}/>
            </div>
            <div className={`${styles.inputNoteBlock}`}>
                <label htmlFor="exampleInputEmail1">Si quieres puedes dejarnos un mensaje (opcional)</label>
                <input type="msg" id="IngresarMensaje" aria-describedby="emailHelp" placeholder="" onChange={e => setMsg(e.target.value)}/>
            </div>
            {isOk === 'noName' && (
                <div className={`${styles.alertNotSelected}`} role="alert">
                    <div>
                        Agrega tu nombre para confirmar el regalo
                    </div>
                </div>
            )}
            {isOk === 'noSelected' && (
                <div className={`${styles.alertNotSelected}`} role="alert">
                    <div>
                        Selecciona un regalo para continuar
                    </div>
                </div>
            )}
            <button type="submit" className="btn btn-primary submitBtn">CONFIRMAR</button>
            </form>
            ) : (<p className='thankMsg'><b>Muchas gracias!!!</b> Tu obsequio nos ayuda mucho ❤️​</p>)}
        </>
    );
}

export default SendGift;