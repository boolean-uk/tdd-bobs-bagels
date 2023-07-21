/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function AddProduct({ productList, capacity, productNames, basket, setBasket }) {
    const [selectedValue, setSelectedValue] = useState("")

    const addToBasket = (productSKU) => {
        if (basket.length < capacity) {
          const product = productList.find((product) => product.sku === productSKU)
          setBasket((prevBasket) => [...prevBasket, product]);
        } else {
          alert('Basket is full. Cannot add more items.');
        }
    };
    console.log(basket)
  return (
      <>
          <div className="container option add">
            <select name="products" className='form-select' value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                <option value="">Select a product</option>
                {productList && productList.map((product,index) => {
                    return <option key={product.sku} value={product.sku}>{ `${productNames[index]} : $${product.price} ` }</option>
                })}
            </select>
            <button className='mt-4 btn btn-secondary' onClick={()=>addToBasket(selectedValue)}>add Product</button>
          </div>

    </>
  )
}
