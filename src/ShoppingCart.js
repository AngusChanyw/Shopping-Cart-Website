import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import QuantityButton from './QuantityButton';
import Title from './Title'
import css from './ShoppingCart.module.css'

export default function ShoppingCart() {

  let {cartItems} = useContext(CartContext)
  let cartDetail = cartItems.length <= 0? true : false;

  let payTotal = cartItems.reduce((total, product)=>{
    return total += product.price * product.quantity
  },0)
  const freeDeliver = 499
  const freeInstall = 1299

  return (
    <div>
      <Title selfTitle='你的購物車'/>

      {
        !cartDetail &&
        <div className={css.parents}>
          <div className={css.productParents}>
            {
              cartItems.map(product=>(
                <div className={css.product} key={product.id}>
                  <Link to={'/product/detail/'+product.id}>
                    <img src={process.env.PUBLIC_URL+'/img/'+product.img} width='180px'/><br/>
                  </Link>
                  <p>產品名稱 : {product.name}<br/></p>
                  <p>產品價格 : HKD${product.price}<br/></p>
                  <p>購買數量 : {product.quantity}個<br/></p>
                  <QuantityButton productInfo={product}/>
                </div>
              ))
            }
          </div>

          <div className={css.checkOut}>
            <div className={css.allPrice}>產品總價 : HKD${payTotal}</div><br/>
            <div className={css.freeItems}>
              {
                payTotal >= freeDeliver ?
                <div style={{color : 'red'}}>免費送貨</div> :
                <div>滿HKD${freeDeliver}免費送貨*</div>
              }
              {
                payTotal >= freeInstall ?
                <div style={{color : 'red'}}>免費安裝</div> :
                <div>滿HKD${freeInstall}免費安裝*</div>
              }
              <br/>
            </div>
            <div className={css.check}>結算</div>
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
