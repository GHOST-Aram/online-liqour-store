import {render, screen} from '@testing-library/react'
import Brand from '../components/Brand'

test('Renders image element', () =>{
    render(<Brand />)

    const brandImgElement = screen.getByRole('img')
    expect(brandImgElement).toBeInTheDocument()
})

test('Renders brand alt text', () =>{
    render(<Brand brandName = {'Jonnie Walker'} />)

    const altText = screen.getByAltText(/Jonnie Walker/)
    expect(altText).toBeInTheDocument()
})

test('Renders aria-label of brand', () =>{
    render(<Brand />)

    const brandNode = screen.getByLabelText('featured brand')
    expect(brandNode).toBeInTheDocument()
})