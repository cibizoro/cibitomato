import React, { useContext } from 'react'
import'./Placeorder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>
            delivery informtaion
          </p>
          <div className='mutli-fields'>
            <input type='text' placeholder='fist name' />
            <input type='text' placeholder='last name'/>
          </div>
          <input type='email' placeholder='email'/>
          <input type='street' placeholder='street'/>
          <div className='mutli-fields'>
            <input type='text' placeholder='city' />
            <input type='text' placeholder='state'/>
          </div>
          <div className='mutli-fields'>
            <input type='text' placeholder='zipcode' />
            <input type='text' placeholder='country'/>
          </div>
          <input type='text' placeholder='phone'/>

        </div>
        
        <div className='place-order-right'>
        <div className='cart-totals'>
          <h2>Cart totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>subtotal</p>
              <p>{getTotalCartAmount()}</p>

            </div>
            <hr/>
              <div className='cart-total-details'>
                <p>delivery fee</p>
                <p>{2}</p>

              </div>
              <hr/>
              <div className='cart-total-details'>
                <b>total</b>
                <b>{getTotalCartAmount()+2}</b>

              </div>  
             
          </div>
          <button>proceed to payment</button>
        </div>
          
          

        </div>
      </form>
    </div>
  )
}

export default PlaceOrder