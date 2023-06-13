import { render, screen } from "@testing-library/react";
import CartItem from "../components/CartItem";
import red_label from '../images/drinks/jonnie_wlaker_red_label.png'

const item = { 
    name: 'Red Label', currentPrice: 2000, 
    quantity: 1, image: red_label,
}

test('Renders aria-label for cart item', () =>{
    render(<CartItem item={item}/>)
    
    const cartItemNode = screen.getByLabelText('cart item')
    expect(cartItemNode).toBeInTheDocument()
})

test('Renders cart Item image', () =>{
    render(<CartItem item={item}/>)

    const cartItemImage = screen.getByRole('img')
    expect(cartItemImage).toBeInTheDocument()
})

test('Renders item name', () =>{
    render(<CartItem item={item}/>)

    const name = screen.getByText(/Red Label/)
    expect(name).toBeInTheDocument()
})

test('Renders aria -label for item name', () =>{
    render(<CartItem item={item}/>)

    const nameNode = screen.getByLabelText('name')
    expect(nameNode).toBeInTheDocument()
})

test('Renders cart Item alt text', () =>{
    render(<CartItem item = {item} />)

    const altText = screen.getByAltText(/Red Label/)
    expect(altText).toBeInTheDocument()
})

test('Renders arial-label for item price', () =>{
    render(<CartItem item={item}/>)

    const priceNode = screen.getByLabelText('price')
    expect(priceNode).toBeInTheDocument()
})
test('Renders cart item current price', () =>{
    render(<CartItem item = {item} />)

    const itemPrice = screen.getByText(/2000/)
    expect(itemPrice).toBeInTheDocument()
})

test('Renders aria-label for increment button', () =>{
    render(<CartItem item={item}/>)

    const incrementBtn = screen.getByLabelText('increment quantity')
    expect(incrementBtn).toBeInTheDocument()
})

test('Renders aria-label of decrement button', () =>{
    render(<CartItem item={item}/>)

    const incrementBtn = screen.getByLabelText('decrement quantity')
    expect(incrementBtn).toBeInTheDocument()
})

test('Renders two buttons increment and decrement', () =>{
    render(<CartItem item={item} />)

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toEqual(2)
})

test('Renders item quantity', () =>{
    render(<CartItem item = {item}/>)

    const quantityText = screen.getByText(/1/)
    expect(quantityText).toBeInTheDocument()
})

test('Renders arial-label for item quantity', () =>{
    render(<CartItem item={item}/>)

    const quantityNode = screen.getByLabelText('quantity')
    expect(quantityNode).toBeInTheDocument()
})