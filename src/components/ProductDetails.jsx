import Heading from './Heading'
import React from 'react'
import Section from './Section'
import Button from './Button'
import CartItem from './CartItem'
import { 
    useNavigate,
    useLocation  
} from 'react-router-dom'
import { CartHandler } from '../utils/Cart'
import ProductPreview from './ProductPreview'


const ProductDetails = ({orders, setOrders}) => {
    const item = useLocation().state
    const navigate = useNavigate()
    const cart = new CartHandler(orders)

    const addNewItem = (item) =>{
        try {
            return setOrders(cart.addNewItem(item))
        } catch (error) {
            alert('Item already exists in Shopping Cart')
        }
    }

    
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
                <ProductPreview item={item} />    
                <div className={
                    'flex flex-col md:flex-row '
                    +'lg:flex-row lg:justify-between gap-4'
                    } 
                >
                    <Button
                        handleClick={() => addNewItem(item)}
                        >ADD TO CART</Button>
                    <Button
                        handleClick={() => navigate('/shop')}
                    >CONTINUE SHOPPING</Button>
                    <Button
                        handleClick={() => navigate('/cart')}
                    >VIEW CART</Button>
                </div>
            </div>
               
        </Section>
    )
}

export default ProductDetails