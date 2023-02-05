import Page from "./FirstPage";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {CartContext} from './CartContext'
import { useState } from "react";
import css from "./App.module.css"

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <div className={css.button}>
          <Link to='/'>產品列表</Link>
          <Link to='/shopping/cart'>購物車</Link>
        </div>

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
