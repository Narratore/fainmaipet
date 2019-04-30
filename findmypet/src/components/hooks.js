import { useState, useEffect } from "react";

function useFetch(url) {
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
   
    var myHeader = new Headers()
    var myInit = { method: 'GET',
                headers: myHeader,
                mode: 'cors',
                cache: 'default' };

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response;
    }

    async function fetchUrl() {
        await fetch(url, myInit)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(function displayError(err) {
                console.log(err)
                setLoading();
            })
            
        setLoading(false);
    }
    
    useEffect(()     => {
        fetchUrl();
    }, []);
    return [data, loading];
}

export { useFetch };