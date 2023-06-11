import React, { useEffect } from 'react'
import Main from '../components/Main';
import Section from '../components/Section';
import Showcase from '../components/Showcase';
import Heading from '../components/Heading';


const Home = () => {

  useEffect(()=>{
    document.title = 'Valhala Tavern - Home'
  })


  return (
    <Main>
      	<Section>
        	<Showcase/>
			<div className="my-4 border-b-2 border-solid border-zinc-900"></div>
			<Heading level={2}
				className={'font-bold text-underline'}
			>
				On Our Shelves & More</Heading>
		</Section>
    </Main>
  )
}

export default Home