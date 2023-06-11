import React from 'react'
import Section from './Section'
import Heading from './Heading'
import Service from './Service'
import service_img from '../images/more_services/pexels-suzukii-xingfu-872831.jpg'

const services = [
    {
        id: 'service-1',
        name: 'Recreational Services',
        image: service_img,
        location: 'Nyali beach, Mombasa',
        days: 'Thursday to Sunday',
        hours: '9.00 AM to 9.OO PM',
    },
    {
        id: 'service-2',
        name: 'Food and Accommodation',
        image: service_img,
        location: 'Mombasa, Nairobi, Kisumu',
        days: 'Monday to Sunday',
        hours: '24 hours 7 days',
    },
    {
        id: 'service-3',
        name: 'Event Hosting',
        image: service_img,
        location: 'Nairobi, Nakuru, Kisumu',
        days: 'Monday to Saturday',
        hours: '9.00 AM to 9.OO PM',
    }
]
const OtherServices = () => {
    return (
        <Section>
            <Heading level = {1}
                className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
            >We also Offer</Heading>
            <div className='services'>
                {
                    services.map(service => 
                        
                        <Service key = {service.id}
                            serviceName = {service.name}
                            serviceImg = {service.image}
                            serviceLocation = {service.location}
                            workingDays = {service.days}
                            workingHours = {service.hours}
                        />
                        )
                }
            </div>

        </Section>
    )
}

export default OtherServices