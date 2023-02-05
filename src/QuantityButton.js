import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import css from "./QuantityButton.module.css"

export default function QuantityButton({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

    let productInCart = cartItems.findIndex((info)=>{
        return info.id === productInfo.id
    })

    let [numToCart, setNumToCart] = useState(
        (productInCart === -1) ? 0 : 
        cartItems[productInCart].quantity
    )

    const handleAdd = ()=>{
        if (productInCart === -1){
            setCartItems ([{
                id : productInfo.id,
                name : productInfo.name,
                storage : productInfo.storage,
                img : productInfo.img,
                price : productInfo.price,
                description : productInfo.description,
                quantity : 1,
            }, ...cartItems])
        } else {
            let newCartItems = [...cartItems]
            newCartItems[productInCart].quantity++
            setCartItems(newCartItems)
        }
        setNumToCart(numToCart+1)
    }

    const handleSubtract = ()=>{
        if (cartItems[productInCart].quantity === 1){
            let newCartItems = [...cartItems]
            newCartItems.splice(productInCart, 1)
            setCartItems(newCartItems)
        } else {
            let newCartItems = [...cartItems]
            newCartItems[productInCart].quantity--
            setCartItems(newCartItems)
        }
        setNumToCart(numToCart-1)
    }

  return (
    <div className={css.parents}>
        {
            (numToCart === 0) ?
                <div className={css.button} onClick={handleAdd}>加入購物車</div> :
                <div>
                    <span className={css.button} onClick={handleSubtract}>-</span>
                    {numToCart}件
                    <span className={css.button} onClick={handleAdd}>+</span>
                </div>
        }
    </div>
  )
}
