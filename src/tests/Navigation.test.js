import { screen, render } from "@testing-library/react";
import {Navigation} from "../components/Navigation";
import { BrowserRouter } from "react-router-dom";

test('Renders Navigation items', () =>{
    render(<Navigation/>, {wrapper: BrowserRouter})

    const navigation = screen.getByRole('navigation')
    const homeLink = screen.getByText('Home')
    const shopLink = screen.getByText('Shop')
    const cartLink = screen.getByText('Cart')

    expect(navigation).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()
    expect(shopLink).toBeInTheDocument()
    expect(cartLink).toBeInTheDocument()


})
