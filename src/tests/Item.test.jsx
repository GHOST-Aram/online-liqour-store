import { render, screen} from '@testing-library/react'
import Item from '../components/Item'
import { items } from '../utils/product'
import { BrowserRouter as Router } from 'react-router-dom'

test('Renders Product image', () =>{
    render(<Item item = {items[0]}/>, {wrapper: Router})

    const productImg = screen.getByRole('img')
    expect(productImg).toBeInTheDocument()
})



test('Renders product Name', () =>{
    render(<Item item = {items[0]}/>, {wrapper: Router})

    const productNameNode = screen.getByLabelText('product name')
    const productName = screen.getByText(/Black and white whisky/i)

    expect(productNameNode).toBeInTheDocument()
    expect(productName).toBeInTheDocument()
})

test('Renders Product previous price', () =>{
    render(<Item item = {items[0]}/>, {wrapper: Router})

    const previousPriceNode = screen.getByLabelText('previous price')
    const previousPrice = screen.getByText(/1500/)

    expect(previousPriceNode).toBeInTheDocument()
    expect(previousPrice).toBeInTheDocument()
})

test('Renders current price', () =>{
    render(<Item item = {items[0]}/>, {wrapper: Router})

    const currentPriceNode = screen.getByLabelText('current price')
    const currentPrice = screen.getByText(/1200/)

    expect(currentPriceNode).toBeInTheDocument()
    expect(currentPrice).toBeInTheDocument()
})

test('Renders allowed discount', ()=>{
    render(<Item item = {items[0]}/>, {wrapper: Router})

    const discountElement = screen.getByLabelText('discount')
    const discountAmount = screen.getByText(/-20%/)

    expect(discountElement).toBeInTheDocument()
    expect(discountAmount).toBeInTheDocument()
})

test('Renders add to cart Button', () =>{
    render(<Item item = {items[0]}/>, {wrapper: Router})

    const cartBtn = screen.getByRole('button')
    const buttonText = screen.getByText(/VIEW ITEM/i)

    expect(cartBtn).toBeInTheDocument()
    expect(buttonText).toBeInTheDocument()
})