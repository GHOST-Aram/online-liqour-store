import React,{useState} from 'react'
import { items } from '../utils/product';
import {Routes, Route} from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'


const RouteSwitch = () => {
    const [orders, setOrders] = useState([])
	
	return (
		<Routes >
			<Route path='/' element = {<Home />} />
			<Route path='/shop' element = {<Shop />} />
			<Route path='/cart' element = {
				<Cart orders = {orders} setOrders = {setOrders}/>} />
			<Route path='/details' element = {
				<ProductDetails
				 item = {items[0]}
				 orders = {orders}
				 setOrders = {setOrders}
				/>
			}/>
		</Routes>
	)
}

export default RouteSwitch