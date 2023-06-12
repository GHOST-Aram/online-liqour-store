import { render, screen} from '@testing-library/react'
import Item from '../components/Item'

test('Renders Product image', () =>{
    render(<Item />)

    const productImg = screen.getByRole('img')
    expect(productImg).toBeInTheDocument()
})

test('Renders product image alternative text', () =>{
    render(
        <Item productName = {'Black and white whisky'} />)

        const imageAlt = screen.getByAltText(/Black and white whisky/)
        expect(imageAlt).toBeInTheDocument()
})

test('Renders product Name', () =>{
    render(<Item productName = {'Black and white Whisky'}/>)

    const productNameNode = screen.getByLabelText('product name')
    const productName = screen.getByText(/Black and white whisky/i)

    expect(productNameNode).toBeInTheDocument()
    expect(productName).toBeInTheDocument()
})

test('Renders Product previous price', () =>{
    render(<Item previousPrice = {1500}/>)

    const previousPriceNode = screen.getByLabelText('previous price')
    const previousPrice = screen.getByText(/1500/)

    expect(previousPriceNode).toBeInTheDocument()
    expect(previousPrice).toBeInTheDocument()
})

test('Renders current price', () =>{
    render(<Item currentPrice = {1200} />)

    const currentPriceNode = screen.getByLabelText('current price')
    const currentPrice = screen.getByText(/1200/)

    expect(currentPriceNode).toBeInTheDocument()
    expect(currentPrice).toBeInTheDocument()
})

test('Renders allowed discount', ()=>{
    render(<Item previousPrice = {1500} currentPrice = {1200} />)

    const discountElement = screen.getByLabelText('discount')
    const discountAmount = screen.getByText(/-20%/)

    expect(discountElement).toBeInTheDocument()
    expect(discountAmount).toBeInTheDocument()
})

test('Renders add to cart Button', () =>{
    render(<Item />)

    const cartBtn = screen.getByRole('button')
    const buttonText = screen.getByText(/Add to Cart/i)

    expect(cartBtn).toBeInTheDocument()
    expect(buttonText).toBeInTheDocument()
})