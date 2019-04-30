import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import './SignUp.css'


export default function SignUp() {

    function handleSubmit(event) {
        event.preventDefault();
       
        const data = {
                'username': username,
                'password': password,
            }

        fetch("https://find-my-pet2.herokuapp.com/api/rest-auth/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            
            .then((response) => {
                if(response.ok) {
                    var json = response.json()
                    setCsrftokenState(json)
                    console.log(csrftokenState)
                    setAPIResponse(true);
                } else setAPIResponse(false)
            })
            .catch(function displayError(err) {
                console.log(err)
            })
    }


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [apiResponse, setAPIResponse] = useState('')
    const [formValidity, setFormValidity] = useState("")
    const [csrftokenState, setCsrftokenState] = useState('')


    if (apiResponse === '') {

        return(
            <div className='container'>
                            <div className='formarea'>
                            <div className='container'>
                                <Row className='form-container' >
                                    <Col className= 'sm-10'>
                                        <h2 className='form-title' >Reagístrate</h2>
                                        <form style={{maxWidth:'100%', padding: '0 20px'}} 
                                            autoComplete="on" onSubmit={handleSubmit}  id="quoteForm" 
                                            noValidate className={ formValidity ? 'displayError' : '' }>
                                            <Row className="form-group" >
                                                <label htmlFor="colFormLabelLg" 
                                                    className="col-sm-2 col-lg-2 col-xl-2 col-form-label 
                                                    col-form-label-lg d-none d-md-block form-label" >
                                                Username</label>
                                                <div className="col-sm-10 col-md-8" >
                                                <input type='name' value={username} onChange={
                                                    e => setUserName(e.target.value)} 
                                                    name="username" className="form-control form-control-lg" 
                                                    autoComplete='username'  placeholder="Username" required/>
                                                </div></Row>
                                            <Row className="form-group" >
                                                <label htmlFor="colFormLabelLg" 
                                                    className="col-sm-2 col-lg-2 col-xl-2 col-form-label 
                                                    col-form-label-lg d-none d-md-block form-label" >
                                                    Contraseña</label>
                                                <div className="col-sm-10 col-md-8" >
                                                <input className='form-control form-control-lg' type='password' 
                                                    value={password} autoComplete='new-password' onChange={
                                                        e => setPassword(e.target.value)}
                                                    name="password" placeholder="Contraseña" required/>
                                                </div></Row>
                                            <Row className='submit-button-container form-group'>
                                                <div className="col-sm-10 col-md-8 offset-md-2 " style={
                                                        { display: 'flex', justifyContent: 'flex-end' }}  >
                                                    <Button type="submit" className='submit-button'>
                                                    Registrarse</Button></div></Row>
                                        </form></Col></Row></div></div></div>
        )
    } else if (apiResponse === false) {
        return(
            <div>
                Hubo un error
            </div>
        )
    } else 
        return(
            <div>
                Gracias por registrarte
            </div>
        )
}
