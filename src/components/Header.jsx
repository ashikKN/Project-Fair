import React from 'react'
import {Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:' #e83283',zIndex:'1'}} className="position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand className='d-flex align-items-center'>
           <Link to={'/'} className='fw-bolder fs-4'> <i className="fa-solid fa-laptop-code me-2 text-light"> Project Vista</i></Link>   
        </Navbar.Brand>

      
      { 
      insideDashboard &&
      <div style={{textDecoration:'none'}} className='d-flex align-items-center btn btn-link ms-auto fw-bolder'>
        Logout
        <i className="fa-solid fa-right-from-bracket ms-1"></i>
        </div>}
       </Container>
    </Navbar>
    </>
  )
}

export default Header
