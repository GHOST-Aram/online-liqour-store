import Heading from './Heading'
import React from 'react'
import Section from './Section'
import Button from './Button'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const ProductDetails = ({orders, setOrders}) => {
    const navigate = useNavigate()
    const item = useLocation().state
    
    return (
        <Section>
            <div className="m-auto w-full lg:w-3/5">
                <Heading level={2}
                    className={
                        'font-bold my-4 text-slate-300'
                        +' pl-4 py-2 bg-red-700'
                    }
                > 
                    Product Details
                </Heading>
                <div className=''>
                    <CartItem 
                        orders={orders}
                        setOrders={setOrders}
                        item = {item}
                    />
                    <div>
                        <p aria-label='description'
                            className='text-sm font-light py-4'
                        >{item.desc}</p>
                        <div className={
                            'flex flex-col md:flex-row '
                            +'lg:flex-row lg:justify-between gap-4'
                            } 
                        >
                            <Button
                                handleClick={() => setOrders([...orders, item])}
                                >ADD TO CART</Button>
                            <Button
                                handleClick={() => navigate('/shop')}
                            >CONTINUE SHOPPING</Button>
                            <Button
                                handleClick={() => navigate('/cart')}
                            >VIEW CART</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ProductDetails