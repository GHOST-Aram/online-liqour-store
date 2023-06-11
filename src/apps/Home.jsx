import Heading from '../components/Heading';
import Item from '../components/Item';
import Main from '../components/Main';
import React, { useEffect } from 'react'
import Section from '../components/Section';
import Showcase from '../components/Showcase';
import black_and_white from '../images/drinks/black-and-white-whisky.png'
import red_label from '../images/drinks/jonnie_wlaker_red_label.png'
import amarula from '../images/drinks/amarula-cream.png'
import jack_daniels from '../images/drinks/jack_daniels.png'

const items = [
	{
		image: black_and_white, name:'Black and white whisky',
		currentPrice: 1200, previousPrice: 1500
	},
	{
		image: red_label, name:'Jonnie walker red labe;',
		currentPrice: 1000, previousPrice: 1450
	},
	{
		image: amarula, name:'Amarula',
		currentPrice: 1400, previousPrice: 1750
	},
	{
		image: jack_daniels, name:'Jack Daniels',
		currentPrice: 3100, previousPrice: 3700
	}
]


const Home = () => {


  useEffect(()=>{
    document.title = 'Valhala Tavern - Home'
  })


  return (
    <Main>
      	<Section>
        	<Showcase/>
			<div className="my-4 border-b-2 border-solid border-zinc-900"></div>
		</Section>
		<Section>
			<Heading level={2}className={'font-bold my-4 text-red-700'}
			>On Our Shelves & More
			</Heading>
			<div className='text-center items'>
				{
					items.map(item =>
						
						<Item 
							productImage = {item.image} 
							productName = {item.name}
							previousPrice = {item.previousPrice}
							currentPrice = {item.currentPrice}
						/>
						
					)
				}
			</div>
		</Section>
    </Main>
  )
}

export default Home