import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { allProjectsAPI } from '../Services/allAPI'

function Projects() {
  // state for handling input box value
  const [searchKey,setsearchKey] = useState("")
  const [allProjects,setAllProjects] = useState([])
  
  const getallProjects = async()=>{
      if(sessionStorage.getItem('token')){
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
        const result = await allProjectsAPI(searchKey,reqHeader)
        if(result.status===200){
            setAllProjects(result.data)
        }else{
           console.log(result);
        }
      }
  }
  console.log(allProjects)

  useEffect(()=>{
   getallProjects()
  },[searchKey])

  return (
    <>
      <Header />
      <div style={{backgroundColor:'#fff'}} className="projects" >
        <h1 className="text-center text-primary mt-5">All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div  className="d-flex border w-50 rounded mb-4">
            <input type="text" className=' w-100 p-1 border-primary rounded' placeholder='Search Projects by Technologies' onChange={e=>setsearchKey(e.target.value)} />
            <i style={{ marginLeft: '-50px' }} className='fa-solid fa-magnifying-glass fa-rotate-90'></i>
          </div>
        </div>
      </div>
      <Row style={{backgroundColor:'#fff'}} className='container-fluide '>
        {allProjects?.length>0?allProjects.map(project=>(
             <Col className='d-flex justify-content-evenly mb-3' sm={12} md={6} lg={4}>
             <ProjectCard project={project}/>
           </Col>
        )):null
         
        }
      </Row>
    </>
  )
}

export default Projects
