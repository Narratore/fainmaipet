import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import './Navbar.css'

export default function Navbar() {
    return(
        <footer className=''>
            <Row className='navbar-menu'>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button>Touch</Button>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button>Touch</Button>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button>Touch</Button>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button>Touch</Button>
                </Col>
            </Row>
        </footer>
    )
}