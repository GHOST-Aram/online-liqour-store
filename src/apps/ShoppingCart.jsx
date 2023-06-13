import React, 
{ 
	useContext, 
	useEffect, 
	useState
} from 'react'
import Section from '../components/Section'
import '../styles/index.css'
import CartItems from '../components/CartItems'
import CartSummary from '../components/CartSummary'
import { OrderContext } from '../utils/ordersContext'
import {Cart} from '../utils/Cart'

const ShoppingCart = () => {
	const orderList = useContext(OrderContext)
	const [orders, setOrders] = useState(orderList)
	const cart = new Cart(orders)
	
	const incrementCount = (item) =>{
		setOrders( )
	}
	

	useEffect(()=>{
		document.title = 'Valhala Tavern - Cart'
	}, [])

	return (
		<Section>
			<div className='lg:flex flex-row justify-between gap-4'>
				<CartItems orders={orders}/>
				<div className='lg:w-2/5'>
					<CartSummary totalQuantity={12} orderTotal={'23,000'}/>			
				</div>
			</div>
		</Section>
	)
}

export default ShoppingCart