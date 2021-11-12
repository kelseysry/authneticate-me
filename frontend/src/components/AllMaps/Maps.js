// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoBox } from '@react-google-maps/api';
// import { useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px',
};


const onLoad = infoBox => {
  console.log('infoBox: ', infoBox)
};

const AllMaps = ({ apiKey, BusinessLat, BusinessLng }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });


  const center = {
    lat: 11.540526555498468,
    lng: 104.91522593956448
  }

  console.log("MapsBusiness", BusinessLat)


  const options = { closeBoxURL: '', enableEventPropagation: true };


let allMarkers = [
  {
    business: "Best Iced Coffee",
    position: {  lat:11.540526555498468,lng: 104.91522593956448, }
  },
  {
    business: "Tuol Tom Pong Seafood - Street Food",
    position: {lat: 11.539970, lng: 104.914864 }
  },
  {
    business: "Khmer Food Spark Cafe",
    position: { lat:11.558446528422527,lng: 104.92501818402742 }
  }
]


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
                  <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
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
