import React from 'react'
import Loader from './Loader'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

const MapComponent = (props) => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    })

  
    if(!isLoaded){
        return <Loader/>
    }
    else{
    return (
        <GoogleMap zoom={10} center={props.center} mapContainerClassName="map-container"></GoogleMap>
      )
    }
}

export default MapComponent