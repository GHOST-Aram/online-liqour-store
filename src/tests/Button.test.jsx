import {render, screen} from '@testing-library/react'
import Button from '../components/Button'

test('Renders Button', ()=>{
    render(<Button></Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('Renders buttton textContent', ()=>{
    render(<Button>Order Now</Button>)

    const buttonText = screen.getByText(/Order Now/)
    expect(buttonText).toBeInTheDocument()
})