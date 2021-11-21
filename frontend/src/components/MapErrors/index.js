// frontend/src/components/Maps/index.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import ErrorMaps from './Maps';

const ErrorMapContainer = ({allMarkers}) => {
  const key = useSelector((state) => state.maps.key);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  return (
    <div className="map">
      {/* <AllMaps apiKey={key} BusinessLat={BusinessLat} BusinessLng={BusinessLng} /> */}
      <ErrorMaps apiKey={key} allMarkers={allMarkers}/>
    </div>
  );
};

export default ErrorMapContainer;
