import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import './SignUp.css'


export default function SignUp() {

    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8})");

    function validatePasswords(e) {
        setPassword2(e.target.value)
        if(!mediumRegex.test(password2)){
            setPasswordLength(true)
            return
        }
        setPasswordLength(false)
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()){
            setFormValidity(true)
            return
        }
        if (password !== password2){
                setGoodPassword(true)
                return
            }
        setGoodPassword(false)
        setFormValidity(false)
        
        const data = {
                'username': username,
                'email' : email,
                'password1': password,
                'password2': password2,
            }


        fetch("https://cryptic-scrubland-58057.herokuapp.com/api/rest-auth/registration/", {
            method: 'POST',
            headers: {
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


    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [apiResponse, setAPIResponse] = useState('')
    const [formValidity, setFormValidity] = useState("")
    const [goodPassword, setGoodPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState('')

    if (apiResponse === '') {

        return(
            <div className='container'>
                            <div className='formarea'>
                            <div className='container'>
                                <Row className='form-container' >
                                    <Col className= 'sm-10'>
                                        <h2 className='form-title' >Regístrate</h2>
                                        <form style={{maxWidth:'100%', padding: '0 20px'}} autoComplete="on" onSubmit={handleSubmit}  id="quoteForm" noValidate className={ formValidity ? 'displayError' : '' }>
                                            <Row className="form-group" >
                                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Username</label>
                                                <div className="col-sm-10 col-md-8" >
                                                <input type='name' value={username} onChange={e => setUserName(e.target.value)} name="username" className="form-control form-control-lg" autoComplete='username'  placeholder="Username" required/>
                                                </div>
                                            </Row>
                                            <Row className="form-group" >
                                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Email</label>
                                                <div className="col-sm-10 col-md-8" >
                                                <input type='email' value={email} onChange={e => setEmail(e.target.value)} name="email" className="form-control form-control-lg" autoComplete='email'  placeholder="Correo" required/>
                                                </div>
                                            </Row>
                                            <Row className="form-group" >
                                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Contraseña</label>
                                                <div className="col-sm-10 col-md-8" >
                                                <input className={(goodPassword ? 'is-invalid' : '')+'form-control form-control-lg'} type='password' value={password} autoComplete='new-password' onChange={e => setPassword(e.target.value)} name="password" placeholder="Contraseña" required/>
                                                </div>
                                            </Row>
                                            <Row className="form-group" >
                                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-lg-2 col-xl-2 col-form-label col-form-label-lg d-none d-md-block form-label" >Contraseña</label>
                                                <div className="col-sm-10 col-md-8">
                                                <input className={(goodPassword ? 'is-invalid' : '')+'form-control form-control-lg'} type='password' value={password2} autoComplete='new-password' onChange={validatePasswords} name="password2"   placeholder="Contraseña" required/>
                                                <div  className={goodPassword ? 'invalid-password' : 'waiting-for-password'}>
                                                    Las contraseñas deben coincidir
                                                </div>
                                                <div className={passwordLength ? 'no-good-length-password' : 'waiting-for-password'}>
                                                    Las contraseñas deben tener al menos 8 caracteres alfanuméricos y una mayúscula (abc123)
                                                </div>
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
                    </div>
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
