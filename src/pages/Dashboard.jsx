import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import MyProfile from '../components/MyProfile'

function Dashboard() {
  
  return (
    <div>
      
      {/* Passing a boolean prop named insideDashboard with a value of true  */}
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid '>
        <Col sm={12} md={8}>
        <h2 className='text-light'>Welcome <span style={{color:'#e83283'}}>User...</span></h2>
        {/* my projects */}
        <MyProjects/>
        </Col>
        <Col sm={12} md={4}>
        {/* my profile */}
        <MyProfile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
