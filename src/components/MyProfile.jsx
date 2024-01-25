import React, { useEffect, useState } from 'react'
import { Collapse, FloatingLabel, Form } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {editUserAPI} from '../Services/allAPI'

function MyProfile() {
    const [open, setOpen] = useState(false);
    // state for holding profile details
    const [userProfile, setUserProfile] = useState({
        username: "", email: "", password: "", profile: "", github: "", linkedin: ""
    })
    // state for holding existing image if any
    const [existingImage, setExistingImage] = useState("")
    // state for holding url, converted from user uploaded image file
    const [preview, setPreview] = useState("")
    
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserProfile({ ...userProfile, username: user.username, email: user.email, password: user.password, profile: "", github: user.github, linkedin: user.linkedin })
        setExistingImage(user.profile)
    },[open])

    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        } else {
            setPreview("")
        }
    }, [userProfile.profile])

    const handleProfileUpdate = async () => {
        const { username, email, password, profile, github, linkedin } = userProfile

        if(!github || !linkedin) {
            toast.info("Please fill the form completely!!!")
        }else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            preview?reqBody.append("profileImage",profile):reqBody.append("profileImage",existingImage)
            const token = sessionStorage.getItem("token")

            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
                }

                const res = await editUserAPI(reqBody,reqHeader)
                if(res.status===200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                }else{
                    setOpen(!open)
                    console.log(res)
                    console.log(res.response.data);
                }
            }else{
                const reqHeader = {
                    "Content-Type":"application/json", "Authorization":`Bearer ${token}`
                }
                const res = await editUserAPI(reqBody,reqHeader)
                if(res.status===200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                }else{
                    setOpen(!open)
                    console.log(res)
                    console.log(res.response.data);
                }
            }
             
        }
    }
    return (
        <div>
            <div className='card p-3 shadow mb-3 mt-4'>
                <div className='d-flex justify-content-between '>
                    <h3 className='text-primary'>My Profile</h3>
                    <div onClick={() => setOpen(!open)} className='btn text-primary '><i class="fa-solid fa-angle-down fa-beat"></i></div>
                </div>
                <Collapse in={open}>
                    <div className='row justify-content-center mt-3'>
                        {/* upload picture */}
                        <label className='text-center'>
                            <input style={{ display: 'none' }} type="file" onChange={e => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />

                            {
                                existingImage !== "" ?
                                    <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="Upload Image" /> :
                                    <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg`} alt="Upload Image" />
                            }
                        </label>

                        <div className='mt-3'>
                            <input type="text" placeholder='Github' value={userProfile.github} onChange={e => setUserProfile({ ...userProfile, github: e.target.value })} className=' w-100 p-1 border-primary rounded' />

                            <input type="text" placeholder='LinkedIn' value={userProfile.linkedin} onChange={e => setUserProfile({ ...userProfile, linkedin: e.target.value })} className='w-100 p-1 border-primary rounded mt-3' />
                        </div>

                        <div className="mt-3 text-center d-grid">
                            <button onClick={handleProfileUpdate} className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </Collapse>
                
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme='colored'
            />
        </div>
    )
}

export default MyProfile
