import React, { useEffect, useState } from "react";
import ComponentesTarea from "../pure/tarea";
import { Tarea } from "../../models/tarea.class";
import { NIVELES } from "../../models/niveles.enum";
import RegistrarFormulario from "../pure/forms/formularioTareas";
import * as Yup from 'yup';


const ListaComponentesTarea = () => {
    const tarea1 = new Tarea('Tarea1', 'Descripción tarea 1', true, NIVELES.NORMAL);
    const tarea2 = new Tarea('Tarea 2', 'Descripción tarea 2', false, NIVELES.IMPORTANTE);
    const tarea3 = new Tarea('Tarea 3', 'Descripción tarea 3', false, NIVELES.URGENTE);
    const tarea4 = new Tarea('Tarea 4', 'Descripción tarea 4', true, NIVELES.PASABLE);


    const [tareas, setTareas] = useState([tarea1, tarea2, tarea3, tarea4]);
    const [cargando, setCargando] = useState([true]);

    useEffect(() => {
        console.log('Estado de tarea ha sido modificado');
        setTimeout(() => {
            setCargando(false);
        }, 2000);
        return () => {
            console.log('Componente lista de tarea está siendo desmontando ...');
        };
    }, [tareas])

    function tareaCompletada(tarea) {
        console.log('Esta tarea está completada: ', tarea);
        const index = tareas.indexOf(tarea);
        const tempTareas = [...tareas];
        tempTareas[index].completado = !tempTareas[index].completado;
        setTareas(tempTareas);
    }

    function tareaEliminada(tarea) {
        console.log('Eliminada tarea: ', tarea);
        const index = tareas.indexOf(tarea);
        const tempTareas = [...tareas];
        tempTareas.splice(index, 1);
        setTareas(tempTareas);
    }

    function anadirTarea(tarea) {
        console.log('Añadida tarea:', tarea);
        const tempTareas = [...tareas];
        tempTareas.push(tarea);
        setTareas(tempTareas);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope="col"> Título </th>
                        <th scope="col"> Descripción </th>
                        <th scope="col"> Nivel </th>
                        <th scope="col"> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    { tareas.map((tarea, index) => {
                        return (
                            <ComponentesTarea
                                key={index}
                                tarea={tarea}
                                completado={tareaCompletada}
                                eliminada={tareaEliminada}>
                            </ComponentesTarea>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tablaTareas;

    if (tareas.length > 0) {
        tablaTareas = <Table></Table>
    } else {
        tablaTareas = (
            <div>
                <h3> No hay tareas a mostrar</h3>
                <h4> Por favor, crea una tarea</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    const divExterior = {
        display: 'flex'
    }

    return (
        <div style={divExterior}>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p3">
                        <h5> Tus tareas: </h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: '200px'}}>
                        {cargando ? (<p style={loadingStyle}>loading...</p>) : tablaTareas}
                    </div>
                </div>
            </div>
                <RegistrarFormulario add={anadirTarea} length={tareas.length}></RegistrarFormulario> 
        </div>
    );
};

export default ListaComponentesTarea;