import {render, screen} from '@testing-library/react'
import Main from '../components/Main'

test('Renders <main>', () =>{
    render(<Main/>)

    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
})