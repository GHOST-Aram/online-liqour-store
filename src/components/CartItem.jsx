import React from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
const CartItem = ({item}) => {
	return (
		<div aria-label='cart item' 
			className={'cart-item flex flex-col md:flex-row border-b-2 border-zinc-900'
				+'lg:flex-row w-3/5 p-2 rounded-md bg-slate-400'}>
			<img src={item.image} alt={item.name} />
			<div 
				className= {'flex flex-col justify-center gap-12 pl-2'
				+' border-l-2 border-zinc-900 w-full' }>
				<h1 aria-label='name'className='font-bold text-red-700'>{item.name}</h1>
				<div className='flex flex-row justify-between'>
					<h2 aria-label='price'className='font-bold'>Ksh. {item.currentPrice}</h2>
					<div className='flex flex-row gap-2 items-center'>
						<button aria-label='decrement quantity'
							className={'bg-red-700 py-2 px-4 text-slate-300'+ 
							' rounded-md font-bold'}
						><FaMinus style={{color: 'white'}}/></button>
						<h2 aria-label='quantity' className='font-bold'>
							{item.quantity}</h2>
						<button aria-label='increment quantity'
							className= {'bg-red-700 py-2 px-4 text-slate-300' + 
							' rounded-md font-bold'}
						><FaPlus/></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem