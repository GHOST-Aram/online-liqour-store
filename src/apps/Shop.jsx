import React, { useEffect } from 'react'
import ShelvedProducts from '../components/ShelvedProducts'
import { whiskies } from '../utils/product'
import { wines } from '../utils/product'


const Shop = () => {

	useEffect(()=>{
		document.title = 'Valhala Tavern - Shop'
	})

	return (
		<>
			<ShelvedProducts 
				heading={'Wines On Our Shelves'}
				items={wines} 
			/>
			<ShelvedProducts 
				heading={'Whiskies On Our Shelves'}
				items={whiskies} 
			/>
		</>
	)
}

export default Shop