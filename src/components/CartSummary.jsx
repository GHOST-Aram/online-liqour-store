import React from 'react'
import Heading from './Heading'
import Button from './Button'



const CartSummary = ({orderTotal, totalQuantity}) => {
    return (
        <aside>
            <Heading level={1}
                className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}>
                CART SUMMARY
            </Heading> 
            <div className="px-4">
                <Heading level={2}className={'my-4 font-bold'}>
                    Quantity Purchased: <span className="text-red-700">{totalQuantity}</span> 
                </Heading>
                <Heading level={1} className={'mb-4 font-bold'}>
                    Total: Ksh <span className="text-red-700">{orderTotal}</span> 
                </Heading>
            </div>
            <Button className={'w-full font-bold'} >{'CHECKOUT'}</Button>
        </aside>
    )
}

export default CartSummary