import {render, screen} from '@testing-library/react'
import Logo from '../components/Logo'

test('Renders Site Logo', () =>{
    render(<Logo/>)

    const logo = screen.getByAltText('Valhala')
    expect(logo).toBeInTheDocument()
})