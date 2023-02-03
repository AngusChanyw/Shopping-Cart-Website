import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import QuantityButton from './QuantityButton';
import Title from './Title'

export default function ShoppingCart() {

  let {cartItems} = useContext(CartContext)
  let cartDetail = cartItems.length <= 0? true : false;

  let payTotal = cartItems.reduce((total, product)=>{
    return total += product.price * product.quantity
  },0)
  const freeDeliver = 99
  const freeInstall = 399

  return (
    <div>
      <Title selfTitle='你的購物車'/>

      {
        !cartDetail &&
        <div>
          <div id="product">
            {
              cartItems.map(product=>(
                <div key={product.id}>
                  <img src={process.env.PUBLIC_URL+'/img/'+product.img} width='25%'/><br/>
                  <p>產品名稱 : {product.name}<br/></p>
                  <p>產品價錢 : HKD${product.price}<br/></p>
                  <p>購買數量 : {product.quantity}個<br/></p>
                  <QuantityButton productInfo={product}/>
                </div>
              ))
            }
          </div>

          <div id="checkOut">
            <div>全部產品總值:</div>
            <div>HKD${payTotal}</div>

            {
              payTotal >= freeDeliver ?
              <div>免費送貨</div> :
              <div>滿HKD${freeDeliver}免費送貨<br/>還欠HKD${freeDeliver - payTotal}免費安裝</div>
            }
            {
              payTotal >= freeInstall ?
              <div>免費安裝</div> :
              <div>滿HKD${freeInstall}免費安裝<br/>還欠HKD${freeInstall - payTotal}免費安裝</div>
            }
          </div>
        </div>
      }
      {
        cartDetail &&
        <div>
        <p>你的購物車是空的</p>
        <Link to='/'>快去選購產品</Link>
        </div>

      }

    </div>
  )
}
