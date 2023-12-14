import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AddProject() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Add Project</Button>

            <Modal show={show} size='lg' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img style={{ height: '200px' }} className='img-fluid' src="https://res.cloudinary.com/practicaldev/image/fetch/s--1bRAtAXr--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e895b1b4ut7axzo20njc.png" alt="Project image" />
                        </Col>
                        <Col>
                            <h2>Project Title</h2>
                            <p>Project Overview : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit reprehenderit neque sit facere dolorum quisquam unde quaerat dolorem, aliquam ipsa</p>
                            <p>Language Used : <span className='fw-bolder'>HTML,CSS,React</span></p>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Link to={'https://github.com/ashikKN/Project-Fair'} target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></Link>
                        <Link to={'https://project-vista.vercel.app/'} target='_blank' className='me-3 btn'><i class="fa-solid fa-link fa-2x"></i></Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddProject
