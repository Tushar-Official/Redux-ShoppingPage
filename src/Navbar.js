import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  // const status=useSelector((state)=>state.cart.userStatus)
  const products=useSelector((state)=>state.cart.cartItems)
 
 const userStatus=localStorage.getItem('signUp')
 const handleLogOut=()=>{
setTimeout(()=>{
  localStorage.clear()
  window.location.reload();

},1500)
 
  
 }
  // console.log(userStatus)
 

  return (
    <div className=' flex w-screen fixed top-0  justify-between px-2 py-3  bg-slate-800 h-20 '>

    <div className='ml-24 py-2 flex'>
   
    <Link to="/"><h1 className='text-yellow-500 text-4xl ml-8 font-extrabold   hover:text-sky-600'> TaraGini🛍️ </h1></Link>
    </div>
    
    <div className='flex justify-around text-slate-700 py-2 mr-24'>
    {userStatus==="true"?<Link to="/"><h3 className='mx-4 font-extrabold text-white text-xl hover:text-green-600'>👤{localStorage.getItem('name')}</h3></Link>: null}
    <Link to="/" className='mx-4 font-extrabold text-xl text-white hover:text-green-600'>Home</Link>
 {userStatus==="true"? <Link to="/" className='mx-4 font-extrabold text-xl hover:text-red-600' onClick={handleLogOut}>LogOut</Link>:
<>
    <Link to="/LogIn" className='mx-4 font-extrabold text-xl text-white hover:text-green-600'>SignIn</Link>
  <Link to="/SignUp" className='mx-4 font-extrabold text-xl text-white hover:text-green-600'>Register</Link> </>
}

  
    <Link to="/cart" className='mx-4 font-extrabold text-xl text-white hover:text-green-600'>Cart</Link>
    <h2 className='mx-1 font-extrabold text-2xl text-white hover:text-green-600'>🛒{products.length}</h2>
    
    </div>

   
    </div>
  )
}
