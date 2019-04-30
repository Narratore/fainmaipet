import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import './LandingPage.css'
import logo from '../media/images/logo.png'
import { Link } from '@reach/router'

export default function Header() {
    return (
        <div>
            <div className='container'>
                <Row className='header-container container' >
                    <Col xs={3} sm={3} >
                        <Link to='/'>
                            <img src={logo} className='logo-img' alt='logo' /> 
                        </Link>
                    </Col>
                    <Col className='' xs={6} sm={6} >
                        <h1 className='app-title'>Find My pet</h1>
                    </Col>
                    <Col className='sign-in-container' xs={3} sm={3} >
                        <Link to='signin'>
                            <Button style={{marginRight:5}}>Sign In</Button>
                        </Link>
                        <Link to='signup'>
                            <Button>Sign Up</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}