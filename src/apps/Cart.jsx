import React, { useEffect } from 'react'
import Section from '../components/Section'
import '../styles/index.css'
import CartSummary from '../components/CartSummary'
import { CartHandler } from '../utils/Cart'
import CartItems from '../components/CartItems'

const Cart = ({orders, setOrders}) => {
	const cart = new CartHandler(orders)

	const orderTotal = cart.calculateOrderToTal()
	const totalQuantity = cart.getTotalQuantity()

	
	useEffect(()=>{
		document.title = 'Valhala Tavern - Cart'
	}, [])

	return (
		<Section>
			<div className='lg:flex flex-row justify-between gap-4'>
				<CartItems orders={orders} setOrders={setOrders} />
				<div className='lg:w-2/5'>
					<CartSummary 
						totalQuantity={totalQuantity} 
						orderTotal={orderTotal}
					/>			
				</div>
			</div>
		</Section>
	)
}

export default Cart