// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoBox, InfoWindow } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
// import allMarkers from '../../data/markers';
import './AllMaps.css'
import { useState, useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';
import { getKey } from '../../store/maps';

const containerStyleSmall = {
  width: '300px',
  height: '400px',
};

const containerStyle = {
  width: '900px',
  height: '600px',
};


const AllMaps = (
  ({ apiKey, allMarkers }) => {
  const [selectedCenter, setSelectedCenter] = useState(null);

  const key = useSelector((state) => state.maps.key);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

console.log("allMarkers in AllMaps", allMarkers)

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCenter(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const center = {
    // lat: 11.56975258696104,
    // lng: 104.92100199755971
    lat: parseFloat(11.563513146861608), lng: parseFloat(104.91629988375026)
  }

  const options = { closeBoxURL: '', enableEventPropagation: true };

  if (!key) {
    return null;
  }

  return (
    <>
    <script async
      src={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}>
    </script>

    <div className="big-screen-home">

      {isLoaded && (
        <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      zoom={14}
      center={center}
      >

{allMarkers.map((center, idx) => (
      <Marker
        key={idx}

        position={{
          lat: parseFloat(center.position.position.lat),
          lng: parseFloat(center.position.position.lng)
        }}

        // causes pop up
        onClick={() => {
          setSelectedCenter(center);
       }}
      />
    ))}

{selectedCenter && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedCenter(null);
              }}
              position={{
                lat: parseFloat(selectedCenter.position.position.lat),
                lng: parseFloat(selectedCenter.position.position.lng)
              }}
            >
              <div>
                <h3>{selectedCenter.title}</h3>
              </div>
            </InfoWindow>
          )}
</GoogleMap>
      )}
</div>

{/* <div className ="small-screen-map">

  // add map data for small-screen

</div> */}

    </>
  );
}
)

export default React.memo(AllMaps);
