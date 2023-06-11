import Main from '../components/Main';
import React, { useEffect } from 'react'
import Showcase from '../components/Showcase';
import ShelvedProducts from '../components/ShelvedProducts';
import OtherServices from '../components/OtherServices';


const Home = () => {


  useEffect(()=>{
    document.title = 'Valhala Tavern - Home'
  })


  return (
    <>
      <Showcase/>
      <ShelvedProducts />
      <OtherServices />
    </>
  )
}

export default Home