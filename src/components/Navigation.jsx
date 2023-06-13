import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className=''>
        <ul className='flex flex-row gap-8'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/shop'}>Shop</NavLink></li>
            <li><NavLink to={'/cart'}>Cart</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navigation
