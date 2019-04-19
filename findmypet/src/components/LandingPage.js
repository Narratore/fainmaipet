import React from 'react'
import './LandingPage.css'
import { Row, Col } from 'react-bootstrap';



export default function LandingPage() {
    return(
            <div className='container landing-container'>
                <div className='container'>
                    <Row className='mt-5 mb-5'>
                        <Col>
                            <h1>
                                Salva animales
                            </h1>
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-5'>
                        <Col xs={5} sm={5}>
                            <img src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-take-a-screenshot-animation.gif' alt='foto'></img>
                        </Col>
                        <Col xs={7} sm={7}>
                            <h2>Solicita ayuda</h2>
                            <p>Si tu mascota no avisó a donde iba, informa a la comunidad ¡Entre todos lo encontramos!</p>
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-5'>
                        <Col xs={7} sm={7}>
                            <h2>Reporta avistamiento</h2>
                            <p>Si ves a un animal extraviado, avísale a todos, quizá su humano este buscándolo</p>
                        </Col >
                        <Col xs={5} sm={5}>
                            <img src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-take-a-screenshot-animation.gif' alt='foto'></img>
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-5'>
                        <Col xs={5} sm={5}>
                            <img src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-take-a-screenshot-animation.gif' alt='foto'></img>
                        </Col>
                        <Col xs={7} sm={7}>
                            <h2>Resguarda</h2>
                            <p>¿Te hiciste amigo de un animal ambulante? Si aún no sabes si vivirá contigo, anuncialo en la app,
                                así podra tener un hogar definitivo o regresar con su dueño.
                            </p>
                        </Col> 
                    </Row>
                    <Row className='mt-5 mb-5'>
                        <Col xs={7} sm={7}>
                            <h2>Adopta</h2>
                            <p>¿Te enamoraste a primera vista de un animalito resguardado? Find my pet te ayudara en el proceso
                                de adopción.
                            </p>
                        </Col> 
                        <Col xs={5} sm={5}>
                            <img src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-take-a-screenshot-animation.gif' alt='foto'></img>
                        </Col>
                    </Row>
                </div>
            </div>
    )
}