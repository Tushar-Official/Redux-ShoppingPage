import React, { useRef } from 'react'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const navigate=useNavigate()
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const handleSubmit=()=>{

      if(name.current.value ===""|| email.current.value===""|| password.current.value==="" ){
        toast.error(`Please fill in the details `, { position: "bottom-left" });
      }
      else{
        toast.success(`Welcome to Shopping App  ${name.current.value}`, { position: "bottom-left" });
        console.log(name.current.value,email.current.value,password.current.value)
        localStorage.setItem('name',name.current.value)
        localStorage.setItem('email',email.current.value)
        localStorage.setItem('password',password.current.value)
       
        navigate(`/LogIn?name=${encodeURIComponent(name.current.value)}&password=${encodeURIComponent(password.current.value)}`);
        
      }
    }
    
  return (
    <div >
    <div className='p-5 w-full items-center h-96 mt-24  bg-slate-100'>
    <h1 className='font-bold text-4xl  text-blue-600 '>Lets Create Your Account</h1>
    <form className='flex flex-col ml-56 space-y-2 w-2/3 h-84 px-48 bg-slate-100 ' >
    <input type="name" placeholder='Name' ref={name} className='text-center text-xl mt-8  h-12  border-2 border-slate-200  '/>
    <input type="email" placeholder='Email' ref={email} className='text-center text-xl mt-8 r h-12 border-2 border-slate-200'/>
    <input type="password" placeholder='Password' ref={password} className='text-center text-xl mt-8 h-12  border-2 border-slate-200'/>
    <buttton 
    className="bg-blue-300 text-slate-700  mt-4 hover:bg-sky-800 hover:text-white  text-center h-8 text-lg  font-bold cursor-pointer" 
    onClick={handleSubmit}>Register</buttton>
    </form>
    
      
    </div>
    </div>
  )
}
