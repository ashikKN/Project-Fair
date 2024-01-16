import React, {useState, useEffect, useContext } from 'react'
import AddProject from './AddProject'
import { userProjectAPI } from '../Services/allAPI'
import { addProjectResponseContext } from '../Contexts/ContextShare'
import { Alert } from 'react-bootstrap'
import EditProject from './EditProject'


function MyProjects() {
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
  const [userProjects,setUserProjects] = useState([])

  const getUserProjects = async()=>{
    if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        'Content-Type':'application/json' ,'Authorization':`Bearer ${token}`
      }
      const result = await userProjectAPI(reqHeader)
      if(result.status===200){
        setUserProjects(result.data)
      }else{
        console.log(result);
        console.log(result.response.data);
      }
    }
  }

  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse])
  // console.log(userProjects);

  return (
    <div className='card p-3 shadow mb-3 '>
       <div className='d-flex justify-content-between align-items-center '>
           <h2 style={{color:'#e83283'}}>My Projects</h2>
           <AddProject/>
       </div>
      {
        addProjectResponse.title?<Alert dismissible className='fw-bolder text-danger'>{addProjectResponse.title}</Alert>:null
      }
       
       {
       userProjects?.length>0?userProjects?.map(project=>(
        <div className="mt-3 text-primary">

        {/* collection of user projects */}
          <div className="border d-flex align-items-center rounded p-2 border-primary">

          <h5>{project.title}</h5>
          <div className="icons ms-auto">
            <EditProject project={project}/>
            <a href={project.github} target="_blank" className="btn text-primary"><i className='fa-brands fa-github fs-5'></i></a>
            <button className="btn text-primary"><i className='fa-solid fa-trash fs-5'></i></button>
          </div>
        </div>
       </div>
       )):<p className='text-danger fw-bolder'>No Projects Uploaded yet !!!</p>
       }
    </div>
  )
}

export default MyProjects
