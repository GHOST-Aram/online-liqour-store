import React from 'react'


const Service = (props) => {
    const {
        serViceImg, 
        serviceName, 
        serviceLocation,
        WorkingHours,
        workingDays
    } = props
  return (
    <div>
        <h2 aria-label='service name'>{serviceName}</h2>
        <img src={serViceImg} alt={serviceName} />
        <div>
            <h3 aria-label='service location'>Location: {serviceLocation}</h3>
            <h4 aria-label='working days'>Working Days: {workingDays}</h4>
            <h5 aria-label='working hours'>Working Hours: {WorkingHours}</h5>
        </div>
    </div>
  )
}

export default Service