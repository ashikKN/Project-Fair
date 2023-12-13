import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            {/* Landing  */}
            <div className='container-fluid ' style={{ width: '100%', height: '100vh', background: '#fff', color: '#e83283' }}>
                <Row className='align-items-center  p-5'>
                    <Col sm={12} md={6}>
                        <h1><i className="fa-solid fa-laptop-code me-2"></i>Project Vista</h1>
                        <h6 style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis, debitis qui natus consequatur animi libero voluptate molestias, autem invent Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ducimus! Veniam, consectetur! Nisi enim rerum perferendis alias similique tenetur ipsum ipsam accusantium ab cumque voluptatibus suscipit, distinctio excepturi. Voluptates, modi!</h6>
                        <Link to={'/login'} style={{backgroundColor:'#e83283',color:'#fff'}} className='btn w-25 mt-2'>Explore More</Link>
                    </Col>

                    <Col sm={12} md={6}>
                        <img width={'500px'} className='ms-5' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/ea5d0476339699.5c6694d453222.gif" alt="" />
                    </Col>
                </Row>
            </div>

            {/* Projects */}
            <div className="projects mt-3">
                <h1 className='text-center mb-3'>Explore Our Projects</h1>
                <marquee scrollAmount={30}>
                    <Row>
                            <Col sm={12} md={6} lg={4}>
                                {/* component for displaying project */}
                                <ProjectCard/>
                            </Col>
                    </Row>
                </marquee>
                <div className="text-center mt-3 mb-3"><Link to={'/projects'}>View More Projects</Link></div>
            </div>
        </>
    )
}

export default Home
