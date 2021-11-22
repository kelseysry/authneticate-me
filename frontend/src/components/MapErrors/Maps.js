// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoBox } from '@react-google-maps/api';
// import { useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
// import allMarkers from '../../data/markers';
import './ErrorMaps.css'

const containerStyle = {
  width: '900px',
  height: '600px',

};

const smallContainerStyle = {

  width: '300px',
  height: '400px',
};


const onLoad = infoBox => {
  // console.log('infoBox: ', infoBox)
};

const ErrorMaps = ({ apiKey, allMarkers }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });


  const center = {

    lat: 11.560114866039607,
    lng: 104.91626530485476

    //  lat:11.563189008997085, lng:104.91998929639827
  }


  const smallCenter = {

    // lat: 11.560114866039607,
    // lng: 104.91626530485476

    lat:11.563189008997085, lng:104.91998929639827
    //  lat:11.56302083157195, lng: 104.90720052392287
  }





  const options = { closeBoxURL: '', enableEventPropagation: true };


  return (
    <>
    <div className="big-error-map">
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
            key={idx}
            onLoad={onLoad}
            options={options}
            position={marker.position}
          >
                  <div className ="error-black"style={{ backgroundColor: 'black', opacity: 0.75, padding: 3, color: 'white'}}>
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
    </div>


    <div className="small-error-map">
      {isLoaded && (
      <GoogleMap
      id="marker-example"
      mapContainerStyle={smallContainerStyle}
      zoom={12.5}
      center={smallCenter}
      >
        {
          allMarkers.map((marker,idx) => (
            <InfoBox
            key={idx}
            onLoad={onLoad}
            options={options}
            position={marker.position}
          >
                  <div className ="error-black"style={{ backgroundColor: 'black', opacity: 0.75, padding: 3, color: 'white'}}>
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
    </div>




    </>
  );
};

export default React.memo(ErrorMaps);
