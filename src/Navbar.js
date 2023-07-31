import React from 'react'
import { useSelector } from 'react-redux'

import {Link} from 'react-router-dom'

export const Navbar = () => {



  
  const products=useSelector((state)=>state.cart.cartItems)
  console.log(products.length)
  
  return (
    <div className=' flex w-screen  justify-between px-2 py-3  bg-slate-200 h-20 '>

    <div className='ml-28 py-2'>
    <Link to="/"><h1 className='text-3xl font-extrabold text-slate-700 hover:text-sky-600'> TK Shopping App</h1></Link>
    </div>
    
    <div className='flex justify-around text-slate-700 py-2 mr-24'>
    <Link to="/" className='mx-4 font-extrabold text-xl hover:text-green-600'>Home</Link>
    <Link to="/LogIn" className='mx-4 font-extrabold text-xl hover:text-green-600'>SignIn</Link>
    <Link to="/SignUp" className='mx-4 font-extrabold text-xl hover:text-green-600'>SignUp</Link>
    <Link to="/cart" className='mx-4 font-extrabold text-xl hover:text-green-600'>Cart</Link>
    <h2 className='mx-1 font-extrabold text-2xl hover:text-green-600'>🛒{products.length}</h2>
    
    </div>

   
    </div>
  )
}
