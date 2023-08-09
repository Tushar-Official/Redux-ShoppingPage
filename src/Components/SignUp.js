import React, { useRef} from 'react'
import {toast} from "react-toastify"
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoggedIn } from '../Redux/slice'
import { LoggedInUser } from './LoggedInUser'
import { useSelector } from 'react-redux'
import { ref, push, set } from 'firebase/database';
import db from './Firebase'; // Import your Firebase


export const SignUp = () => {
  const status=useSelector((state)=>state.cart.userStatus)
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const name=useRef()
    const email=useRef()
    const password=useRef()
   
    const handleSubmit=async()=>{

      if(name.current.value ===""|| email.current.value===""|| password.current.value==="" ){
        toast.error(`Please fill in the details `, { position: "bottom-left" });
      }
      else{
        toast.success(`Welcome to Shopping App  ${name.current.value}`, { position: "bottom-left" });
        // console.log(name.current.value,email.current.value,password.current.value)
        localStorage.setItem('name',name.current.value)
        localStorage.setItem('email',email.current.value)
        localStorage.setItem('password',password.current.value)
        
        const userRef = ref(db, 'userData/userDetails');
      const newUserRef = push(userRef);
      const userId = newUserRef.key;

      const userData = {
        Username: name.current.value,
        Userpassword: password.current.value,
        UserEmail: email.current.value,
      };
      dispatch(LoggedIn(true))
      
      set(newUserRef, userData);
      navigate('/LogIn')
      
      
      // navigate(`/LogIn?name=${encodeURIComponent(name.current.value)}&password=${encodeURIComponent(password.current.value)}`);
         
      }
    }
    
  return (
    <div >
    <div className='p-5 w-full items-center h-96 mt-24  bg-slate-100'>
    {status ? (
      <div>
        <LoggedInUser/>
      </div>
    ) : (
   
    <div>
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
  
    )}
    </div>
    

    </div>
  )
}
