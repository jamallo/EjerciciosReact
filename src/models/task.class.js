import { LEVELS } from "./levels.enum";

export class Task {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;
    level = LEVELS.NORMAL;

    constructor(nombre, apellido, email, conectado, level) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}