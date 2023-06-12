import { render, screen } from "@testing-library/react";
import CartItem from "../apps/CartItem";

test('Renders aria-label for cart item', () =>{
    render(<CartItem />)
    
    const cartItemNode = screen.getByLabelText('cart item')
    expect(cartItemNode).toBeInTheDocument()
})

test('Renders cart Item image', () =>{
    render(<CartItem />)

    const cartItemImage = screen.getByRole('img')
    expect(cartItemImage).toBeInTheDocument()
})

test('Renders cart Item alt text', () =>{
    render(<CartItem itemName = {'Hunter\'s Choice'} />)

    const altText = screen.getByAltText(/Hunter's Choice/)
    expect(altText).toBeInTheDocument()
})

test('Renders arial-label for item price', () =>{
    render(<CartItem />)

    const priceNode = screen.getByLabelText('current price')
    expect(priceNode).toBeInTheDocument()
})
test('Renders cart item current price', () =>{
    render(<CartItem itemPrice = {1230} />)

    const itemPrice = screen.getByText(/1230/)
    expect(itemPrice).toBeInTheDocument()
})

test('Renders aria-label for increment button', () =>{
    render(<CartItem />)

    const incrementBtn = screen.getByLabelText('increment quantity')
    expect(incrementBtn).toBeInTheDocument()
})

test('Renders increment button', () =>{
    render(<CartItem />)

    const incrementBtn = screen.getByRole('button')
    const incrementBtnText = screen.getByText('+')

    expect(incrementBtn).toBeInTheDocument()
    expect(incrementBtnText).toBeInTheDocument()
})

test('Renders item quantity', () =>{
    render(<CartItem quantity = {1}/>)

    const quantityText = screen.getByText(/1/)
    expect(quantityText).toBeInTheDocument()
})

test('Renders arial-label for item quantity', () =>{
    render(<CartItem />)

    const quantityNode = screen.getByLabelText(/quantity/)
    expect(quantityNode).toBeInTheDocument()
})