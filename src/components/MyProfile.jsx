import React, { useState } from 'react'
import { Collapse, FloatingLabel, Form } from 'react-bootstrap'


function MyProfile() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='card p-3 shadow mb-3 mt-4'>
                <div className='d-flex justify-content-between '>
                    <h3 className='text-primary'>My Profile</h3>
                    <div  onClick={() => setOpen(!open)} className='btn text-primary '><i class="fa-solid fa-angle-down fa-beat"></i></div>
                </div>
               <Collapse in={open}>
                    <div className='row justify-content-center mt-3'>
                        {/* upload picture */}
                        <label className='text-center'>
                            <input style={{ display: 'none' }} type="file" />
                            <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile pic" />
                        </label>
                        <div className='mt-3'>
                            <input type="text" placeholder='Github' className=' w-100 p-1 border-primary rounded' />
                            <input type="text" placeholder='LinkedIn' className='w-100 p-1 border-primary rounded mt-3' />
                        </div>
                        <div className="mt-3 text-center d-grid">
                            <button className="btn btn-primary">Update</button>
                        </div>
                </div>
                </Collapse>
            </div>
        </div>
    )
}

export default MyProfile
