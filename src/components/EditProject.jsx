import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';

function EditProject({ project }) {
    // TO STORE THE EDITED VALUES 
    const [projectDetails, setProjectDetails] = useState({
        id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: ""
    })

    // state to hold url of image converted from file uploaded
    const [preview, setPreview] = useState("")

    const [show, setShow] = useState(false)
    console.log(projectDetails);
    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: ""
        })
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    const handleUpdate = async () => {
        const { id, title, languages, github, website, overview, projectImage } = projectDetails
        if (!title || !languages || !overview || !github || !website) {
            toast.info("Please fill the form completely !!!")
        } else {

        }
    }
    return (
        <>
            <button onClick={handleShow} className="btn text-primary"><i className='fa-solid fa-pen-to-square fs-5'></i></button>
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
                                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                                <img className='img-fluid' src={preview ? preview : `${BASE_URL}/uploads/${project.projectImage}`} alt="project picture" /></label>

                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder='Project Title' className="form-control mb-2" value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                            <input type="text" placeholder='Languages Used' className="form-control mb-2" value={projectDetails.languages} onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
                            <input type="text" placeholder='Github Link' className="form-control mb-2" value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                            <input type="text" placeholder='Website Link' className="form-control" value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                        </div>
                        <div>
                            <input type="text" className="form-control mt-2" placeholder='Project Overview' value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            theme='colored'
                        />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditProject
