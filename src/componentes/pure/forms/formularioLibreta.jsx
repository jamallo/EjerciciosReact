import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Libreta } from "../../../models/libreta.class";


const FormularioLibreta = ({add}) => {

    const nombreRef = useRef('');
    const apellidosRef = useRef('');
    const emailRef = useRef('');

    function addLibreta(e) {
        e.preventDefault();
        const newLibreta = new Libreta(
            nombreRef.current.value,
            apellidosRef.current.value,
            emailRef.current.value,
            false
        );
        add(newLibreta);
    }
    return (
    <form onSubmit={addLibreta} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nombreRef} id="inputNombre" type="text" className='form-control form-control-lg' placeholder="Nombre" />
            <input ref={apellidosRef} id="inputApellidos" type="text" className='form-control form-control-lg' placeholder="Apellidos" />
            <input ref={emailRef} id="inputEmail" type="text" className='form-control form-control-lg' placeholder="E-mail" />
        </div>
        <button type="submit" className='btn btn-success btn-lg ms-2'>Añadir</button>
    </form>
    );
}

FormularioLibreta.protoTypes = {
    add: PropTypes.func
}

export default FormularioLibreta;