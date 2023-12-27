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

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <div className="row">
                     <div className="col-lg-6">
                     <label> 
                          <input type="file" style={{display:'none'}} />
                          <img className='img-fluid' src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="" /></label>

                    </div>
                     <div className="col-lg-6">
                        <input type="text" placeholder='Project Title' className="form-control mb-2" />
                        <input type="text" placeholder='Languages Used' className="form-control mb-2" />
                        <input type="text" placeholder='Github Link' className="form-control mb-2" />
                        <input type="text" placeholder='Website Link' className="form-control" />
                     </div>
                     <div>
                        <input type="text" className="form-control mt-2" placeholder='Project Overview' />
                     </div>
                   </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddProject
