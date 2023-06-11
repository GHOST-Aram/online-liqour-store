import amarula from '../images/drinks/amarula-cream.png'
import black_and_white from '../images/drinks/black-and-white-whisky.png'
import jack_daniels from '../images/drinks/jack_daniels.png'
import red_label from '../images/drinks/jonnie_wlaker_red_label.png'
import CustomerReviews from '../components/CustomerReviews';
import React, { useEffect } from 'react'
import '../styles/index.css'
import Showcase from '../components/Showcase';
import ShelvedProducts from '../components/ShelvedProducts';
import OtherServices from '../components/OtherServices';
import FeaturedBrands from '../components/FeaturedBrands';

const items = [
	{
		id: 'item-1',
		image: black_and_white, name:'Black and white whisky',
		currentPrice: 1200, previousPrice: 1500
	},
	{
		id: 'item-2',
		image: red_label, name:'Jonnie walker red labe;',
		currentPrice: 1000, previousPrice: 1450
	},
	{
		id: 'item-3',
		image: amarula, name:'Amarula',
		currentPrice: 1400, previousPrice: 1750
	},
	{
		id: 'item-4',
		image: jack_daniels, name:'Jack Daniels',
		currentPrice: 3100, previousPrice: 3700
	}
]


const Home = () => {


  useEffect(()=>{
    document.title = 'Valhala Tavern - Home'
  })


	return (
		<>
			<Showcase/>
			<ShelvedProducts 
				items={items}
				heading={'On Our Shelves & More'}
			/>
			<OtherServices />
			<CustomerReviews />
			<FeaturedBrands />
		</>
	)
}

export default Home