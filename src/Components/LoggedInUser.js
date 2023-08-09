import React from 'react'
import { Link } from 'react-router-dom'

export const LoggedInUser = () => {
  return (
    <div>
    <div className='p-5 w-full items-center h-96 mt-24  bg-slate-100'>
   
    <h1 className='font-bold text-2xl  text-blue-600'>You are already registered . <br/>
    <span className='text-sm text-black font-medium'>Please click here to <Link to="/LogIn" className='text-blue cursor-pointer hover:text-blue-600'>Log In</Link></span></h1>
  </div>
    
    </div>
  )
}
