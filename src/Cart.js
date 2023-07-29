import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove,decrement, increment} from './Redux/slice';
import {Link} from 'react-router-dom'

export const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems); // Accessing the cartItems array
  const dispatch = useDispatch();
  const cartLength=products.length
  

  const handleRemove = (id) => {
    dispatch(remove({id})); // Dispatching the remove action with the product ID
  };
  const handleIncrement = (id) => {
    dispatch(increment({ id })); // Dispatching the addToCart action with the product ID
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id })); // Dispatching the decrement action with the product ID
  };
  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.cartQuantity,
    0
  );


  return (
    <div className='flex flex-wrap text-center m-4  w-screen'>
   {cartLength ===0 ? null:
    
    <div className='titles mt-2 grid grid-row-1 grid-cols-3 w-screen align-baseline justify-evenly'>
    <span className='mr-20 text-start ml-14 font-bold text-xl'>Product</span>
    <span className='mx-4 font-bold text-xl'>Quantity</span>
    <span className='text-start ml-14 font-bold text-xl'>Price</span>
    </div>}
      
      
    {cartLength ===0?<div className='w-screen text-center font-extrabold text-2xl space-y-4 mt-12'>
    <h2>Cart is Empty !! 😔</h2> 
    <br/>
    <Link to="/">
    <span className='text-xl text-black font-medium hover:text-gray-400 hover:font-medium'>Continue Shopping</span>
    </Link>
  
  </div>:

    
    products.map((product) => (
      <div
        className='productCard h-88 bg-slate-50 w-screen justify-between flex text-center rounded mx-10 my-4 px-2 py-2'
        key={product.id}
      >
        <img src={product.image} alt="product" className='w-28 h-28' />
        <div className='items-center w-full flex justify-between text-l'>
          <h2 className='font-bold py-1 ml-12'>{product.title}</h2>
          <div>
            <button
              className='bg-blue-950 text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-400'
              onClick={() => handleDecrement(product.id)}
            >
              -
            </button>
            <span className='px-4'>{product.cartQuantity}</span>
            <button
              className='bg-blue-950 text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-400'
              onClick={() => handleIncrement(product.id)}
            >
              +
            </button>
          </div>
          <h3 className='text-green-900 font-bold ml-4 py-1'>₹{Math.floor(product.price *product.cartQuantity).toFixed(2)}</h3>
          <button
            className='bg-blue-950 text-white font-semibold px-3 py-3 text-lg rounded-xl hover:bg-blue-400 hover:text-red'
            onClick={() => handleRemove(product.id)} // Pass the product ID to handleRemove
          >
            Remove
          </button>
        </div>
      </div>
    ))}
    {cartLength===0?null:
      
      <div className="cart-checkout grid grid-row-3 grid-col-1 w-full justify-end mr-12 mt-4 ">
      <div className="subtotal flex justify-around">
        <span className='text-2xl font-semibold'>Subtotal</span>
        <span className="amount text-xl font-bold">₹{Math.floor(totalAmount).toFixed(2)}</span>
      </div>
      <div className=''>
      <p className='text-xs'>Taxes and shipping calculated at checkout</p>
      <button className='bg-blue-950 mt-2 w-full text-white font-semibold px-3 py-3 text-xl rounded-xl hover:bg-green-600 hover:text-xl'>Check out</button>
      </div>
      <div className="continue-shopping flex w-full justify-center mt-2">
        <Link to="/">
        
        
          <span className='text-xl text-black font-medium hover:text-gray-400 hover:font-medium'>Continue Shopping</span>
        </Link>
      </div>
      </div>
      
    }
    

  
  </div>

  );
}
