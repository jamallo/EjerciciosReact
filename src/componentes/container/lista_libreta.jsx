import React, { useEffect, useState } from "react";
import { Libreta } from "../../models/libreta.class";
import ComponenteLibreta from '../pure/libreta';
import FormularioLibreta from "../pure/forms/formularioLibreta";

const ComponenteListaLibreta = () => {
    const defaultLibreta1 = new Libreta('Alba', 'Prado Fernández', 'alba@jamallo.es', true);
    const defaultLibreta2 = new Libreta('María', 'Prado Fernández', 'maria_trapaga@gmail.com', false);


    const [libretas, setLibretas] = useState([defaultLibreta1, defaultLibreta2]);
    const [cargando, setCargando] = useState([true]);

    useEffect(() => {
        console.log('Estado de la libreta modificada');
        setCargando(false);
        return () => {
            console.log('El componente de la lista de libreta está siendo montada ...');
        };
    }, [libretas])

    function libretaConectar(libreta) {
        const indice = libretas.indexOf(libreta);
        const tempLibretas = [...libretas];
        tempLibretas[indice].conectado = !tempLibretas[indice].conectado;
        setLibretas(tempLibretas);
    }

    function libretaEliminado(libreta) {
        const indice = libretas.indexOf(libreta);
        const tempLibretas = [...libretas];
        tempLibretas.splice(indice, 1);
        setLibretas(tempLibretas);
    }

    function addLibreta(libreta) {
        const indice = libretas.indexOf(libreta);
        const tempLibretas = [...libretas];
        tempLibretas.push(libreta);
        setLibretas(tempLibretas);
    }

    return (
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3">
                    <h5> Contactos:</h5>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: '100%'}}>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {libretas.map((libreta, indice) => {
                                return (
                                    <ComponenteLibreta
                                        key={indice}
                                        libreta={libreta}
                                        conectar={libretaConectar}
                                        eliminado={libretaEliminado}>
                                    </ComponenteLibreta>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                            <FormularioLibreta add={addLibreta}></FormularioLibreta>
            </div>
        </div>
    )
}

export default ComponenteListaLibreta;