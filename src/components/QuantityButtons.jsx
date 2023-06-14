import React, { useEffect } from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
import { CartHandler } from '../utils/Cart'

const getDecrementButtons = () => {
    return document.querySelectorAll('.decrement-btn')
}

const disableButton = (btn) => {
    btn.setAttribute('disabled', '')
}

const enableButton = (btn) => {
    btn.removeAttribute('disabled')
}
const QuantityButtons = ({item, orders, setOrders}) => {
    const cart = new CartHandler(orders)

    useEffect(() =>{
        const quantityBtns = getDecrementButtons()
        console.log(quantityBtns)

        quantityBtns.forEach(btn =>{
            Number(btn.nextElementSibling.textContent) === 1 ?
            disableButton(btn) : enableButton(btn)
        })
    })
    
    return (
        <div className='flex flex-row gap-2 items-center '>
            <button  aria-label='decrement quantity'
            onClick={()=>setOrders(cart.decrementItemQuantity(item.id))}
                className={'bg-red-700 py-2 px-4 text-slate-300 '+
                            'decrement-btn rounded-md font-bold '
                            +'quantity-btn disabled:opacity-25'}
            ><FaMinus/>
            </button>
            
            <h2 aria-label='quantity' className='font-bold'>{item.quantity}</h2>

            <button aria-label='increment quantity'
            onClick={() => setOrders(cart.incrementItemQuantity(item.id))}
                className= {'bg-red-700 py-2 px-4 text-slate-300 '
                    +'rounded-md font-bold quantity-btn'}
            ><FaPlus/>
            </button>
        </div>
    )
}

export default QuantityButtons