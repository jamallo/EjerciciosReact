import React, { useEffect, useState } from 'react';

const ChlockHook = () => {

    const inicio = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Alba', 
        apellidos: 'Prado Fernández'
    };

    

    const [tick, setTick] = useState (inicio);

    useEffect(() => {

    setInterval( () => {
        setTick(
            {
                fecha: new Date(),
                edad: inicio.edad +1
            }
        )
    }, 1000)
    });
    return (
        <div>
            <h1>Inicial</h1>
            <h2>Fecha: {tick.fecha}</h2>
            <h2>Edad: {tick.edad}</h2>
            <h3>Nombre: {tick.nombre}</h3>
            <h3>Apellidos: {tick.apellidos}</h3>
            
        </div>
    );
}

export default ChlockHook;
