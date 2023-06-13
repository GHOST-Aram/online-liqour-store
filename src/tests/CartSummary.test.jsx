import { render, screen } from "@testing-library/react";
import CartSummary from "../components/CartSummary";


test('Renders cart summary heading', () =>{
    render(<CartSummary />)

    const heading = screen.getByText(/Cart summary/i)
    expect(heading).toBeInTheDocument()
})

test('Renders number of items in the cart', () =>{
    render(<CartSummary totalQuantity = {19}/>)

    const numberOfitems = screen.getByText(/19/)
    expect(numberOfitems).toBeInTheDocument()
})

test('Renders order total', () =>{
    render(<CartSummary orderTotal = {2300} />)

    const orderTotal = screen.getByText(/2300/)
    expect(orderTotal).toBeInTheDocument()
})

test('Renders chackout button', () =>{
    render(<CartSummary />)

    const checkoutBtn = screen.getByRole('button')
    expect(checkoutBtn).toBeInTheDocument()
})

test('Renders checkout button text', ()=>{
    render(<CartSummary />)
    
    const buttonText = screen.getByText(/Checkout/i)
    expect(buttonText).toBeInTheDocument()
})