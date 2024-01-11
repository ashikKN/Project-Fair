import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';

function ProjectCard({project}) {
    // state for modal
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Card className='shadow mb-3 btn w-75' onClick={handleShow}>
      <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:'https://res.cloudinary.com/practicaldev/image/fetch/s--1bRAtAXr--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e895b1b4ut7axzo20njc.png'} />
      <Card.Body>
        <Card.Title style={{color:'#e83283'}}>{project?.title}</Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} size='lg' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                    <img style={{height:'200px'}} className='img-fluid' src={project?`${BASE_URL}/uploads/${project.projectImage}`:'https://res.cloudinary.com/practicaldev/image/fetch/s--1bRAtAXr--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e895b1b4ut7axzo20njc.png'} alt="Project image" />
                </Col>
                <Col>
                    <h2>{project?.title}</h2>
                    <p>Project Overview : {project?.overview}</p>
                    <p>Language Used : <span className='fw-bolder'>{project?.languages}</span></p>
                </Col>
            </Row>
            <div className="mt-3">
                <Link to={project?.github} target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></Link>
                <Link to={project?.website} target='_blank' className='me-3 btn'><i class="fa-solid fa-link fa-2x"></i></Link>
            </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default ProjectCard
