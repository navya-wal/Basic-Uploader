import React from 'react'
import { withScriptjs } from "react-google-maps";
import Map from './BookRide';

function MapLoader(props) {
  const MapLoader = withScriptjs(Map);

  return (
    <div>
      <MapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDkI8xJrmcaKv_NVB3kyypNvAQW9firsZo"
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default MapLoader

