import { render, screen } from '@testing-library/react'
import LocationAddress from '../components/LocationAddress'

test('Renders arial-label for location information', () =>{
    render(<LocationAddress />)

    const addressNode = screen.getByLabelText('location information')
    expect(addressNode).toBeInTheDocument()
})

test('Renders address name', () =>{
    render(<LocationAddress addressName = {'Nairobi'}/>)

    const addressName = screen.getByText(/Nairobi/)
    expect(addressName).toBeInTheDocument()
})

test('Renders aria-label for location name', () =>{
    render(<LocationAddress/>)

    const nameNode = screen.getByLabelText(/location name/)
    expect(nameNode).toBeInTheDocument()
})

test('Renders street address', () =>{
    render(<LocationAddress streetAddress = {'Oginga Oding Street'} />)

    const locationNode = screen.getByText(/Oginga Oding Street/)
    expect(locationNode).toBeInTheDocument()
})

test('Renders aria-label for street address', () =>{
    render(<LocationAddress />)

    const locationNode = screen.getByLabelText(/street address/)
    expect(locationNode).toBeInTheDocument()

})

test('Renders phone number', () =>{
    render(<LocationAddress phone = {'0796699806'} />)

    const phone = screen.getByText(/0796699806/)
    expect(phone).toBeInTheDocument()
})

test('Renders phone arial-label', () =>{
    render(<LocationAddress/>)

    const phoneNode = screen.getByLabelText(/phone number/)
    expect(phoneNode).toBeInTheDocument()
})

test('Renders email', () =>{
    render(<LocationAddress email = {'xyz@gmail.com'} />)

    const email = screen.getByText(/xyz@gmail.com/)
    expect(email).toBeInTheDocument()
})

test('Renders email aria-label', () =>{
    render(<LocationAddress />)

    const emailNode = screen.getByLabelText(/email/)
    expect(emailNode).toBeInTheDocument()
})