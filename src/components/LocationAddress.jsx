import React from 'react'

const LocationAddress = ({addressName,  streetAddress, phone, email}) => {
	return (
		<div aria-label='location information'>
			<h1 aria-label='location name'>{addressName}</h1>
			<h2 aria-label='street address'>{streetAddress}</h2>
			<h3 aria-label='phone number'>{phone}</h3>
			<h4 aria-label='email'>{email}</h4>
		</div>
	)
}

export default LocationAddress