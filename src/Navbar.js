import React from 'react'
import { useSelector } from 'react-redux'

import {Link} from 'react-router-dom'

export const Navbar = () => {



  
  const products=useSelector((state)=>state.cart)
  return (
    <div className=' flex w-screen  justify-between px-2 py-3  bg-slate-100 h-20 '>

    <div className='ml-36 py-2'>
    <h1 className='text-2xl font-extrabold text-slate-700'>Shopping App</h1>
    </div>
    
    <div className='flex justify-around text-slate-700 py-2 mr-32'>
    <Link to="/" className='mx-4 font-extrabold text-xl'>Home</Link>
    <Link to="/cart" className='mx-4 font-extrabold text-xl'>Cart</Link>
    <h2 className='mx-4 font-extrabold text-2xl'>🛍️{products.length}</h2>
    
    </div>

   
    </div>
  )
}
