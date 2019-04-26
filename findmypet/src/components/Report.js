import React from 'react'
import { useFetch } from './hooks'
import { Link } from '@reach/router'


export default function Report(props) {

    const [data, loading] = useFetch(
        ("https://cryptic-scrubland-58057.herokuapp.com/api/publication/"+props.reportid)+'/'
      );

    return(
        <div>
            { loading ? ("Loading...") : (
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/feed'>Regresar</Link>
                            </li>
                        </ul>
                    </nav>
                    <h1>
                        Este es el reporte de {data.title}
                    </h1>
                    <p>
                        Creado el {data.created}
                    </p>
                </div>
            ) }
        </div>
    )
}