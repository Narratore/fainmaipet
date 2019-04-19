import React from 'react'
import { useFetch } from './hooks';
import Img from 'react-image'
import Loader from 'react-loader-spinner'


export default function NotFound() {
    
    const [data, loading] = useFetch(
        "https://dog.ceo/api/breeds/image/random"
        );

        


    return (
            <>
            {
                loading ? (<Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"/>) : (
                <div>
                    <h1>Vaya! Parece que aquí no hay nada!</h1>
                    <h2>Pero no te preocupes, aquí tenemos esta foto de un perrito para ti</h2>
                    <Img style={{height:'90vw', width:'90vw', objectFit: 'cover'}} 
                        src={data.message} 
                        alt="random dog" 
                        loader={<Loader 
                            type="Puff"
                            color="#00BFFF"
                            height="100"	
                            width="100"/>} 
                    />
                </div>
                )
            }
            </>
        )
}