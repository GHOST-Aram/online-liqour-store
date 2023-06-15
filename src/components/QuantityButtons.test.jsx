import { screen, render } from "@testing-library/react";
import QuantityButtons from "../components/QuantityButtons";
import { BrowserRouter as Router } from "react-router-dom";

test('Renders item quantity', () =>{
    const item = {
        id: 1, quantity: 1
    }
    render(<QuantityButtons item={item}/>, {wrapper: Router})

    const quantityNode = screen.getByText('1')
    expect(quantityNode).toBeInTheDocument()
})
test('Disables decrement button if quantity not greater than 1', () =>{
    const item = {
        id: 1, quantity: 1
    }
    render(<QuantityButtons item={item}/>, {wrapper: Router})

    const decrementbtn = screen.getByLabelText('decrement quantity')
    expect(decrementbtn).toBeDisabled()
})