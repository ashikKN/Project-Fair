import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       {/* <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <i className="fa-solid fa-laptop-code me-2"></i>
            Project Vista
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>  */}

    <Navbar expand="lg" style={{backgroundColor:' #e83283',zIndex:'1'}} className="position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand className='d-flex align-items-center'>
           <Link to={'/'} className='fw-bolder fs-4'> <i className="fa-solid fa-laptop-code me-2 text-light"> Project Vista</i></Link>   
        </Navbar.Brand>
       </Container>
    </Navbar>
    </>
  )
}

export default Header
