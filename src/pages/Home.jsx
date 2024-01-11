import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeprojectAPI } from '../Services/allAPI'


function Home() {
    const [loggedin,setLoggedin] = useState(false)
    const [homeProjects,setHomeProjects] = useState([])
    const getHomeProjects = async()=>{
        const result = await homeprojectAPI()
        if(result.status===200){
            setHomeProjects(result.data)
        }else{
            console.log(result);
            console.log(result.response.data);
        }
    }
    // console.log(homeProjects);
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
                setLoggedin(true)
        }else{
            setLoggedin(false)
        }
        // api call for home page projects
        getHomeProjects()
    },{})

    return (
        <>
            {/* Landing  */}
            <div className='container-fluid ' style={{ width: '100%', height: '100vh', background: '#fff', color: '#e83283' }}>
                <Row className='align-items-center  p-5'>
                    <Col sm={12} md={6}>
                        <h1><i className="fa-solid fa-laptop-code me-2"></i>Project Vista</h1>
                        <h6 style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis, debitis qui natus consequatur animi libero voluptate molestias, autem invent Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ducimus! Veniam, consectetur! Nisi enim rerum perferendis alias similique tenetur ipsum ipsam accusantium ab cumque voluptatibus suscipit, distinctio excepturi. Voluptates, modi!</h6>
                       { loggedin?
                       <Link to={'/dashboard'} style={{backgroundColor:'#e83283',color:'#fff'}} className='btn  mt-2'>Manage Your Projects</Link> :

                        <Link to={'/login'} style={{backgroundColor:'#e83283',color:'#fff'}} className='btn mt-2'>Start to Explore</Link>
                       }
                    </Col>

                    <Col sm={12} md={6}>
                        <img width={'500px'} className='ms-5' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/ea5d0476339699.5c6694d453222.gif" alt="" />
                    </Col>
                </Row>
            </div>

            {/* Projects */}
            <div style={{backgroundColor:'#fff'}} className="projects ">
                <h1 style={{color:'#e83283'}} className='text-center mb-5'>Explore Our Projects</h1>
                <marquee scrollAmount={25}>
                    <div  className="d-flex justify-content-between">
                      { homeProjects?.length>0?homeProjects.map(project=>(
                             <div style={{width:'500px'}}>
                             <ProjectCard project={project}/>
                            </div>
                      )):null
                      }
                    </div>
                </marquee>
                <div className="text-center mt-3 mb-3 fw-bolder"><Link to={'/projects'} style={{color:'#e83283'}}>View More Projects</Link></div>
            </div>
        </>
    )
}

export default Home
