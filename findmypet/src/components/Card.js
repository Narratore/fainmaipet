import React from 'react'
import './Card.css'
import { Link } from '@reach/router'
import Img from 'react-image'
import Loader from 'react-loader-spinner'



export default function Card(props) {
    
    const idNumber = props.data.id
    const idLink = '/publication/'+idNumber.toString()


    return(
        <div className="card">
            <p className='text-muted'> Visto en { props.data.location } </p>
            <Img className="card-img-top" 
                src={ props.data.snapshot} 
                alt="Card cap"
                loader={<Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"/>}/>
            <div className="card-body">
                <h5 className="card-title">{ props.data.title }</h5>
                <p className="card-text">{ props.data.description }</p>
                <Link to={idLink}>
                    <button className="btn btn-primary">Ver reporte</button>
                </Link>
            </div>
         </div>
    )
}