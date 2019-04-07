import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';

export default function LandingPage() {
    return(
        <footer className='container'>
            <Row >
                <Col xs={3} sm={3}>
                    <Button>Touch</Button>
                </Col>
                <Col xs={3} sm={3}>
                    <Button>Touch</Button>
                </Col>
                <Col xs={3} sm={3}>
                    <Button>Touch</Button>
                </Col>
                <Col xs={3} sm={3}>
                    <Button>Touch</Button>
                </Col>
            </Row>
        </footer>
    )
}