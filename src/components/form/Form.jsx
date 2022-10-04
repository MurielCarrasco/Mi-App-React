import React from 'react';
import { useState } from 'react';
import { addDoc, collection, doc, serverTimestamp, updateDoc,} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Form = ({ cart, total, clearCart, handleId}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const order ={
            buyer: { nombre: nombre, apellido: apellido},
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders');
       

        addDoc(orderCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateproducto();
        });
    };


    const updateproducto = () => {
        const orderDoc = doc(db, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
        
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;