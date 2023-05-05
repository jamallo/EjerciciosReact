import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Tarea } from "../../models/tarea.class";
import { NIVELES } from "../../models/niveles.enum";


const ComponentesTarea = ({ tarea, completado, eliminada}) => {

    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log('Tarea: {tarea.nombre} está siendo desmontada')
        };
    }, [tarea]);


    function nivelTarea () {
        switch (tarea.nivel) {
            case NIVELES.NORMAL:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {tarea.nivel}
                        </span>
                    </h6>)

            case NIVELES.URGENTE:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-warning">
                            {tarea.nivel}
                        </span>
                    </h6>)

            case NIVELES.IMPORTANTE:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-danger">
                            {tarea.nivel}
                        </span>
                    </h6>)

            case NIVELES.PASABLE:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {tarea.nivel}
                        </span>
                    </h6>)

            default:
                break;
        }
    }

    function tareaCompletadaIcono () {
        if(tarea.completado) {
            return(<i onClick={() => completado(tarea)} className="bi-toggle-on task-action" style={{color: 'green', fontWeight: 'bold'}}></i>)
        } else {
            return(<i onClick={() => completado(tarea)} className="bi-toggle-off task-action" style={{color: 'grey'}}></i>)
        }
    }

    const tareaCompletada = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    const tareaPendiente = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className="fw-normal" style={tarea.completado ? tareaCompletada : tareaPendiente}>
            <th>
                <span className="ms-2">{tarea.nombre}</span>
            </th>
            <td className="align-middle">
                <span>{tarea.descripcion}</span>
            </td>
            <td className="align-middle">
                <span>{nivelTarea()}</span>
            </td>
            <td className="align-middle">
                {tareaCompletadaIcono()}
                <i className="bi-trash task-action" style={{color: 'tomato', fontSize: '20px'}} onClick={() => eliminada(tarea)}></i>
            </td>
        </tr>
    );
};

ComponentesTarea.protoType = {
    tarea: PropTypes.instanceOf(Tarea).isRequired,
    completado: PropTypes.func.isRequired,
    eliminada: PropTypes.func.isRequired
};

export default ComponentesTarea;