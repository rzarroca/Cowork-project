import './SearchSpace.css';

import { useState } from 'react';
import useSearchSpace from '../../hooks/useSearchSpace';
import useFullView from '../../hooks/useFullView';
import cleanSearchObject from '../../helpers/cleanSearchObject';

import Spinner from '../../components/Spinner/Spinner';
import SearchForm from '../../components/SearchForm/SearchForm';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import ListSpacesSearch from '../../components/ListSpacesSearch/ListSpacesSearch';

import locationIcon from '../../assets/icons/bxs-location-plus 1.png';
import CenterPresentation from '../../components/CenterPresentation/CenterPresentation';
import RetrieveQueryParams from '../../helpers/RetriveQueryParams';

import listIcon from '../../assets/icons/bx-list-ul.svg';
import filterIcon from '../../assets/icons/bxs-filter-alt.svg';
import resetIcon from '../../assets/icons/bx-reset.svg';
import presentationIcon from '../../assets/icons/bxs-home.svg';
import useCenter from '../../hooks/useCenter';

export default function SearchSpace({ className }) {
  const INITIAL_SEARCH_OBJECT = RetrieveQueryParams([
    'id_centro',
    'tipo',
    'aforo',
    'dias_estancia',
    'precio_maximo',
    'precio_minimo',
    'fecha_entrada',
    'fecha_salida',
    'puntuacion_minima',
    'ordenado_por',
  ]);

  const [loading2, results, searchObject, setSearchObject, resetSearchObject] =
    useSearchSpace(INITIAL_SEARCH_OBJECT);
  const [center, loading] = useCenter(searchObject.id_centro);
  const [fullView] = useFullView();
  const [visualization, setVisualization] = useState('presentation');

  // ****************************
  // ** MAIN NAVIGATION CONFIG **
  // ****************************

  const filterButton = {
    action: () => setVisualization('filter'),
    icon: filterIcon,
    text: 'Filtrar',
  };
  const presentationButton = {
    action: () => setVisualization('presentation'),
    icon: presentationIcon,
    text: 'Presentacion',
  };
  const listButton = {
    action: () => setVisualization('list'),
    icon: listIcon,
    text: 'Lista',
  };
  const resetButton = {
    action: () => resetSearchObject(),
    icon: resetIcon,
    text: 'Resetear busqueda',
  };

  const genericButton = { path: '/', icon: locationIcon, text: 'Uno' };
  let Links = [];
  if (fullView) Links = [genericButton, genericButton, genericButton];
  else Links = [genericButton, genericButton, genericButton, genericButton];

  switch (visualization) {
    case 'presentation':
      if (fullView) Links = [filterButton, resetButton, genericButton];
      else Links = [filterButton, listButton, resetButton, genericButton];
      break;
    case 'filter':
      if (fullView) Links = [presentationButton, resetButton, genericButton];
      else Links = [presentationButton, listButton, resetButton, genericButton];
      break;
    case 'list':
      if (fullView) Links = [presentationButton, resetButton, genericButton];
      else
        Links = [presentationButton, filterButton, resetButton, genericButton];
      break;

    default:
      break;
  }
  const fullViewJSX = {
    presentation: (
      <CenterPresentation className="mainSectionRightArticle" center={center} />
    ),
    filter: (
      <SearchForm
        type="space"
        searchObject={searchObject}
        setSearchObject={setSearchObject}
        services={[]}
        results={results}
        className="mainSectionRightArticle"
      />
    ),
    list: (
      <CenterPresentation className="mainSectionRightArticle" center={center} />
    ),
  };
  const singleViewJSX = {
    presentation: (
      <div className={className + ' mainSectionSingleView'}>
        <CenterPresentation
          className="mainSectionLeftArticle"
          center={center}
        />
        <MainNavigation links={Links}></MainNavigation>
      </div>
    ),
    filter: (
      <div className={className + ' mainSectionSingleView'}>
        <SearchForm
          type="space"
          searchObject={searchObject}
          setSearchObject={setSearchObject}
          services={[]}
          results={results}
          className="mainSectionLeftArticle"
        />
        <MainNavigation links={Links}></MainNavigation>
      </div>
    ),
    list: (
      <div className={className + ' mainSectionSingleView'}>
        <ListSpacesSearch
          results={results}
          searchObject={cleanSearchObject(searchObject)}
          setSearchObject={setSearchObject}
          className="mainSectionLeftArticle"
        ></ListSpacesSearch>
        <MainNavigation links={Links}></MainNavigation>
      </div>
    ),
  };

  // *********
  // ** JSX **
  // *********

  return loading || loading2 ? (
    <Spinner />
  ) : (
    <>
      {fullView ? (
        <div className={className + ' mainSectionFullView'}>
          <ListSpacesSearch
            results={results}
            searchObject={cleanSearchObject(searchObject)}
            setSearchObject={setSearchObject}
            className="mainSectionLeftArticle"
          ></ListSpacesSearch>
          <MainNavigation links={Links}></MainNavigation>
          {fullViewJSX[visualization]}
        </div>
      ) : (
        <>{singleViewJSX[visualization]}</>
      )}
    </>
  );
}
