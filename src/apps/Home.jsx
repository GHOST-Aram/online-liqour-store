import Main from '../components/Main';
import React, { useEffect } from 'react'
import Showcase from '../components/Showcase';
import ShelvedProducts from '../components/ShelvedProducts';


const Home = () => {


  useEffect(()=>{
    document.title = 'Valhala Tavern - Home'
  })


  return (
    <Main>
		<Showcase/>
		<ShelvedProducts />
    </Main>
  )
}

export default Home