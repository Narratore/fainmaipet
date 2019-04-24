import { useState, useEffect } from 'react'

export default function  getLocation() {
    
    const [userLocation, setUserLocation] = useState({})

    function checkLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, positionError);
    } else {
        getLocationByIp();
        }

    }
    function success(position) {
        var currentPosition  = {
                'lat': position.coords.latitude, 
                'lng': position.coords.longitude
                }
    
        setUserLocation(currentPosition)
    }
    

        function getLocationByIp() {
            fetch("https://ipapi.co/json/")
                .then((resp)=> resp.json())
                .then(function(data) {
                    if (data != null) {
                                var formattedData = {
                                        coords: {latitude: data.latitude , longitude: data.longitude}
                                }
                                console.log('Location by ip: ', formattedData)
                                success(formattedData)
                    }
                }); 
            }
            
            function positionError() {
                getLocationByIp();
            }
    
        useEffect(()     => {
        checkLocation();
        }, {});
        return [userLocation]
}