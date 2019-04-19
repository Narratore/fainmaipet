import { useState, useEffect } from "react";

function useFetch(url) {
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response;
    }

    async function fetchUrl() {
        await fetch(url)
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