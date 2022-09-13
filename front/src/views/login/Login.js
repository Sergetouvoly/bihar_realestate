import React from 'react'
import './Login.css'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import img3 from "../../assets/images/home/house1.jpg"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    return(
        <div className="login-container">
                <section className="login-section">
                    <div className="container">
                        <div className="row login-content justify-content-center align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-0 col-sm-0 p-0 d-none d-lg-block img-content">
                                <img  alt="login-side" className="img-fluid img-first" src={img3} />
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-7 col-sm-11 px-lg-5">
                                <div className="p-lg-4 py-md-5 p-md-0 px-1 py-5">
                                    <div className="row justify-content-center align-items-center text-center">
                                        <h3 className="login-title" >Connexion</h3>
                                        <Image roundedCircle fluid alt='avatar' className="login-img" src="https://t3.ftcdn.net/jpg/02/73/71/46/360_F_273714684_GXTZHmfFM3yvZwP7KaGc1h2Md00F83UF.jpg" />
                                    </div>
                                    
                                    <Form>
                                    <Form.Group className="mb-3 py-2 mt-3" controlId="formBasicEmail">
                                        
                                        <Form.Control 
                                        size='lg'
                                        type="email" placeholder="Entrer votre email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                                        
                                        <Form.Control 
                                        size='lg'
                                        type="password" placeholder="Entrer votre mot de passe" />
                                    </Form.Group>
                                    <div>
                                    <p className="float-end" >
                                        Mot de passe oublié ?
                                    </p>
                                    </div>
                                   <div >
                                        <button 
                                        onClick={()=>navigate('/admin',{replace:true})}
                                        className='login-btn text-center mx-auto'  type="submit">
                                            Connexion
                                        </button>
                                   </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>

        )
}

export default Login;