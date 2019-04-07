import React from 'react'
import './LandingPage.css'
import logo from '../media/images/logo.png'
import { Row, Col, Button } from 'react-bootstrap';


export default function LandingPage() {
    return(
            <div className='container'>
                <Row className='' >
                    <Col className='' xs={4} sm={4} >
                        <h1 className='app-title'>Find My pet</h1>
                    </Col>
                    <Col xs={3} sm={3} >
                        <img src={logo} className='logo-img'  /> 
                    </Col>
                    <Col className='sign-in-container' xs={5} sm={5} >
                        <Button>Sign In</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            Salva animales
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={7} sm={7}>
                        <h2>Solicita ayuda</h2>
                        <p>Si tu mascota no avisó a donde iba, informa a la comunidad ¡Entre todos lo encontramos!</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={7} sm={7}>
                        <h2>Reporta avistamiento</h2>
                        <p>Si ves a un animal extraviado, avísale a todos, quizá su humano este buscándolo</p>
                    </Col> 
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={7} sm={7}>
                        <h2>Resguarda</h2>
                        <p>¿Te hiciste amigo de un animal ambulante? Si aún no sabes si vivirá contigo, anuncialo en la app,
                            así podra tener un hogar definitivo o regresar con su dueño.
                        </p>
                    </Col> 
                </Row>
                <Row>
                    <Col xs={7} sm={7}>
                        <h2>Adopta</h2>
                        <p>¿Te enamoraste a primera vista de un animalito resguardado? Find my pet te ayudara en el proceso
                            de adopción.
                        </p>
                    </Col> 
                    <Col>
                    </Col>
                </Row>
            </div>
    )
}