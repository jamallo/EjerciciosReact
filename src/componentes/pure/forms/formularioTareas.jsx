import React, { useEffect, useRef } from "react";
import { Tarea } from "../../../models/tarea.class";
import { NIVELES } from "../../../models/niveles.enum";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from 'prop-types'

const RegistrarFormulario = ({add, length}) => {

    const nombreRef = useRef('');
    const descripcionRef = useRef('');
    const nivelRef = useRef ('');

    function anadirTarea(e) {
        e.preventDefault();
        const nuevaTarea = new Tarea(
            nombreRef.current.value,
            descripcionRef.current.value,
            false,
            nivelRef.current.value
        );

        add(nuevaTarea);
    }
    

    const valoresIniciales = {
        nombre: '',
        descripcion: '',
        completado: false,
        nivel: NIVELES.NORMAL
    }

    const registro = Yup.object().shape(
        {
            nombre: Yup.string()
            .min(3, 'Nombre de tarea muy corta')
            .max(24, 'Nombre de tarea muy largo')
            .required('Nombre de tarea requerido'),
            descripcion: Yup.string()
            .min(3, 'Descripción de tarea demasiado corta')
            .required('Descripción de tarea requerida'),
            completado: Yup.boolean(),
            nivel: Yup.string()
            .oneOf([NIVELES.NORMAL, NIVELES.URGENTE, NIVELES.IMPORTANTE, NIVELES.PASABLE], 'Debes seleccionar un nivel de tarea')
            .required('Nivel es requerido'),
        }
    )

    const submit = (values, actions) => {
        alert('Tarea registrada')
    }

    return (
        <div>
            <h4>Registro de tareas</h4>
            <Formik
                initialValues={valoresIniciales}
                validationSchema={registro}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    anadirTarea();
                }}>
                    {({values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur}) => (
                            <Form onSubmit={anadirTarea}>
                                <div>
                                <label ref={nombreRef} htmlFor="nombre"> Nombre de la tarea </label>
                                <Field id="nombre" type="text" name="nombre" placeholder="Nombre de la tarea"/>

                                {
                                    errors.nombre && touched.nombre &&
                                    (
                                        <ErrorMessage name="nombre" component='div'></ErrorMessage>
                                    )
                                }
                                </div>
                                <div>
                                <label ref={descripcionRef} htmlFor="descripcion"> Descripción </label>
                                <Field id="descripcion" type="text" name="descripcion" placeholder="Descripción de la tarea"/>

                                {
                                    errors.descripcion && touched.descripcion &&
                                    (
                                        <ErrorMessage name="descripcion" component='div'></ErrorMessage>
                                    )
                                }
                                </div>
                                <div>
                                <label htmlFor="completado"> Opción completado
                                <Field id="completado" type="checkbox" name=" completado"/>
                                {`${values.completado}`}
                                </label>
                                </div>
                                <div>
                                <label ref={nivelRef} htmlFor="nivel">Seleccionar nivel de tarea</label>
                                <Field as="select" name="nivel">
                                    <option value="NORMAL">Normal</option>
                                    <option value="URGENTE">Urgente</option>
                                    <option value="IMPORTANTE">Importante</option>
                                    <option value="PASABLE">Pasable</option>
                                </Field>
                                </div>
                                <div>
                                <button type="submit" className="btn btn-success btn-lg ms-2">
                                    {length > 0 ? 'Añade nueva tarea' : 'Crea la primera tarea'}
                                </button>
                                {isSubmitting ? (<p>Enviando tarea ...</p>) : null}
                                </div>
                            </Form>
                        )}
                </Formik>
        </div>
    );
}

RegistrarFormulario.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}


export default RegistrarFormulario;