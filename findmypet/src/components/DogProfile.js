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
                'Tipo de Reporte': report_type,
                'Título' : title,
                'Descripción': description,
                'Tamaño': size,
                'Color': color,
                'Sexo': gender,
                'Raza': breed,
                'Locación': location,
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
    
    const [report_type, setReport] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [gender, setGender] = useState("");
    const [breed, setBreed] = useState("");
    const [location, setLocation] = useState("");
    const [apiResponse, setAPIResponse] = useState("")
    const [formValidity, setFormValidity] = useState("")


if (apiResponse === ""){
    return (
        <div className='formarea'>
            <div className='container'>
                <Row className='form-container' >
                    <Col className= 'sm-10'>
                        <h2 className='form-title' >Reporte</h2>
                        <form style={{maxWidth:'100%', padding: '0 20px'}} autoComplete="on" onSubmit={handleSubmit}  id="quoteForm" noValidate className={ formValidity ? 'displayError' : '' }>
                        <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Tipo de Reporte</label>
                                <div className="col-sm-10 col-md-8" >
                                    <select className="custom-select" value={report_type} onChange={e => setReport(e.target.value)} name="report_type" id="inlineFormCustomSelect" form="quoteForm" required >
                                        <option className='col-md-2' defaultValue>Viste o perdiste</option>
                                        <option value="Se Busca">Se Busca</option>
                                        <option value="Avistamiento">Avistamiento</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Título</label>
                                <div className="col-sm-10 col-md-8" >
                                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="title" className="form-control form-control-lg"  id="colFormLabelLg" placeholder="Ponle título" autoComplete="name" required/>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Descripción</label>
                                <div className="col-sm-10 col-md-8" >
                                <input type='text' value={description} onChange={e => setDescription(e.target.value)} name="description" className="form-control form-control-lg" id="colFormLabelLg"  placeholder="Cuéntanos como pasó" required/>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Tamaño<object data="" type=""></object></label>
                                <div className="col-sm-10 col-md-8" >
                                    <select className="custom-select" value={size} onChange={e => setSize(e.target.value)} name="size" id="inlineFormCustomSelect" form="quoteForm" required >
                                        <option className='col-md-2' defaultValue>Tamaño</option>
                                        <option value="Diminuto">Diminuto</option>
                                        <option value="Pequeño">Pequeño</option>
                                        <option value="Mediano">Mediano</option>
                                        <option value="Grande">Grande</option>
                                        <option value="Enorme">Enorme</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Color</label>
                                <div className="col-sm-10 col-md-8" >
                                    <select className="custom-select" value={color} onChange={e => setColor(e.target.value)} name="color" id="inlineFormCustomSelect" form="quoteForm" required >
                                        <option className='col-md-2' defaultValue>Color</option>
                                        <option value="Negro">Negro</option>
                                        <option value="Blanco">Blanco</option>
                                        <option value="Café">Café</option>
                                        <option value="Miel">Miel</option>
                                        <option value="Manchado">Manchado</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Sexo</label>
                                <div className="col-sm-10 col-md-8" >
                                    <select className="custom-select" value={gender} onChange={e => setGender(e.target.value)} name="gender" id="inlineFormCustomSelect" form="quoteForm" required >
                                        <option className='col-md-2' defaultValue>Sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="No definido">No definido</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Raza</label>
                                <div className="col-sm-10 col-md-8" >
                                    <select className="custom-select" value={breed} onChange={e => setBreed(e.target.value)} name="breed" id="inlineFormCustomSelect" form="quoteForm" required >
                                        <option className='col-md-2' defaultValue>Raza</option>
                                        <option value="Labrador">Labrador</option>
                                        <option value="Pug">Pug</option>
                                        <option value="Chihuahua">Chihuahua</option>
                                        <option value="Doberman">Doberman</option>
                                        <option value="Bulldog">Bulldog</option>
                                        <option value="Schnauzer">Schnauzer</option>
                                        <option value="Cruza">Cruza</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </Row>
                            <Row className="form-group" >
                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Locación</label>
                                <div className="col-sm-10 col-md-8" >
                                <input type="tel" value={location} onChange={e => setLocation(e.target.value)} name="location" className="form-control form-control-lg" id="colFormLabelLg"  placeholder="Donde lo encontraste" required/>
                                </div>
                            </Row>
                            <Row className='submit-button-container form-group'>
                                <div className="col-sm-10 col-md-8 offset-md-2 " style={{ display: 'flex', justifyContent: 'flex-end' }}  >
                                    <Button type="submit" className='submit-button'>
                                        Enviar
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
                        <h2 className='thankyou-title'>Gracias!!!</h2>
                        <div className='thankyou-text'>
                            <p>Alguien de nuestro equipo se pondra en contacto</p>
                            <br/>
                            <p>Teléfono:  <br/>
                            Correo: </p>
                        </div>
                        {/* <Button  className='correct-data-button' onClick={ () => setAirtableResponse('')}>Corregir datos</Button> */}
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