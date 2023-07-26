import React from 'react'
import { useSelector } from 'react-redux'

import {Link} from 'react-router-dom'

export const Navbar = () => {



  
  const products=useSelector((state)=>state.cart)
  return (
    <div className=' flex w-screen  justify-between px-2 py-3  bg-slate-100 h-20 '>

    <div className='ml-12 py-2'>
    <h1 className='text-2xl font-extrabold'>Shopping App</h1>
    </div>
    
    <div className='flex justify-around font-black py-2 mr-32'>
    <Link to="/" className='mx-4 font-extrabold text-lg'>Home</Link>
    <Link to="/cart" className='mx-4 font-extrabold text-lg'>Cart</Link>
    <h3 className='mx-4 font-extrabold text-lg'>Cart Item: {products.length}</h3>
    
    </div>

   
    </div>
  )
}
