import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header >
        <div className="container py-4 flex flex-col items-center md:flex-row lg:flex-row lg:justify-between">
            <Logo />
            <Navigation />
        </div>
    </header>
  )
}

export default Header