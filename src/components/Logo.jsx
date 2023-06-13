import React from 'react'
import logo_large from '../images/logos/valhala_clear_large.png'
import logo_md from '../images/logos/valhala_clear.png'
import logo_small from '../images/logos/valhala_logo_small.png'

const Logo = () => {
  return (
    <picture className='py-4 md:py-0 lg:py-0'>
        <source media="(min-width: 800px)" srcSet={logo_large} />
        <source media="(min-width: 600px)" srcSet={logo_md} />
        <source media="(min-width: 300px)" srcSet={logo_small} />
        <img src={logo_large} alt="Valhala" id="logo" />
        
    </picture>
  )
}

export default Logo