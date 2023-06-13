import CustomerReviews from '../components/CustomerReviews';
import React, { useEffect } from 'react'
import '../styles/index.css'
import Showcase from '../components/Showcase';
import OtherServices from '../components/OtherServices';
import FeaturedBrands from '../components/FeaturedBrands';
import { items } from '../utils/product';
import Section from '../components/Section';
import Heading from '../components/Heading';
import HomeItem from '../components/HomeItem';

const Home = () => {

	useEffect(()=>{
		document.title = 'Valhala Tavern - Home'
	})

	return (
		<>
			<Showcase/>
			<Section>
				<Heading level={2}
					className={
						'font-bold my-4 text-slate-300'
						+' pl-4 py-2 bg-red-700'
					}
				>{'On Our Shelves and More'}
				</Heading>
				<div className="items">
					{
						items.map(item =>
							<HomeItem key={item.id} item = {item} />
						)
					}
				</div>
			</Section>
			<OtherServices />
			<CustomerReviews />
			<FeaturedBrands />
		</>
	)
}

export default Home