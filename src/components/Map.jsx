import React, { useEffect, useMemo, useState } from 'react'
import MapComponent from './MapComponent'
import axios from 'axios'

const Map = (props) => {
    const axios = require("axios");
    
    const [center, setCenter] = useState({lat: 0, lng: 0});

    const geoCode = () => {
        const location = props.city + " " + props.country;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params: {
                address: location,
                key: process.env.REACT_APP_GOOGLE_MAP_KEY,
            }
        }).then(function (response){
            setCenter(response.data.results[0].geometry.location);
        }).catch(function (error){
            console.log(error);
        });

    }
    
    useEffect(() => {
        geoCode();
    },[props.city]);

    

     
    return (
            <MapComponent center={center}/>
        )
  
}

export default Map