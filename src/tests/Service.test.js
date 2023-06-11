import { screen, render} from "@testing-library/react";
import Service from "../components/Service";

test('Renders service image element', () =>{
    render(<Service/>)

    const serviceImg = screen.getByRole('img')
    expect(serviceImg).toBeInTheDocument()
})

test('Renders service alt text', () =>{
    render(<Service serviceName = {'Recreation'} />)

    const altTextx = screen.getByAltText(/Recreation/)
    expect(altTextx).toBeInTheDocument()
})

test('Renders service name', () =>{
    render(<Service serviceName = {'Recreation'} />)

    const serviceName = screen.getByText(/Recreation/)
    expect(serviceName).toBeInTheDocument()
})

test('Renders arial-label for service name', () =>{
    render(<Service />)

    const serviceNameNode = screen.getByLabelText('service name')
    expect(serviceNameNode).toBeInTheDocument()
})
test('Renders service location details', ()=>{
    render(<Service serviceLocation = {'Nairobi'} />)

    const location = screen.getByText(/Nairobi/)
    expect(location).toBeInTheDocument()
})

test('Renders aria-label for service location', () =>{
    render(<Service />)

    const locationNode = screen.getByLabelText('service location')
    expect(locationNode).toBeInTheDocument()
})

test('Renders open days', () =>{
    render(<Service workingDays = {'Monday to Friday'} />)

    const workingDays = screen.getByText(/Monday to Friday/)
    expect(workingDays).toBeInTheDocument()
})

test('Renders aria-label for open days', ()=>{
    render(<Service />)

    const openDaysNode = screen.getByLabelText('working days')
    expect(openDaysNode).toBeInTheDocument()
})

test('Renders working hours', () =>{
    render(<Service WorkingHours = {'24hrs'} />)

    const workingHours = screen.getByText(/24hrs/)
    expect(workingHours).toBeInTheDocument()
})

test('Renders arial-label for working hours', () =>{
    render(<Service />)

    const workingHoursNode = screen.getByLabelText('working hours')
    expect(workingHoursNode).toBeInTheDocument()

})
