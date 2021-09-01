import '../../css/presentation.css';
import './spacePresentation.css';
import { useState, useMemo, lazy } from 'react';

import { SpaceData } from '../SpaceData/SpaceData';
import DisplaySelector from '../DisplaySelector/DisplaySelector';

import infoIcon from '../../assets/icons/bx-info-circle.svg';
import editIcon from '../../assets/icons/bx-edit-alt.svg';

const ModificationFormSpace = lazy(() =>
    import('../Formularies/ModificationFormSpace')
);

export default function SpacePresentation({
    className,
    spaceData,
    setSpace,
    reservation,
    setReservation,
}) {
    const [visualization, setVisualization] = useState('data');

    const visualizationsButtons = useMemo(() => {
        return spaceData.owner
            ? [
                  {
                      value: 'data',
                      icon: infoIcon,
                      text: 'visualizar datos',
                  },
                  {
                      value: 'edit',
                      icon: editIcon,
                      text: 'modificar datos',
                  },
              ]
            : [];
    }, [spaceData]);

    const visualizations = {
        data: (
            <SpaceData
                spaceData={spaceData}
                reservation={reservation}
                setReservation={setReservation}
            />
        ),
        edit: (
            <ModificationFormSpace spaceData={spaceData} setSpace={setSpace} />
        ),
    };

    return (
        <article className={className + ' presentation'}>
            <DisplaySelector
                visualizationsButtons={visualizationsButtons}
                setVisualization={setVisualization}
                visualization={visualization}
            />
            <h3 className="presentationName">{`${spaceData.nombre} - ${spaceData.tipo} `}</h3>
            {visualizations[visualization]}
        </article>
    );
}
