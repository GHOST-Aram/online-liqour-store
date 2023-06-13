import React from 'react'
import QuantityButtons from './QuantityButtons'
const CartItem = ({item, orders, setOrders}) => {
	
	return (
	<div aria-label='cart item' 
		className={
			'cart-item flex flex-row border-b-2 border-zinc-900'
			+'lg:flex-row  w-full p-2 rounded-md bg-slate-300'
		}>
		<img src={item.image} alt={item.name} />
		<div className= {
			'flex flex-col justify-center gap-12 pl-2'
			+' border-l-2 border-zinc-900 w-full'
		}>
			<h1 aria-label='name'className='font-bold text-red-700'>
				{item.name}
			</h1>
			<div className='flex flex-row justify-between'>
				<h2 aria-label='price'className='font-bold'>
					Ksh. {item.currentPrice}
				</h2>
				<QuantityButtons 
					item = {item}
					orders = {orders} 
					setOrders = {setOrders}
				/>
			</div>
		</div>
	</div>
)
}

export default CartItem