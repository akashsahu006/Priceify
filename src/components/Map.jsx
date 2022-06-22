import React, { useEffect, useMemo, useState } from 'react'
import Loader from './Loader'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import axios from 'axios'

const Map = (props) => {
    const axios = require("axios");
    
    const [center, setCenter] = useState({});

    const geoCode = () => {
        const location = props.city + " " + props.country;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params: {
                address: location,
                key: "AIzaSyCzvliBqjwkg0J5zbZ7IfbAJ6umlApYuec"
            }
        }).then(function (response){
            console.log(response.data.results[0].geometry.location);
            setCenter(response.data.results[0].geometry.location);
        }).catch(function (error){
            console.log(error);
        });
    }
    
    useEffect(() => {
        geoCode();
    },[props.city]);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCzvliBqjwkg0J5zbZ7IfbAJ6umlApYuec",
    })
     
    if(!isLoaded){
        return <Loader/>
    }
    else{
        return (
            
                <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                </GoogleMap>

          )
    }
  
}

export default Map