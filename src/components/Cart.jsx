import React, { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';


const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='w-full'>
          {items.map((item) => (
            <li key={item.uniqueId} className="mb-2 w-full">
              <div className="flex justify-between">
                <span>{item.title}</span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(removeItem(item.uniqueId))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
