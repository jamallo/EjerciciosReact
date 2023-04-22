import React from "react";
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";

const TaskComponent = ({ task}) => {
    return (
        <div>
            <h2>
                Nombre: { task.nombre }
                <br></br>
                Apellido: { task.apellido }
            </h2>
            <h3>
                Email: { task.email }
            </h3>
            <h4>
                Este contacto está: { task.conectado ? 'CONECTADO' : 'DESCONECTADO' }
            </h4>
        </div>
    );
    };

    TaskComponent.propTypes = {
        task: PropTypes.instanceOf(Task)
    };

export default TaskComponent;