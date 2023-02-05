import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import QuantityButton from './QuantityButton'
import Title from './Title'
import css from './ProductDetail.module.css'

export default function ProductDetail() {
  
  let params = useParams()
  let [productDetail, setProductDetail] = useState()

  useEffect(()=>{
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

    let productInfo = productList.find((product)=>{
    return product.id === parseInt(params.id)
    })
    setProductDetail(productInfo)
  },[])

  return (
    <div>
      {<Title selfTitle={'產品資料'}/>}
      {
        productDetail &&
        <div className={css.detail}>
          <img src={process.env.PUBLIC_URL+'/img/'+productDetail.img} width='30%'/>
          <p>產品說明 : {productDetail.description}</p><br/>
          <p>產品名稱 : {productDetail.name}</p>
          <p>產品價格 : HKD${productDetail.price}</p>
          <QuantityButton productInfo={productDetail}/>
        </div>
      }
      <Link to='/' className={css.link}>返回選購產品</Link>
    </div>
  )
}
