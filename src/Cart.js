import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './Redux/slice'

export const Cart = () => {
  const products=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const handleRemove=(product)=>{
    dispatch(remove(product))
    console.log(product)
  }
  
  return (
    <div className='flex flex-wrap text-center m-4 w-screen'>

    <h1 className='font-bold text-xl text-black'>CART</h1>
    {
        products.map(product=>(
            <div className='productCard h-88 bg-slate-50 w-full justify-between flex text-center rounded mx-12 my-4 px-2 py-2  ' key={product.id}>
        <img src={product.image} alt="product" className=' w-28 h-28'/>
            <div className='items-center w-full flex justify-between  text-l  '>
            <h2 className='font-bold py-1 ml-12'>{product.title}</h2>
            <h3 className='text-green-900 font-bold py-1'>₹{product.price}</h3>
            <button 
            className='bg-blue-950 text-white font-semibold px-3 py-3 text-lg rounded-xl hover:bg-blue-400 hover:text-red'
            onClick={()=>handleRemove(product.id)}>Remove</button>
           
            </div>
            </div>

        ))
    }

    
    </div>
  )
}
