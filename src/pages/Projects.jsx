import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '100px' }} className="projects ">
        <h1 className="text-center mb-3">All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50 rounded mb-4">
            <input type="text" className='form-control' placeholder='Search Projects by Technologies' />
            <i style={{ marginLeft: '-50px' }} className='fa-solid fa-magnifying-glass fa-rotate-90'></i>
          </div>
        </div>
      </div>
      <Row className='container-fluid'>
        <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
        </Col>
      </Row>
    </>
  )
}

export default Projects
