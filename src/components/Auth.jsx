import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokenAuthorizationContext } from '../Contexts/TokenAuth';

function Auth({ register }) {
    const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorizationContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const isRegisterForm = register ? true : false

    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !email || !password) {
            toast.info('Please fill the form completely')
        } else {
            const result = await registerAPI(userData)
            console.log(result);
            if (result.status === 200) {
                toast.success(`${result.data.username} has registered successfully`)
                setUserData({
                    username: '', email: '', password: ''
                })
                navigate('/login')
            } else {
               toast.warning(result.response.data)
            }
        }
    }

    const handleLogin = async(e)=>{
        e.preventDefault()
        const {email,password} = userData
        if(!email || !password){
            toast.info("Please fill the form completely !!!")
        }else{
            const result = await loginAPI(userData)
            if(result.status===200){
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                setIsAuthorized(true)
                setUserData({
                    email:"",
                    password:""
                })
                navigate('/')
            }else{
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }

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
                                            <Form.Control type="text" placeholder="Username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                        </Form.Group>
                                    }

                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter Your Email Id" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                    </Form.Group>
                                    {
                                        isRegisterForm ?
                                            <div>
                                                <button className="btn btn-light " onClick={handleRegister}>Register</button>
                                                <p>Already have an Account?Click here to <Link to={'/login'}>Login</Link></p>
                                            </div> :
                                            <div>
                                                <button onClick={handleLogin} className="btn btn-light mb-1">Login</button>
                                                <p>New User?Click here to <Link to={'/register'}>Register</Link></p>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer 
            position="top-right"
            autoClose={2000}
            theme='colored' />
        </div>
    )
}

export default Auth
