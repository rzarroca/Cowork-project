import { useState } from 'react';
import { useHistory } from 'react-router';
import '../Formularies/Form.css';

import {
    getIncludedServices,
    getExtraServices,
} from '../../helpers/servicesHelper';

import axios from 'axios';

import { getHost } from '../../helpers/environmentHelpers';

export default function ModificationFormSpace({ className, spaceData }) {
    const history = useHistory();

    const [services, setServices] = useState(spaceData.listado_servicios);

    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [modification, setModification] = useState(false);

    async function performSubmit(e) {
        e.preventDefault();
        try {
            setMessage('Enviando datos');

            const route = `${getHost()}/api/spaces/?id=${spaceData.id}`;

            const updateObject = {
                nombre: spaceData.nombre,
                tipo: spaceData.tipo,
                precio: spaceData.precio,
                reserva_minima: spaceData.reserva_minima,
                capacidad_maxima: spaceData.capacidad_maxima,
                descripcion: spaceData.descripcion,
                visible: spaceData.visible,
                servicios: getIncludedServices(services),
                servicios_extra: getExtraServices(services),
            };

            const response = await axios.put(route, updateObject);
            if (response.status === 200) {
                setMessage('Datos del espacio modificados.');
                setTimeout(() => {
                    setMessage('');
                    history.go(0);
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
            }, 3000);
        }
    }

    function changeCheckBox(index) {
        const changingService = services[index];
        changingService.included = !changingService.included;
        const newArray = services;
        newArray.splice(index, 1, changingService);
        if (modification === false) setModification(true);
        setServices([...newArray]);
    }

    const handleInputChange = (event, index) => {
        const changingService = services[index];
        changingService.precio = event.target.value;
        const newArray = services;
        newArray.splice(index, 1, changingService);
        if (modification === false) setModification(true);
        setServices([...newArray]);
    };

    return (
        <article className={className + ' ServicesListContainer'}>
            <form className="servicesForm" onSubmit={(e) => performSubmit(e)}>
                <fieldset>
                    <ul className="servicesList">
                        {services.map((service, index) => {
                            return (
                                <li>
                                    <label
                                        htmlFor={service.name}
                                        key={`checked-${service.name}-${service.id}`}
                                    >
                                        <input
                                            type="checkbox"
                                            id={service.name}
                                            checked={service.included}
                                            onChange={() =>
                                                changeCheckBox(index)
                                            }
                                        />
                                        <span>{service.nombre}</span>
                                    </label>

                                    <span>
                                        <input
                                            type="number"
                                            id={service.name}
                                            value={service.precio}
                                            min="0.00"
                                            max="9999.50"
                                            step="0.50"
                                            onChange={(event) =>
                                                handleInputChange(event, index)
                                            }
                                            disabled={!service.included}
                                            placeholder={
                                                service.included && '0,00'
                                            }
                                        />
                                        €/dia
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </fieldset>

                {error && <p className="error">{error}</p>}
                {message && <p className="message">{message}</p>}
                <button disabled={!modification}>Modificar datos</button>
            </form>
        </article>
    );
}
