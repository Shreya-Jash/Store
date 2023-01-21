import React,{useState ,useEffect} from 'react'
import "../styles/cart.css"
import {AiFillDelete} from "react-icons/ai"

function Cart({cart,setCart,handleChange}) {

  const [price,setPrice]=useState(0)

  function handleRemove(id){
    const arr =cart.filter((item) => item.id !== id)
    setCart(arr);
    handlePrice();
  }

  function handlePrice()
  {
    let ans =0
    cart.map((item) => (ans += item.amount * item.price))
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <div className='cart'>
      <div className='cart-header'>Your Cart</div>
      {cart.map((item) => (
        <div className='cart-container' key={item.id}>
          <div className='cart-row'>
          <img className="cart-img"
            src={`../Images/${item.img}`} 
          />
          <p className="item-toolname" >{item.tool_name}</p>
          <p className='cart-price'>₹ {item.price}</p>
          <div className='cart-operation'>
            <button className='decrement' onClick={() => handleChange(item, -1)}>-</button>
            <button className='cart-displaybox'>{item.amount}</button>
            <button className='increment' onClick={() => handleChange(item,1)}>+</button>
          </div>


          <button className='remove' onClick={() => handleRemove(item.id)}><AiFillDelete /></button>
        </div>
          </div>
          
      ))}
      <div className='total_price'>Total Price- ₹{price}</div>
      
    </div>
  )
}

export default Cart