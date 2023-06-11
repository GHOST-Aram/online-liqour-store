import { render, screen } from "@testing-library/react";
import Heading from "../components/Heading";

test('Renders heading element', ()=>{
    render(<Heading level={1}>Heading</Heading>)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
})

test('Renders Heading textcontent', ()=>{
    render(<Heading level = {1}>Welcome Home</Heading>)

    const heandingText = screen.getByText(/Welcome Home/)
    expect(heandingText).toBeInTheDocument()
})
