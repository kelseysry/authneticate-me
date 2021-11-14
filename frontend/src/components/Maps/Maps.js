// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px',
};

// const center = {
//   lat: 11.540525241506499,
//   lng: 104.9152178929382
// }


// const position = {
//   lat: 11.540525241506499,
//   lng: 104.9152178929382
// }

const onLoad = marker => {
  console.log('marker: ', marker)
}

const Maps = ({ apiKey, BusinessLat, BusinessLng }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const center = {
    lat: +BusinessLat,
    lng: +BusinessLng
  }

  // console.log("MapsBusi", BusinessLat)

  const position = {
    lat: +BusinessLat,
    lng: +BusinessLng
  }


  return (
    <>
      {isLoaded && (
        <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      zoom={16}
      center={center}
      >
      <Marker
        onLoad={onLoad}
        position={position}
      />
</GoogleMap>
      )}


    </>
  );
};

export default React.memo(Maps);
