
import './App.css';
import { Home } from './Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { Cart } from './Cart';
import { Footer } from './Footer';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Router>
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
