// frontend/src/components/Maps/index.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import AllMaps from './Maps';

const AllMapContainer = ({BusinessLat, BusinessLng}) => {
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
      <AllMaps apiKey={key}/>
    </div>
  );
};

export default AllMapContainer;
