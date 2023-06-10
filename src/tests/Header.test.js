import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test('Renders <header> element' ,()=>{
    render(<Header />)

    const header = screen.getByRole('banner') 
    expect(header).toBeInTheDocument()
})



