import React, { useContext } from 'react'
import {Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from '../Contexts/TokenAuth'

function Header({insideDashboard}) {
  
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorizationContext)
  const navigate = useNavigate()

  const handleLogout = ()=>{
    // remove all existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }

  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:' #e83283',zIndex:'1'}} className="position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand className='d-flex align-items-center'>
           <Link to={'/'} className='fw-bolder fs-4'> <i className="fa-solid fa-laptop-code me-2 text-light"> Project Vista</i></Link>   
        </Navbar.Brand>

      
      { 
      insideDashboard &&
        <button onClick={handleLogout} style={{textDecoration:'none'}} className='d-flex align-items-center btn btn-link ms-auto fw-bolder'>
           Logout
          <i className="fa-solid fa-right-from-bracket ms-1"></i>
        </button>}
      </Container>
    </Navbar>
    </>
  )
}

export default Header
