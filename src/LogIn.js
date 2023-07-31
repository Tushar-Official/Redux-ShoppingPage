import React, { useRef } from 'react'
import {toast} from "react-toastify"
export const LogIn = () => {

   
    const email=useRef()
    
    const password=useRef()
    
    const handleSubmit=()=>{
   
        if(email.current.value === "" || password.current.value === ""){
            toast.error(`Please fill in the details `, { position: "bottom-left" });

        }
        else{
            toast.success(`Welcome back User ${email.current.value}`, { position: "bottom-left" });
        localStorage.setItem('email',email.current.value)
        localStorage.setItem('password',password.current.value)
        localStorage.setItem('signUp',email.current.value)
        
        }
        
      }
       
    
   
   
  return (
    <div>
    <div className='p-5 w-full items-center h-96 bg-slate-100'>
    <form className='flex flex-col ml-56 space-y-2 w-2/3 h-72 mt-12 px-48 bg-slate-100' >
    
    <input type="email" placeholder='Email' ref={email} className='text-center text-xl mt-8 r h-12 border-2 border-slate-200'/>
    <input type="password" placeholder='Password' ref={password} className='text-center text-xl mt-8 h-12  border-2 border-slate-200'/>
    <buttton 
    className="bg-green-600 text-white mx-56 mt-4 hover:bg-green-800  text-center h-8 text-lg  font-bold cursor-pointer " onClick={handleSubmit}>Log In</buttton>
    </form>
    
    
   
    </div>
    </div>
  )
}
