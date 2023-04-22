import React from "react";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
    const defaultTask = new Task('Alba', 'Prado', 'alba@jamallo.es', false);


    return (
        <div>
            <div>
                Datos de contacto:
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;