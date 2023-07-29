
import './App.css';
import { Home } from './Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { Cart } from './Cart';
import { Footer } from './Footer';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div className="App ">
    <Provider store={store}>
    <Router>
    <ToastContainer/>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="cart" element={<Cart/>}/>
       </Routes>
       </Router>
       <Footer />
    </Provider>
    </div>
  );
}

export default App;
