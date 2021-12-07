import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1541px',
  height: '491px'
};

const center = {
    lat: 10.73,
    lng: 106.69,
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDF44IWIkbnX6m7cKtP2Uw4dfXUtAJWZtw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)