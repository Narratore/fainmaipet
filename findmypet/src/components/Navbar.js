import React  from 'react'
// import { Row, Col, Button } from 'react-bootstrap';
import IconCollar from './svg/SvgCollar';
import IconDogHouse from './svg/SvgDogHouse';
import IconMegaphone from './svg/IconMegaphone';
import IconPlaceholder from './svg/IconPlaceholder';
import { Link } from '@reach/router'
import './Navbar.css'

export default function Navbar() {
  return(
    <footer className='border-nav'>
      <div className="container">
        <div className="row">
          <div className="col">
           <div className="row">
              <div className="col p-2 border-nav btn-hover">
                <Link to='feed'>
                  <IconDogHouse fill="white" />
                </Link>
              </div>
              <div className="col p-2 border-nav btn-hover">
                <Link to='report'>
                  <IconMegaphone fill="white" />
                </Link>
              </div>
              <div className="col p-2 border-nav btn-hover">
                <Link to='map'>
                  <IconPlaceholder fill="white" />
                </Link>
              </div>
              <div className="col p-2 border-nav btn-hover">
                <Link to='adopt'>
                  <IconCollar fill="white" />
                </Link>
              </div>
           </div>
          </div>
        </div>
        {/* <Row className='navbar-menu'>
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
              </Row> */}
      </div>
        </footer>
    )
}