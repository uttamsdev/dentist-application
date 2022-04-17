import React from 'react'
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams();
  return (
    <div>
        <h2>This is checkout id {checkoutId}</h2>
        <h2>Please Checkout</h2>
    </div>
  )
}

export default Checkout;