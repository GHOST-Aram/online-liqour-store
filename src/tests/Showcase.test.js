import { render, screen } from "@testing-library/react";
import Showcase from "../components/Showcase";

test('Renders showcase text', ()=>{
    render(<Showcase/>)

    const showcaseText = screen.getByText(
        /We deliver your favorite whisky and wine to your door step/i)
    expect(showcaseText).toBeInTheDocument()
})
test('Renders showcase images', () =>{
    render(<Showcase/>)
    
    const canadianHunters = screen.getByAltText(/Canadian Hunters/i)
    expect(canadianHunters).toBeInTheDocument()
})

test('Renders showcase order button', () =>{
    render(<Showcase/>)
    
    const orderbtn = screen.getByText(/Order Now/)
    expect(orderbtn).toBeInTheDocument()
})

test('Renders drinking warning text', ()=>{
    render(<Showcase/>)

    const warningtext = screen.getByText(/Excessive consumption of alcohol is harmfull to your health/i)
    const warningtext1 = screen.getByText(/Drink Responsibly/)
    const warningtext2 = screen.getByText(/Not For sale to Persons under the age of 21 yrs/i)

    expect(warningtext).toBeInTheDocument()
    expect(warningtext1).toBeInTheDocument()
    expect(warningtext2).toBeInTheDocument()
})