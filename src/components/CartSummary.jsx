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
                <div className="flex my-4  justify-between">
                    <Heading level={2}className={'font-bold'}>
                        Quantity Purchased: 
                    </Heading>
                    <span className=" font-bold text-red-700">{totalQuantity}</span> 
                </div>
                <div className="flex mb-4  justify-between">
                    <Heading level={1} className={'font-bold'}>
                        Total: 
                    </Heading>
                    <span className="font-bold text-red-700">Ksh {orderTotal}</span> 
                </div>
            </div>
            <Button className={'w-full font-bold'} >{'CHECKOUT'}</Button>
        </aside>
    )
}

export default CartSummary