import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductList from '../pages/ProductList'
import Cart from '../components/Cart'
import ProductDetail from '../pages/productDetail'

const AllRoutes = () => {
  return (

        <Routes>
          <Route path="/" exact element={<ProductList/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:productId" element={<ProductDetail/>} />
        </Routes>

      


  )
}

export default AllRoutes