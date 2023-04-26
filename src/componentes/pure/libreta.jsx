import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Libreta } from "../../models/libreta.class";

import '../../Styles/task.scss'

const ComponenteLibreta = ({libreta, conectar, eliminado}) => {

    useEffect(() => {
        console.log('Libreta creada')
        return () => {
            console.log('Libreta: {libreta.nombre} está siendo montada')
        };
    }, [libreta]);

function iconolibretaconectado() {
     if(libreta.conectado) {
         return (<i onClick={() => conectar(libreta)} className='bi-toggle-on task-action' style={{color: 'green', fontWeight: 'bold'}}></i>)
     } else {
         return(<i onClick={() => conectar(libreta)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
     }
}

return (
    <tr className="fw-normal">
        <th width="300px">
            <span className="ms-2">{libreta.nombre}</span>
        </th>
        <td className="align-middle" width="500px">
            <span>{libreta.apellidos}</span>
        </td>
        <td className="align-middle" width="500px">
            <span>{libreta.email}</span>
        </td>
        <td className="align-middle" width="300px">
            {iconolibretaconectado()}
            {/* ?
            (<i className="bi-toggle-on" style={{color: "green", fontWeight: "bold"}}></i>)
            :
            (<i className="bi-toggle-off" style={{color: "grey"}}></i>) */}
        </td>
        <td className="align-middle" width="300px">
            <i className='bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}} onClick={() => eliminado(libreta)}></i>
        </td>
    </tr>
        

);
};

ComponenteLibreta.protoTypes = {
    libreta: PropTypes.instanceOf(Libreta),
    conectado: PropTypes.func,
    eliminado: PropTypes.func
}

export default ComponenteLibreta;


