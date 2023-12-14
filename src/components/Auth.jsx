import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {
    const isRegisterForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link to={'/'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: '#fff' }}>
                    <i className='fa-solid fa-arrow-left me-1'></i>
                    Back to Home
                </Link>
                <div className="card shadow p-5 bg-dark-emphasis">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png" alt="auth pic" className='rounded-start w-100' />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <h2><i className="fa-solid fa-laptop-code me-2"></i>Project Vista</h2>
                                <h5 className='fw-bolder mt-2 pb-2 text-light'>
                                    {
                                        isRegisterForm ? 'Sign up to your Account' : 'Sign in to your Account'
                                    }
                                </h5>
                                <Form className='text-light w-75'>
                                    {
                                        isRegisterForm &&
                                        <Form.Group className="mb-2" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Username" />
                                        </Form.Group>
                                    }

                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter Your Email Id" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>
                                    {
                                        isRegisterForm ?
                                            <div>
                                                <button className="btn btn-light ">Register</button>
                                                <p>Already have an Account?Click here to <Link to={'/login'}>Login</Link></p>
                                            </div> :
                                            <div>
                                                <button className="btn btn-light mb-1">Login</button>
                                                <p>New User?Click here to <Link to={'/register'}>Register</Link></p>
                                            </div>

                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
