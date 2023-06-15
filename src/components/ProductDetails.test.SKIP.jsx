import {render, screen} from '@testing-library/react'
import ProductDetails from '../components/ProductDetails'
import black_and_white from '../images/drinks/black-and-white-whisky.png'
import { BrowserRouter as Router } from 'react-router-dom'

/**
 * This Component being tested does not take props as arguments in
 * production, it derives its state from location.state
 * For this reason, it has been defined without props
 * To test it successfully, temporarily provide 
 * item as props to the component
 */
const item = {
    image: black_and_white,
    name: 'black and white whisky',
    currentPrice: 2300,
    quantity: 1,
    desc:'Lorem ipsum dolor sit amet.'
    
}
test('Renders product Image', () =>{
    render(<ProductDetails item = {item}/>,{wrapper: Router})

    const productImg = screen.getByRole('img')
    expect(productImg).toBeInTheDocument()
})

test('Renders product name', () =>{
    render(<ProductDetails item = {item}/>,{wrapper: Router})

    const itemName = screen.getByText(/black and white whisky/i)
    expect(itemName).toBeInTheDocument()
})

test('Renders price', () => {
    render(<ProductDetails item = {item}/>,{wrapper: Router})
    
    const price = screen.getByText(/2300/)
    expect(price).toBeInTheDocument()
})

test('Renders aria-label for price', () =>{
    render(<ProductDetails item = {item}/>,{wrapper: Router})

    const priceNode = screen.getByLabelText(/price/)
    expect(priceNode).toBeInTheDocument()
})

test('Renders product description', () =>{
    render(<ProductDetails item = {item}/>,{wrapper: Router})

    const desc = screen.getByText(/Lorem ipsum dolor sit amet./)
    expect(desc).toBeInTheDocument()
})
