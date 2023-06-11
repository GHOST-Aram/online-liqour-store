import {render , screen} from '@testing-library/react'
import Review from '../components/Review'

test('Renders review with aria-label', () =>{
    render(<Review />)

    const reviewNode = screen.getByLabelText('customer review')
    expect(reviewNode).toBeInTheDocument()
})
test('Renders customer image', () =>{
    render(<Review />)

    const customerImg = screen.getByRole('img')
    expect(customerImg).toBeInTheDocument()
})

test('Renders image altText', () =>{
    render(<Review customerName = {'John Doe'} />)

    const altText = screen.getByAltText('John Doe')
    expect(altText).toBeInTheDocument()
})

test('Renders aria-label for customers name', () =>{
    render(<Review />)

    const nameNode = screen.getByLabelText('customer\'s name')
    expect(nameNode).toBeInTheDocument()
})
test('Renders customers message', () =>{
    render(<Review message = {'We loved it at valhala'} />)

    const message = screen.getByText(/We loved it at Valhala/i)
    expect(message).toBeInTheDocument()
})

test('Renders arial-label for message', () =>{
    render(<Review/>)

    const messageNode = screen.getByLabelText('message')
    expect(messageNode).toBeInTheDocument()
})