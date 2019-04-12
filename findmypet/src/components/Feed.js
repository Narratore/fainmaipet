import React from 'react'
import './Feed.css'

import { Row, Col, Button } from 'react-bootstrap';
import Card from './Card'


export default function Feed() {
    return(
        <div className='container'>
            <Row className='card-deck'>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                    <Card />
                </Col>
            </Row>
        </div>
    )
}