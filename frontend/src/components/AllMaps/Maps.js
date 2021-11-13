// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoBox } from '@react-google-maps/api';
// import { useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
// import allMarkers from '../../data/markers';

const containerStyle = {
  width: '900px',
  height: '600px',
};


const onLoad = infoBox => {
  console.log('infoBox: ', infoBox)
};

const AllMaps = ({ apiKey, allMarkers }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });


  const center = {
    // lat: 11.540526555498468,
    // lng: 104.91522593956448
    lat: 11.560114866039607,
    lng: 104.91626530485476
  }



  const options = { closeBoxURL: '', enableEventPropagation: true };


  return (
    <>
      {isLoaded && (
        <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      zoom={14}
      center={center}
      >
        {
          allMarkers.map((marker,idx) => (


            <InfoBox
            onLoad={onLoad}
            options={options}
            position={marker.position}
          >
                  <div style={{ backgroundColor: 'black', opacity: 0.75, padding: 3, color: 'white'}}>
              <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                {marker.business}
              </div>
            </div>
          </InfoBox>


          ))}

{allMarkers.map((marker, idx) => (
      <Marker
      onLoad={onLoad}

        key={idx}
        position={marker.position}
        name={marker.name}



      />
    ))}


</GoogleMap>
      )}


    </>
  );
};

export default React.memo(AllMaps);
