import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

function MyProfile() {
    return (
        <div>
            <div className='card p-3 shadow mb-3 mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3>My Profile</h3>
                    <div className='btn btn-outline-light'><i class="fa-solid fa-check"></i></div>
                </div>
                <div className='row justify-content-center mt-3 '>
                    {/* upload picture */}
                    <label className='text-center'>
                        <input style={{ display: 'none' }} type="file" />
                        <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile pic" />
                    </label>
                    <div className='mt-3'>
                        <input type="text" placeholder='Github' className='form-control' />
                        <input type="text" placeholder='LinkedIn' className='form-control mt-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
