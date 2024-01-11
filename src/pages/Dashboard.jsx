import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import MyProfile from '../components/MyProfile'

function Dashboard() {
  const [userName,setUserName] = useState()
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUserName(JSON.parse(sessionStorage.getItem("existingUser")).username);    
    }
  },[])
  
  return (
    <div style={{backgroundColor:'#fff'}}>
      
      {/* Passing a boolean prop named insideDashboard with a value of true  */}
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid '>
        <Col sm={12} md={8}>
        <h2 className='text-primary'>Welcome <span className='text-uppercase' style={{color:'red'}}>{userName}</span></h2>
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
