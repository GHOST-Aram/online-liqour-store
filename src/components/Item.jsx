import React from 'react'
import Button from './Button'
import Heading from './Heading'

const calculateDiscount = (previousPrice, currentPrice) =>{
    return Math.floor(((currentPrice - previousPrice) / previousPrice) * 100)
}

const Item = (props) => {
    const {currentPrice,previousPrice, productImage, productName} = props
    const productDiscount = calculateDiscount(previousPrice, currentPrice)

    return (
        <div className='item p-2 rounded-md'>
            <img src={productImage} alt={productName} />
            <h2 aria-label='product name'
                className='font-bold text-red-700 text-start'
            >{productName}</h2>
            <div className='flex flex-row gap-4 my-2'>
                <h1 aria-label='current price'
                    className='font-bold'
                >Ksh. {currentPrice}</h1>
                <p aria-label='previous price'
                    className='text-crossed text-slate-500'
                >{previousPrice}</p>
                <span aria-label='discount'
                    className='text-red-400'
                >{productDiscount}%</span>
            </div>
            <Button className={'w-full'}>Add to Cart</Button>
        </div>
    )
}

export default Item