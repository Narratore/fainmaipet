import { useState } from 'react'

getLocation();

function  getLocation() {
    if (navigator.geolocation) {
            var location =  navigator.geolocation.getCurrentPosition(showMap, positionError);
            console.log(location)

        }
        else {
        getLocationByIp();
        }
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
                    showMap(formattedData)
        }
    }); 
}

function positionError() {
    getLocationByIp();
}

function showMap(position) {

var currentPosition  = {
        'lat': position.coords.latitude, 
        'lng': position.coords.longitude
        }

console.log("Posicion actual: ",JSON.stringify(currentPosition));



// fetch('get-tipo.php', {
//     method: 'POST',
//     headers: {'Content-Type':'application/x-www-form-urlencoded'} ,
//     body: "lat="+currentPosition.lat+"&lng="+currentPosition.lng
    
// }).then((resp) =>resp.json() )
// .then(function(result) {

//     if (result != null) {
//         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//         var event = new Date();
    
//         loading_exchange_txt.style.display = 'none';

//         exchange_txt.innerHTML = result[0].exchange;
//         exchange = result[0].exchange
//         place_and_time.innerHTML = `<strong>${result[0].name}</strong></br>${event.toLocaleDateString('es', options)}`;
//         //$('#placeAndTime').html();
//         //$('#exchange-wrapper').fadeIn()
//         exchange_wrapper.style.display = 'flex';
//     }
// })

}

export default getLocation()