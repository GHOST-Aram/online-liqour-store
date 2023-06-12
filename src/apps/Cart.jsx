import React, { useEffect } from 'react'
import Section from '../components/Section'
import CartItem from '../components/CartItem'
import {wines as items} from '../utils/product'
import Heading from '../components/Heading'
import '../styles/index.css'

items.forEach(item => item.quantity = 0)

const Cart = () => {

	useEffect(()=>{
		document.title = 'Valhala Tavern - Cart'
	}, [])

	return (
		<Section>
			<Heading level = {1}
                className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
            >Cart Items</Heading>
			<div className='flex flex-col gap-4'>
				{
					items.slice(0,4).map(item =>
						<CartItem key={item.id} item = {item}/>
						)
				}
			</div>
		</Section>
	)
}

export default Cart