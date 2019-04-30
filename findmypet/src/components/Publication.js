import React from 'react'
import { useFetch } from './hooks'
import { Link } from '@reach/router'
import Loader from 'react-loader-spinner'
import Img from 'react-image'


export default function Publication(props) {

    const [data, loading] = useFetch(
        ("https://find-my-pet2.herokuapp.com/api/publication/"+props.reportid)+'/'
      );
    return(
        <div>
            { loading ? ("Loading...") : (
                <div>
                    <nav>
                        <Link to='/feed'>Regresar</Link>
                    </nav>
                    
                    <p>
                        Ubicación: {data.location} <br/>
                        {data.title}
                    </p>
                    <p>Creado el {data.created}</p>
                    <Img className="card-img-top" 
                        src={ data.snapshot} 
                        alt="Card cap"
                        loader={<Loader 
                        type="ThreeDots"
                        color="#00BFFF"
                        height="100"	
                        width="100"/>}/>
                    <p>
                        {data.description}
                    </p>
                </div>
            ) }
        </div>
    )
}
