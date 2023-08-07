import React, { useRef} from 'react'
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
// import { useLocation } from 'react-router-dom';
import db from './Firebase'
import { ref,get } from 'firebase/database';
export const LogIn = () => {
 
    const navigate=useNavigate()
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
   let status=useRef(false)
   
    
    const handleSubmit=async (event)=>{
        event.preventDefault()
        const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log(passwordValue)
        if (usernameValue === "" || passwordValue === "") {
          toast.error(`Please fill in the details `, { position: "bottom-left" });
          return

        } 
        
        try {
          const userRef = ref(db, 'userData/userDetails'); // Access the reference to the 'userData/userDetails' location
          const snapshot = await get(userRef); // Get the data snapshot from the reference
          const userData = snapshot.val();
          // console.log(userData);
          if (!userData) {
            toast.error(`User not found`, { position: 'bottom-left' });
            return;
          }
    
          let userFound = false;
          let loggedInUser = null;
    
          // Loop through the user data to find a match for the username
          Object.keys(userData).forEach((userId) => {
            if (userData[userId].Username === usernameValue) {
              userFound = true;
              loggedInUser = userData[userId];
              return;
            }
          });
    
          if (!userFound) {
            toast.error(`User not found`, { position: 'bottom-left' });
            return;
          }
    
          if (loggedInUser.Userpassword !== passwordValue) {
            toast.error(`Incorrect password`, { position: 'bottom-left' });
            return;
          }
    
          setTimeout(() => {
            toast.success(`Login successful`, { position: 'bottom-left' });
            status.current = true;
            localStorage.setItem('signUp', status.current);
            localStorage.setItem('name', usernameValue);
            navigate('/');
            window.location.reload();
          }, 1000);
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error(`An error occurred. Please try again.`, { position: 'bottom-left' });
        }
      };
       
    
   
   
  return (
    <div>
    <div className='p-5 w-full items-center h-96 mt-8 bg-slate-100'>
    <form className='flex flex-col ml-56 space-y-2 w-2/3 h-72 mt-12 px-48 bg-slate-100' >
    
    <input type="text" placeholder='UserName' ref={usernameRef} className='text-center text-xl mt-8 r h-12 border-2 border-slate-200'/>
    <input type="password" placeholder='Password' ref={passwordRef} className='text-center text-xl mt-8 h-12  border-2 border-slate-200'/>
    <button 
    className="bg-blue-300 text-slate-700  mt-4 hover:bg-sky-800 hover:text-white  text-center h-8 text-lg  font-bold cursor-pointer " 
    onClick={handleSubmit}>Log In</button>
    </form>
    
    
   
    </div>
   
  
   
    </div>
  )
}