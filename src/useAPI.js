import { useEffect, useState } from "react";

const Usedata = () => {
    const [Data,setData]=useState([])
   
    const getData=async()=>{
        const response=await fetch("https://fakestoreapi.com/products/")
        const data=await response.json()
      try{
        setData(data)
        
      }
      catch(err){
        console.log(err)
        
      }
    }
    useEffect(()=>{
        getData()
        
    },[])

  return Data
}

export default Usedata