import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {product && (
        <div className="flex flex-col md:flex-row">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 object-contain h-[500px]"
          />
          <div className="md:ml-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-700 my-2">${product.price}</p>
            <p className="my-4">{product.description}</p>
            <button
              onClick={() => dispatch(addItem(product))}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
