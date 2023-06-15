import React from 'react'
import Heading from './Heading'
import Button from './Button'



const CartSummary = ({orderTotal, totalQuantity}) => {
    return (
        <aside>
            <Heading level={1}
                className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
            >CART SUMMARY</Heading> 

            <Heading level={2}>Quantity Purchased: {totalQuantity}</Heading>
            <Heading level={1}>Total: = {orderTotal}</Heading>

            <Button>{'Checkout'}</Button>
        </aside>
    )
}

export default CartSummary