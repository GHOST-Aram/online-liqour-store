import React from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
import { CartHandler } from '../utils/Cart'

const QuantityButtons = ({item, orders, setOrders}) => {
    const cart = new CartHandler(orders)

    
    return (
        <div className='flex flex-row gap-2 items-center '>
            <button  aria-label='decrement quantity'
            onClick={()=>setOrders(cart.decrementItemQuantity(item.id))}
                className={'bg-red-700 py-2 px-4 text-slate-300'+
                'decrement-btn rounded-md font-bold'}
            ><FaMinus/>
            </button>
            <h2 aria-label='quantity' className='font-bold'>{item.quantity}</h2>
            <button aria-label='increment quantity'
            onClick={() => setOrders(cart.incrementItemQuantity(item.id))}
                className= {'bg-red-700 py-2 px-4 text-slate-300 rounded-md font-bold'}
            ><FaPlus/>
            </button>
        </div>
    )
}

export default QuantityButtons