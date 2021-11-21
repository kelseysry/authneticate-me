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

const onLoad = infoBox => {
  // console.log('infoBox: ', infoBox)
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

    lat: 11.563513146861608, lng: 104.91629988375026
    // lat: allMarkers[0].position.lat,
    // lng: allMarkers[0].position.lng
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
        {/* {
          allMarkers.map((marker,idx) => (

          //   <InfoBox
          //   key={idx}
          //   onLoad={onLoad}
          //   options={options}
          //   position={marker.position}
          // >
          //         <div style={{ backgroundColor: 'black', opacity: 0.75, padding: 3, color: 'white'}}>
          //     <div style={{ fontSize: 16, fontColor: `#08233B` }}>
          //       {marker.business}
          //     </div>
          //   </div>
          // </InfoBox>
          null

          ))} */}


{allMarkers.map((center, idx) => (
      <Marker
      // onLoad={onLoad}
        key={idx}
        // position={center.position}
        // position={{
        //   lat: marker.lat,
        //   lng: marker.lng
        // }}
        position={{
          lat: center.position.lat,
          lng: center.position.lng
        }}

        // name={marker.name}
        // causes pop up
        onClick={() => {
          setSelectedCenter(center);
       }}
      />
    ))}

{selectedCenter && (

// allMarkers.map((marker, idx) => (
            <InfoWindow
              onCloseClick={() => {
                setSelectedCenter(null);
              }}
              // position={marker.position}
              position={{
                lat: selectedCenter.position.lat,
                lng: selectedCenter.position.lng
              }}

            >
              <div>
                <h3>{selectedCenter.business}</h3>
              </div>
            </InfoWindow>
// ))
          )}




</GoogleMap>
      )}



</div>

<div className ="small-screen-map">
{isLoaded && (
        <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyleSmall}
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
                  <div style={{ backgroundColor: 'black', opacity: 0.75, padding: 3, color: 'white'}}>
              <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                {marker.title}
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
}
)

export default React.memo(AllMaps);
