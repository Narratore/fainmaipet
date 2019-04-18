import React from 'react'
import './Card.css'
import { Link } from '@reach/router'
import Img from 'react-image'
import Loader from 'react-loader-spinner'



export default function Card(props) {
    
    const idNumber = props.data.id
    const idLink = '/reportes/'+idNumber.toString()


    return(
        <div className="card">
            <p className='text-muted'> Visto en { props.data.location } </p>
            <Img className="card-img-top" 
                src='https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=339&q=80 339w' 
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
                    <button className="btn btn-primary">Go somewhere</button>
                </Link>
            </div>
         </div>
    )
}