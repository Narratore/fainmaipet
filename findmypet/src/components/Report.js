import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useFetch } from './hooks'
import { Link } from '@reach/router'


export default function Form() {


    function handleSubmit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()){
            setFormValidity(true)
            return
        }
        setFormValidity(false)
        
        const data = {
            'fields': {
                'ID': 'AgregaWeb',
                'Nombre Completo' : name,
                'Email': email,
                'Teléfono': phone,
                'Tipo de evento': eventType
            }    
        }


        fetch("URL A HACER FECTH", {
            method: 'POST',
            headers: {
                'Authorization': '',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            
            .then((response) => {
                if(response.ok) {
                    setAPIResponse(true);
                } else setAPIResponse(false)
            })
    }
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [eventType, setEvent] = useState("");
    const [apiResponse, setAPIResponse] = useState("")
    const [formValidity, setFormValidity] = useState("")


if (apiResponse === ""){
    return (
        <div className='formarea'>
            <div className='container'>
                <Row className='form-container' >
                    <Col className= 'sm-10'>
                        <h2 className='form-title' >Contacto</h2>
                        <form style={{maxWidth:'100%', padding: '0 20px'}} autoComplete="on" onSubmit={handleSubmit}  id="quoteForm" noValidate className={ formValidity ? 'displayError' : '' }>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Nombre</label>
                                <div className="col-sm-10 col-md-8" >
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" className="form-control form-control-lg"  id="colFormLabelLg" placeholder="Nombre" autoComplete="name" required/>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Email</label>
                                <div className="col-sm-10 col-md-8" >
                                <input type='email' value={email} onChange={e => setEmail(e.target.value)} name="email" className="form-control form-control-lg" id="colFormLabelLg"  placeholder="Correo" required/>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Teléfono</label>
                                <div className="col-sm-10 col-md-8" >
                                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} name="phone" className="form-control form-control-lg" id="colFormLabelLg"  placeholder="Teléfono" required/>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Tipo de evento</label>
                                <div className="col-sm-10 col-md-8" >
                                    <select className="custom-select" value={eventType} onChange={e => setEvent(e.target.value)} name="eventType" id="inlineFormCustomSelect" form="quoteForm" required >
                                        <option className='col-md-2' defaultValue>Tipo de Evento</option>
                                        <option value="Social">Social</option>
                                        <option value="Masivo">Masivo</option>
                                        <option value="Corporativo">Corporativo</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className='submit-button-container form-group'>
                                <div className="col-sm-10 col-md-8 offset-md-2 " style={{ display: 'flex', justifyContent: 'flex-end' }}  >
                                    <Button type="submit" className='submit-button'>
                                        Cotizar
                                    </Button>
                                </div>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
        )
    } else if (apiResponse === true) {
        return (
            <div className='thank-you-area'>
                <Row>
                    <Col xs={12} sm={12}>
                        <h2 className='thankyou-title'>Gracias {name}!</h2>
                        <div className='thankyou-text'>
                            <p>Alguien de nuestro equipo se pondra en contacto</p>
                            <br/>
                            <p>Teléfono: {phone} <br/>
                            Correo: {email}</p>
                        </div>
                        <Button  className='correct-data-button' onClick={ () => setAirtableResponse('')}>Corregir datos</Button>
                    </Col>
                </Row>
            </div>
            )
    } else return (
        <div className='container thank-you-area'>
            <Row>
                <Col>
                    <h2 className='thankyou-title'>Fallo El Fetch</h2>
                    <p>Lo siento<br/></p>
                </Col>
            </Row>
        </div>
        )
}