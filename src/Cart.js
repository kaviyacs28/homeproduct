import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from './action/cartAction';
import './Cart.css'
import { XCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import {Table } from 'react-bootstrap';  
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
 
      
      <div >  
      <h2>Your Cart</h2>
  <Table  bordered >  
        
        <thead>
          
          <tr>
           
          
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px' }} />
              </td>
              <td>{item.name}</td>
              <td>${item.price}.00</td>
              <td>
               
                  <tr><td>
                <button className='buttoninc' onClick={() => handleDecrement(item)}>-</button>
                <button className='buttoninc2' > {item.quantity}</button></td>
                <td>
                <button className='buttoninc' onClick={() => handleIncrement(item)}>+</button>
                </td>
                </tr>
               
              </td>
              <td>${item.price * item.quantity}.00</td>
              <td>
                <button  className="but" onClick={() => handleRemove(item.id)}><XCircle  className='XCircles'/>
                 </button>
                 
              </td>
            </tr>
            
          ))}
          <table className="table cart-table">
      <div className="total-cost">
        <tr>
          <td>
          <h1>Cart totals</h1>
          </td>
        </tr>
  
     <tr><td>
     <h3>SubTotal: ${getTotalCost()}.00</h3> 
     </td></tr>
     <tr><td>
     <h3>Total: ${getTotalCost()}.00</h3> 
     </td></tr>
     <h4>Have a coupon?</h4>
     <Button className='Buttoncheck'>CHECKOUT</Button>
      </div>
      </table>
        </tbody>
      </Table>

    </div>
  );
};

export default Cart;
