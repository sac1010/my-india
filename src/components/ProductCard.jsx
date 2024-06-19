import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative hover:scale-105 transition-transform">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain rounded"
        />
      </Link>
      <Link to={`/products/${product.id}`}>
        <h3 className="text-lg font-bold mt-2">{product.title}</h3>
        <p className="text-gray-700 mt-1 mb-10">${product.price}</p>
      </Link>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 absolute bottom-2 flex gap-2"
        onClick={() => dispatch(addItem(product))}
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
