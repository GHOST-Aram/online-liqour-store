import React, { useEffect } from 'react'

const Cart = () => {

  useEffect(()=>{
    document.title = 'Valhala Tavern - Cart'
  }, [])
  return (
    <div>Cart</div>
  )
}

export default Cart