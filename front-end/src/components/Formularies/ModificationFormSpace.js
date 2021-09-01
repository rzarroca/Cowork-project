import './registrationForm.css';
import { useState, useMemo } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Dialog } from '@material-ui/core';
import useDialog from '../../hooks/useDialog';

import {
    getIncludedServices,
    getExtraServices,
} from '../../helpers/servicesHelper';

const {
    REACT_APP_API_LOCAL_SERVER_HOST: host,
    REACT_APP_API_LOCAL_SERVER_PORT: port,
} = process.env;

export default function ModificationFormSpace({
    className,
    spaceData,
    setSpace,
}) {
    let history = useHistory();
    const { open, handleClickOpen, handleClose } = useDialog();

    console.log(spaceData);

    const INITIAL_FORM_INFO = useMemo(() => {
        return {
            nombre: spaceData.nombre,
            tipo: spaceData.tipo,
            precio: spaceData.precio,
            reserva_minima: spaceData.reserva_minima,
            capacidad_maxima: spaceData.capacidad_maxima,
            descripcion: spaceData.descripcion,
            visible: spaceData.visible,
        };
    }, [spaceData]);

    const [formData, setFormData] = useState(INITIAL_FORM_INFO);
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [modification, setModification] = useState(false);

    const handleInputChange = (event, prop) => {
        setFormData({
            ...formData,
            [prop]: event.target.value,
        });
        if (modification === false) setModification(true);
    };

    async function deleteSpace(e) {
        e.preventDefault();
        try {
            const route = `${host}:${port}/api/spaces/?id=${spaceData.id}`;
            const response = axios.delete(route);

            if (response.status === 200) {
                setError('Espacio eliminado');
                setTimeout(() => {
                    setMessage('');
                    Redirect('home');
                }, 2000);
                setModification(false);
            }
        } catch (error) {
            setError('Ha habido algun error al eliminar el espacio.');
            setTimeout(() => {
                setError('');
            }, 3000);

            return;
        }
    }

    async function performSubmit(e) {
        e.preventDefault();
        try {
            if (!modification) {
                setError(
                    'Debes tener habilitada la modificación antes de poder guardar los cambios.'
                );
                setTimeout(() => {
                    setError('');
                }, 5000);
                return;
            }

            setMessage('Enviando datos');

            const route = `${host}:${port}/api/spaces/?id=${spaceData.id}`;

            const formDataObject = {
                ...formData,
                visible: Number(formData.visible),
                servicios: getIncludedServices(spaceData.listado_servicios),
                servicios_extra: getExtraServices(spaceData.listado_servicios),
            };

            const response = await axios.put(route, formDataObject);
            if (response.status === 200) {
                setMessage('Datos del espacio modificados.');
                setSpace({
                    ...spaceData,
                    ...formData,
                });
                setTimeout(() => {
                    setMessage('');
                }, 2000);
                setModification(false);
            }
        } catch (error) {
            setMessage('');

            const {
                data: { message },
            } = error.response;

            message ? setError(message) : setError(error.message);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }

    return (
        <article className={`${className}`}>
            <form className="registerForm" onSubmit={(e) => performSubmit(e)}>
                <h1 className="registerForm-title">Modificación de espacio</h1>
                <hr />
                <fieldset>
                    <label>
                        Nombre
                        <input
                            type="text"
                            onChange={(event) =>
                                handleInputChange(event, 'nombre')
                            }
                            placeholder=" Nombre espacio"
                            required
                            maxLength="20"
                            minLength="1"
                            value={formData.nombre}
                        />
                    </label>

                    <label htmlFor="tipo">
                        Tipo
                        <select
                            id="tipo"
                            value={formData.tipo}
                            onChange={(event) =>
                                handleInputChange(event, 'tipo')
                            }
                            required
                        >
                            <option value="Mesa Flex">Mesa Flex</option>
                            <option value="Mesa Fija">Mesa Fija</option>
                            <option value="Despacho">Despacho</option>
                            <option value="Sala de reuniones">
                                Sala de reuniones
                            </option>
                        </select>
                    </label>

                    <label>
                        Precio
                        <input
                            type="number"
                            onChange={(event) =>
                                handleInputChange(event, 'precio')
                            }
                            placeholder="20.00"
                            required
                            step="0.50"
                            min="1"
                            value={formData.precio}
                        />
                        €/dia
                    </label>

                    <label>
                        Reserva mínima
                        <input
                            type="number"
                            onChange={(event) =>
                                handleInputChange(event, 'reserva_minima')
                            }
                            placeholder="2 días"
                            required
                            step="1"
                            min="1"
                            value={formData.reserva_minima}
                        />
                        dias
                    </label>

                    <label>
                        Capacidad máxima
                        <input
                            type="number"
                            onChange={(event) =>
                                handleInputChange(event, 'capacidad_maxima')
                            }
                            placeholder="1 persona"
                            required
                            step="1"
                            min="1"
                            value={formData.capacidad_maxima}
                        />
                        personas
                    </label>

                    <label htmlFor="visible">
                        Visibilidad
                        <select
                            htmlFor="visible"
                            value={formData.visible}
                            onChange={(event) =>
                                handleInputChange(event, 'visible')
                            }
                            required
                        >
                            <option value="1">Activa</option>
                            <option value="0">Oculto</option>
                        </select>
                    </label>

                    <label>
                        Descripción
                        <textarea
                            value={formData.descripcion}
                            onChange={(event) =>
                                handleInputChange(event, 'descripcion')
                            }
                            rows="5"
                            cols="30"
                            maxLength="1000"
                            placeholder=" Espacio iluminado..."
                        />
                    </label>
                </fieldset>

                <hr />
                {error && <p className="error">{error}</p>}
                {message && <p className="message">{message}</p>}

                <button disabled={!modification}>Modificar datos</button>
                <button onClick={handleClickOpen}>Eliminar espacio</button>

                <Dialog open={open} onClose={handleClose}>
                    <div className="modificationForm-dialog">
                        ¡Al eliminar el espacio perderá toda la información
                        sobre su actividad!
                        <button onClick={deleteSpace}>Eliminar</button>
                        <button onClick={handleClose}>Cancelar</button>
                    </div>
                </Dialog>
            </form>
        </article>
    );
}
