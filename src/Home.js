import React, { useState } from 'react'
import useData from './useAPI'
import { useDispatch } from 'react-redux'
import { add } from './Redux/slice'

export const Home = () => {
    const [data,setData]=useState([])
    const dataObj=useData()
   
    function setSearch(){
        setData(data)
        
    }
    const dispatch=useDispatch();

   const handleClick=(product)=>{
            dispatch(add(product))
            
            
   }

  return (
    <>
    <div className="navbar p-4 h-24">
    <input type="text" placeholder='Search Your data....' className='my-2 h-1/2 w-96 border-2 text-center text-l border-slate-400 rounded-l-xl'   
    value={data} onChange={(e)=>setData(e.target.value)}/>

    <button onClick={setSearch} className='bg-slate-300 text-xl h-1/2 w-24 rounded-r-xl border-2 border-slate-200 font-extrabold '>Search</button>
    </div>
    <div className="product flex flex-wrap justify-center w-screen h-full cursor-pointer">
    {
        dataObj .filter((val) => {
                if(data == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(data.toLowerCase())){
                  return val;
                }
              })
              .map(product=>(
                <div className='productCard h-84 bg-slate-50 w-72 flex justify-center flex-wrap rounded m-12 px-2 py-2 hover:scale-95 ' key={product.id}>
            <img src={product.image} alt="product" className='h-32 w-40'/>
                <div className='items-center w-full h-1/2 my-2 text-m'>
                <h2 className=' text-sm font-semibold py-1 '>{product.title}</h2>
                <h3 className='text-green-900 font-semibold py-1'>₹{product.price}</h3>
                <p className='text-blue-950 font-semibold py-1'>{product.rating.rate}⭐</p>
                <button 
                className='bg-purple-800 text-white font-semibold text-m px-2 py-2  rounded-xl hover:bg-blue-800'
                onClick={()=>handleClick(product)} >ADD TO CART</button>
                </div>
                </div>
    
            ))
            
        }
    

    
    </div>
    
    </>
  )
}
