import React from 'react'


const Service = (props) => {
    const {
        serviceImg, 
        serviceName, 
        serviceLocation,
        workingHours,
        workingDays
    } = props
  return (
    <div className='mt-4 service rounded-md'>
        <h2 aria-label='service name'
            className='font-bold text-slate-300 text-start p-2 bg-red-700'
        >{serviceName}</h2>
        <img src={serviceImg} alt={serviceName} />
        <div className='bg-red-700 px-2 py-2'>
            <h3 aria-label='service location'
                className='font-bold text-slate-300'
            ><span className='text-orange-green-700'>
                Location: </span>{serviceLocation}
            </h3>
            <h4 aria-label='working days'
                className='text-slate-300 font-medium py-2'
            ><span className='text-orange-green-700'>
                Working Days: </span> {workingDays}</h4>
            <h5 aria-label='working hours'
                className='text-slate-300 font-light py-2'
            ><span className='text-orange-green-700'>
                Working Hours: </span> {workingHours}</h5>
        </div>
    </div>
  )
}

export default Service