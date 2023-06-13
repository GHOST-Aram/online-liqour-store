import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

test('Renders <header> element' ,()=>{
    render(<Header />, {wrapper: BrowserRouter})

    const header = screen.getByRole('banner') 
    expect(header).toBeInTheDocument()
})



