import CartItem from './CartItem'
import Heading from './Heading'
import React from 'react'


const CartItems = ({orders, setOrders}) => {

    return (
        <div className='lg:w-3/5'>
        <Heading level = {1}
            className={
                'font-bold my-4 text-slate-300 '
                +'pl-4 py-2 bg-red-700'
            }
        >
            Cart Items
        </Heading>
        <div className='flex flex-col gap-4'>
            {
                orders.map(item =>
                    <CartItem 
                        key={item.id} 
                        orders = {orders}
                        setOrders = {setOrders}
                        item = {item}
                    />
                )
            }
        </div>
    </div>
    )
}

export default CartItems