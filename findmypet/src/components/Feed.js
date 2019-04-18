import React from 'react'
import './Feed.css'
import { useFetch } from './hooks'
import Loader from 'react-loader-spinner'
import { Row, Col } from 'react-bootstrap';
import Card from './Card'



export default function Feed() {
    
    const [data, loading] = useFetch(
        "http://localhost:8000/api/publication/"
      );

    return(
        <div className='container'>
            <h1>Feed</h1>
            { loading ? (<Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"/>) : (
                <Row className='card-deck' >
                    {data.map((report)=>
                        <Col xs={12} sm={12} md={4} lg={4} xl={3} key={report.id}>
                            <Card data={report} />
                        </Col>
                        )}
                </Row>
            ) }
        </div>
    )
}