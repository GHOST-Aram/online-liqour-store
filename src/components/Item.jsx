import React from 'react'
import Button from './Button'
import Heading from './Heading'


const Item = (props) => {
    const {currentPrice,previousPrice, productImage, productName} = props
    const productDiscount = ((currentPrice - previousPrice) / previousPrice) * 100

    return (
        <div>
            <img src={productImage} alt={productName} />
            <Heading level = {2}>{productName}</Heading>
            <div>
                <Heading level={1}>Ksh. {currentPrice}</Heading>
                <span aria-label='previous price'>{previousPrice}</span>
                <span aria-label='discount'>{productDiscount}%</span>
            </div>
            <Button>Add to Cart</Button>

        </div>
    )
}

export default Item