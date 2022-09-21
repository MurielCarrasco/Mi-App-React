import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Form = () => {
    //const [datosorm, setDatosForm] = useState(initialState);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [talle, setTalle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    const handleChangeTalle = (e) => {
        setTalle(e.target.value);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

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
                <select value={talle} onChange={handleChangeTalle}>
                    <option value="Large">L</option>
                    <option value="Medium">M</option>
                    <option value="Small">S</option>
                </select>
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;