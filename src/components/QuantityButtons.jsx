import React, { useState } from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
import { CartHandler } from '../utils/Cart'

const QuantityButtons = ({item, orders, setOrders}) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const cart = new CartHandler(orders)

    const decrementQuantity = (item) =>{
        setQuantity(()=>{
            if(quantity > 1)
                return quantity - 1
            return 1
        })
        setOrders(cart.decrementItemQuantity(item))
    }
    
    const incrementQuantity  = (item) =>{
        setQuantity(()=>quantity + 1)
        setOrders(cart.incrementItemQuantity(item))
        
    }
    return (
        <div className='flex flex-row gap-2 items-center '>
            <button  aria-label='decrement quantity'
            onClick={()=>decrementQuantity(item)}
                className={'bg-red-700 py-2 px-4 text-slate-300'+
                'decrement-btn rounded-md font-bold'}
            ><FaMinus/>
            </button>
            <h2 aria-label='quantity' className='font-bold'>{quantity}</h2>
            <button aria-label='increment quantity'
            onClick={() => incrementQuantity(item)}
                className= {'bg-red-700 py-2 px-4 text-slate-300 rounded-md font-bold'}
            ><FaPlus/>
            </button>
        </div>
    )
}

export default QuantityButtons