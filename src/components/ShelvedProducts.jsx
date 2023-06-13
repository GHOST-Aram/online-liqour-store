import Heading from './Heading'
import Item from './Item';
import React from 'react'
import Section from './Section'



const ShelvedProducts = ({items, heading}) => {

	return (
		<Section>
			<Heading level={2}
				className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
			>{heading}
			</Heading>
			<div className='text-center items'>
				{
					items.map(item =>
						<Item 
							key = {item.id}
							item = {item}
						/>
					)
				}
			</div>
		</Section>
	)
}

export default ShelvedProducts