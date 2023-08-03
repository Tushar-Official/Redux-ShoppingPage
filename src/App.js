
import './App.css';
// import { Home } from './Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { Cart } from './Cart';
import { Footer } from './Footer';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { Suspense ,lazy } from 'react';



const Home=lazy(()=>import('./Home'))
function App() {
  
  return (
    <div className="App ">
    <Provider store={store}>
    <Router>
    <ToastContainer/>
      <Navbar/>
      <Routes>
      
       <Route path="/" element={
        <Suspense fallback={<div><h1 className='text-2xl text-black font-extrabold p-12'>Loading....</h1></div>}>
        <Home/>
        </Suspense>
      }/>
      
       <Route path="cart" element={<Cart/>}/>
       <Route path="LogIn" element={<LogIn/>}/>
       <Route path="SignUp" element={<SignUp/>}/>
       
       </Routes>
       </Router>
       
      
       <Footer />
    </Provider>
    </div>
  );
}

export default App;
