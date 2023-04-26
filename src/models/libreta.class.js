export class Libreta {
    nombre = '';
    apellidos = '';
    email = '';
    conectado = false;

    constructor(nombre, apellidos, email, conectado){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.conectado = conectado;
    }

}