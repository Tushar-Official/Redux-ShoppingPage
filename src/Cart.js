import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove,decrement, increment} from './Redux/slice';

export const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems); // Accessing the cartItems array
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove({id})); // Dispatching the remove action with the product ID
  };
  const handleIncrement = (id) => {
    dispatch(increment({ id })); // Dispatching the addToCart action with the product ID
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id })); // Dispatching the decrement action with the product ID
  };


  return (
    <div className='flex flex-wrap text-center m-4 w-screen'>
      <h1 className='font-bold text-xl text-black'>CART</h1>

      {products.map((product) => (
        <div
          className='productCard h-88 bg-slate-50 w-full justify-between flex text-center rounded mx-12 my-4 px-2 py-2'
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

            
            <h3 className='text-green-900 font-bold py-1'>₹{product.price *product.cartQuantity}</h3>
            <button
              className='bg-blue-950 text-white font-semibold px-3 py-3 text-lg rounded-xl hover:bg-blue-400 hover:text-red'
              onClick={() => handleRemove(product.id)} // Pass the product ID to handleRemove
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
