import { NIVELES } from "./niveles.enum";

export class Tarea {
    nombre = '';
    descripcion = '';
    completado = false;
    nivel = NIVELES.NORMAL;

    constructor(nombre, descripcion, completado, nivel){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.completado = completado;
        this.nivel = nivel;
    }

}