import React, { useEffect } from 'react'
import Section from '../components/Section'
import CartItem from '../components/CartItem'
import Heading from '../components/Heading'
import '../styles/index.css'
import CartSummary from '../components/CartSummary'

const Cart = ({orders, setOrders}) => {
	useEffect(()=>{
		document.title = 'Valhala Tavern - Cart'
	}, [])

	return (
		<Section>
			<div className='lg:flex flex-row justify-between gap-4'>
				<div className='lg:w-3/5'>
					<Heading level = {1}
						className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
					>Cart Items</Heading>
					<div className='flex flex-col gap-4'>
						{
							orders.map(item =>
								<CartItem 
									key={item.id} 
									item = {item}
								/>
							)
						}
					</div>
				</div>
				<div className='lg:w-2/5'>
					<CartSummary totalQuantity={12} orderTotal={'23,000'}/>			
				</div>
			</div>
		</Section>
	)
}

export default Cart