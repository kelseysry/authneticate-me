// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 37.772,
  lng: -122.214
}

const position = {
  lat: 37.772,
  lng: -122.214
}

const onLoad = marker => {
  console.log('marker: ', marker)
}



const Maps = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      zoom={10}
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






{/* <GoogleMap
mapContainerStyle={containerStyle}
center={center}
zoom={4}
/> */}
