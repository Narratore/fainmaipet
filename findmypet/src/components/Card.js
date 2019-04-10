import React from 'react'
import './Card.css'
// import { Row, Col, Button } from 'react-bootstrap';


export default function Card() {
    return(
        <div class="card">
            <p className='text-muted'>Visto por última vez: Hace unos minutos</p>
            <img class="card-img-top" src='https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=339&q=80 339w' alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         </div>
         
    )
}