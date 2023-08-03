import React, { useRef} from 'react'
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
// import { useDispatch } from 'react-redux'
// import { LoggedIn } from './Redux/slice'

export const LogIn = () => {
    // const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const name=useRef()
   let status=useRef(false)
    const password=useRef()
    
    const handleSubmit=(event)=>{
        event.preventDefault()
   
        if(name.current.value === "" || password.current.value === ""){
            toast.error(`Please fill in the details `, { position: "bottom-left" });
         

        }
        else{
           status=true
            // console.log(status)
        toast.success(`Welcome back User ${name.current.value}`, { position: "bottom-left" });
        localStorage.setItem('name',name.current.value)
        localStorage.setItem('password',password.current.value)
        localStorage.setItem('signUp',status)

            
        navigate("/")
            window.location.reload()
        
}
    
    }
       
    
   
   
  return (
    <div>
    <div className='p-5 w-full items-center h-96 bg-slate-100'>
    <form className='flex flex-col ml-56 space-y-2 w-2/3 h-72 mt-12 px-48 bg-slate-100' >
    
    <input type="text" placeholder='UserName' ref={name} className='text-center text-xl mt-8 r h-12 border-2 border-slate-200'/>
    <input type="password" placeholder='Password' ref={password} className='text-center text-xl mt-8 h-12  border-2 border-slate-200'/>
    <button 
    className="bg-green-600 text-white mx-56 mt-4 hover:bg-green-800  text-center h-8 text-lg  font-bold cursor-pointer " 
    onClick={handleSubmit}>Log In</button>
    </form>
    
    
   
    </div>
   
  
   
    </div>
  )
}
