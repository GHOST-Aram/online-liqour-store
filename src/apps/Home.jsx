import CustomerReviews from '../components/CustomerReviews';
import React, { useEffect } from 'react'
import '../styles/index.css'
import Showcase from '../components/Showcase';
import ShelvedProducts from '../components/ShelvedProducts';
import OtherServices from '../components/OtherServices';
import FeaturedBrands from '../components/FeaturedBrands';
import { items } from '../utils/product';




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