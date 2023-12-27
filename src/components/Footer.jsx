import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
           
            <div className='d-flex flex-column justify-content-center align-items-center bg-primary' style={{ width: '100%', height: '300px' }}>

                <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">

                    <div style={{ width: "400px" }} className="website ">
                        <h4><i class="fa-solid fa-laptop-code me-2"></i>Project Vista</h4>
                        <h6>Designed and build with all love in the world by the Luminar team with the help pf our contributors</h6>
                        <h6 >Code licensed Luminar,docs CC BY 3.0.</h6>
                        <p>Currently v1.0.0</p>
                    </div>

                    <div className="links d-flex flex-column">
                        <h4>Links</h4>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
                        <Link to={'/Login'} style={{ textDecoration: 'none' }}>Login</Link>
                        <Link to={'/projects'} style={{ textDecoration: 'none' }}>Projects</Link>

                    </div>

                    <div className="guides1 d-flex flex-column " >
                        <h4>Guides</h4>
                        <Link to={'https://react.dev/'} style={{ textDecoration: 'none' }}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', }}>React Bootstrap</Link>
                        <Link to={'https://www.npmjs.com/package/react-router-dom'} style={{ textDecoration: 'none' }}>Routing</Link>

                    </div>
                    <div className="guides d-flex flex-column" >

                        <h4>Contact Us</h4>
                        <div className="d-flex mt-1">
                            <input className='form-control' placeholder='Enter your email' />
                            {/* <button style={{background:'#fc346f'}} className="btn btn-primary ms-3 w-50">Subscribe</button> */}
                            <Button style={{  border: 'none' }} className='btn btn-primary border ms-3 w-50'>SUBSCRIBE</Button>
                        </div>

                        <div className="icons mt-3 d-flex justify-content-between fs-3">
                            <Link to={'https://in.linkedin.com/'}><i className="fa-brands fa-linkedin text-light"></i></Link>
                            <Link to={'https://twitter.com'}><i className="fa-brands fa-x-twitter  text-light"></i></Link>
                            <Link to={'https://www.facebook.com/'}><i className="fa-brands fa-facebook-f text-light"></i></Link>
                            <Link to={'https://twitter.com'}><i className="fa-brands fa-github text-light"></i></Link>
                            <Link to={'https://gmail.com'}><i class="fa-solid fa-envelope"></i></Link>
                        </div>

                    </div>



                </div>

                <p className='text-light'>Copyright © 2023 Project Vista. Built with React.</p>
            </div>
        </>
    )
}

export default Footer
