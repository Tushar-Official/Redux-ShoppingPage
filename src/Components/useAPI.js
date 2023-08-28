import { useEffect, useState } from "react";

const Usedata = () => {
    const [Data,setData]=useState([])
 
    const getData=async()=>{
      setTimeout(async()=>{
        const response=await fetch("https://fakestoreapi.com/products/",{
          method:'GET',
          headers:{
            'Content-Type':"application/json",
          }
        })
        console.log(response.headers)
        const data=await response.json()
      try{
        setData(data)
        // console.log(data)
        
      }
      catch(err){
        console.log(err)
        
      }
    },600)
    }
  
  
      useEffect(()=>{
        getData()
      }
    ,[])
      
    
   

  return Data
}

export default Usedata