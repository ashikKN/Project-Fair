import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='card p-3 shadow mb-3'>
       <div className='d-flex justify-content-between align-items-center '>
           <h2>My Projects</h2>
           <AddProject/>
       </div>

       <div className="mt-4">
        {/* collection of user projects */}
        <div className="border d-flex align-items-center rounded p-2">
          <h5>Project Title</h5>
          <div className="icons ms-auto">
            <button className="btn"><i className='fa-solid fa-pen-to-square fs-5'></i></button>
            <button className="btn"><i className='fa-brands fa-github fs-5'></i></button>
            <button className="btn"><i className='fa-solid fa-trash fs-5'></i></button>
          </div>
        </div>
        <p className='text-danger fw-bolder'>No Projects Uploaded yet !!!</p>
       </div>
    </div>
  )
}

export default MyProjects
