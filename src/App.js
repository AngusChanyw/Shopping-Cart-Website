import Page from "./FirstPage";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {CartContext} from './CartContext'
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems, setCartItems}}>

        <Link to='/'>首頁</Link>
        <Link to='/shopping/cart'>購物車</Link>

        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path='/product/detail' element={<ProductDetail/>}/>
          <Route path='/product/detail/:id' element={<ProductDetail/>}/>
          <Route path='/shopping/cart' element={<ShoppingCart/>}/>
          <Route path='*' element={<p>找不到頁面</p>}/>
        </Routes>

      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
