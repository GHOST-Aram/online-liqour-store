import React from 'react'

const CartItem = ({item}) => {
	return (
		<div aria-label='cart item'>
			<div>
				<img src={item.image} alt={item.name} />
				<h1 aria-label='name'>{item.name}</h1>
			</div>
			<div>
				<h2 aria-label='price'>{item.price}</h2>
				<div>
					<button aria-label='decrement quantity'>-</button>
					<h2 aria-label='quantity'>{item.quantity}</h2>
					<button aria-label='increment quantity'>+</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem