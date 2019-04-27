import React, { useState, useRef } from 'react'
import { useFetch  } from './hooks'
import Loader from 'react-loader-spinner'
import { Row, Col, Button } from 'react-bootstrap';


export default function Profile() {

    const [data, loading] = useFetch(
        "http://localhost:8000/api/publication/"
      );
    
    const uploadElement = useRef(null);

    function uploadImage (e){
        e.preventDefault()
        uploadElement.current.click()
    }
    function handleImageChange(e){
        setAvatar(e.target.files[0])
        setAvatarUrl(URL.createObjectURL(e.target.files[0]))
    }
    
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
                'Teléfono': avatar,
                'Tipo de evento': biography
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

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [AvatarUrl, setAvatarUrl] = useState(null);
    const [biography, setBiography] = useState("");
    const [apiResponse, setAPIResponse] = useState("")
    const [formValidity, setFormValidity] = useState("")

if (apiResponse === "") {
    return(
        <div className='container'>
            { loading ? (<Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"/>) : (
                        <div className='formarea'>
                        <div className='container'>
                            <Row className='form-container' >
                                <Col className= 'sm-10'>
                                    <h2 className='form-title' >Regístrate</h2>
                                    <form style={{maxWidth:'100%', padding: '0 20px'}} autoComplete="on" onSubmit={handleSubmit}  id="quoteForm" noValidate className={ formValidity ? 'displayError' : '' }>
                                        <Row className="form-group" >
                                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Username</label>
                                            <div className="col-sm-10 col-md-8" >
                                                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} name="name" className="form-control form-control-lg"  id="colFormLabelLg" placeholder="Nombre de usuario" autoComplete="username" required/>
                                            </div>
                                        </Row>
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
                                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Avatar</label>
                                            <div className="col-sm-10 col-md-8" >
                                            <input type="file" ref={uploadElement} style={{display: 'none'}}  onChange={handleImageChange} name="avatar" className="form-control form-control-lg" id="selectedFile"  placeholder="Avatar" />
                                            <Button type="button"  value="Subir Avatar" onClick={uploadImage}> Subir Avatar </Button>
                                            <img src={AvatarUrl} alt='avatar'></img>
                                            </div>
                                        </Row>
                                        <Row className="form-group" >
                                            <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Biografía</label>
                                            <div className="col-sm-10 col-md-8" >
                                                <input type="text" value={biography} onChange={e => setBiography(e.target.value)} name="biography" className="form-control form-control-lg"  id="colFormLabelLg" placeholder="Biografía"/>
                                            </div>
                                        </Row>
                                        <Row className='submit-button-container form-group'>
                                            <div className="col-sm-10 col-md-8 offset-md-2 " style={{ display: 'flex', justifyContent: 'flex-end' }}  >
                                                <Button type="submit" className='submit-button'>
                                                    Registrarse
                                                </Button>
                                            </div>
                                        </Row>
                                    </form>
                                </Col>
                            </Row>
                        </div>
                    </div>
            ) }
        </div>
    )} else if (apiResponse === true) {
        return (
            <div className='thank-you-area'>
                <Row>
                    <Col xs={12} sm={12}>
                        <h2 className='thankyou-title'>Gracias {name}!</h2>
                        <div className='thankyou-text'>
                            <p>Alguien de nuestro equipo se pondra en contacto</p>
                        </div>
                        <Button  className='correct-data-button' onClick={ () => setAPIResponse('')}>Corregir datos</Button>
                    </Col>
                </Row>
            </div>
            )
    }
}
