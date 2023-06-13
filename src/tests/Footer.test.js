import {render, screen} from '@testing-library/react'
import Footer from '../components/Footer'

test('Renders <footer>', () =>{
    render(<Footer/>)

    const footerElement = screen.getByRole('contentinfo ')
    expect(footerElement).toBeInTheDocument()
})