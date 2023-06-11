import React from 'react'
import Button from './Button'
import Heading from './Heading'


const Item = (props) => {
    const {currentPrice,previousPrice, productImage, productName} = props
    const productDiscount = ((currentPrice - previousPrice) / previousPrice) * 100

    return (
        <div>
            <img src={productImage} alt={productName} />
            <h2 aria-label='product name'>{productName}</h2>
            <div>
                <h1 aria-label='current price'>Ksh. {currentPrice}</h1>
                <span aria-label='previous price'>{previousPrice}</span>
                <span aria-label='discount'>{productDiscount}%</span>
            </div>
            <Button>Add to Cart</Button>

        </div>
    )
}

export default Item