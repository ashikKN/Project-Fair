import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';


function AddProject() {
    const [show, setShow] = useState(false)
    const [projectDetails,setProjectDetails] = useState({
        title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
    // state to store url of image converted from file uploaded
    const [preview,setPreview] = useState("")
    // state to store token 
    const [token,setToken] = useState("")

    useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }else{
            setPreview("")
        }
    },[projectDetails.projectImage])
    
    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            setToken(sessionStorage.getItem('token'))
        }else{
            setToken("")
        }
    },[])

    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            title:"",languages:"",overview:"",github:"",website:"",projectImage:""
        })
    }

    // handle add
    const handleAdd = async (e)=>{
        e.preventDefault()
        const {title,languages,overview,github,website,projectImage} = projectDetails
        if(!title || !languages || !overview || !github || !website || !projectImage){
            toast.info("Please fill the form completely !!!")
        }else{
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("languages",languages)
            reqBody.append("overview",overview)
            reqBody.append("github",github)
            reqBody.append("website",website)
            reqBody.append("projectImage",projectImage)
            
            if(token){
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }
                const result = await addProjectAPI(reqBody,reqHeader)
                if(result.status===200){
                // console.log(result.data);
                handleClose()
                alert("project added")
                
                }else{
                toast.warning(result.response.data);
                // console.log(result);
            }
            }
        }
    }

    const handleShow = () => setShow(true);
    return (
        <>
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
                          <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                          <img className='img-fluid' src={preview?preview:"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} alt="" /></label>

                    </div>
                     <div className="col-lg-6">
                        <input type="text" placeholder='Project Title' className="form-control mb-2" value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                        <input type="text" placeholder='Languages Used' className="form-control mb-2" value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}/>
                        <input type="text" placeholder='Github Link' className="form-control mb-2" value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} />
                        <input type="text" placeholder='Website Link' className="form-control" value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                     </div>
                     <div>
                        <input type="text" className="form-control mt-2" placeholder='Project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                     </div>
                   </div>
                   <ToastContainer 
                   position="top-right"
                   autoClose={2000}
                   theme='colored'
                   />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject
