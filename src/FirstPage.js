import React from 'react'
import css from './FirstPage.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import QuantityButton from './QuantityButton'

export default function Product() {

  let productList = [
    {
      "id" : 1,
      "name" : "配電箱",
      "storage" : 4,
      "img" : "單相配電箱.png",
      "price" : 369,
      "description" : "中國製造 正泰牌 100A 10位 單相配電箱",
      "quantity" : 3,
    },
    {
      "id" : 2,
      "name" : "電源拖板",
      "storage" : 6,
      "img" : "拖板.png",
      "price" : 69,
      "description" : "中國製造 詩朗牌 13A 獨立開關電源拖板",
      "quantity" : 3,
    },
    {
      "id" : 3,
      "name" : "出路指示燈箱",
      "storage" : 6,
      "img" : "出路指示燈箱.png",
      "price" : 269,
      "description" : "中國製造 孖寶牌 LED 出路指示燈箱",
      "quantity" : 3,
    },
    {
      "id" : 4,
      "name" : "智能彩膽吊燈",
      "storage" : 3,
      "img" : "智能彩膽吊燈.png",
      "price" : 1269,
      "description" : "中國製造 飛利浦 智能彩膽吊燈",
      "quantity" : 3,
    },
  ]
  
  const [showProduct, setShowProduct] = useState(true)
  const hide = () => {
    setShowProduct(false)
  }
  const display = () => {
    setShowProduct(true)
  }

  return (
    <div>
      <Title selfTitle={'請選擇想購買的產品'}/>

      <div className={css.display}>
        {
          showProduct && productList.map(productItem=>(
            <div className={css.item} key={productItem.id}>
              <Link to={'/product/detail/'+productItem.id}>
                <img src={process.env.PUBLIC_URL+'/img/'+productItem.img} width='200px'/><br/>
              </Link>
              {productItem.name}<br/>
              價格 : HKD${productItem.price}<br/>
              <QuantityButton productInfo={productItem}/>
            </div>
          ))
        }
      </div>
      <div className={css.button}>
        {showProduct && <button onClick={hide}>隱藏產品</button>}
        {!showProduct && <button onClick={display}>顯示產品</button>}
      </div>
    </div>
  )
}
