import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='card p-3 shadow mb-3'>
       <div className='d-flex justify-content-between align-items-center '>
           <h2>My Projects</h2>
           <AddProject/>
       </div>
    </div>
  )
}

export default MyProjects
