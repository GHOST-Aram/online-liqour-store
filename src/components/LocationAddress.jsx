import React from 'react'

const LocationAddress = ({addressName,  streetAddress, phone, email}) => {
	return (
		<div aria-label='location information'>
			<h1 
				className='text-slate-300 font-medium'				
				aria-label='location name'>{addressName}</h1>
			<h2 
				className='text-slate-300 font-light text-md'
				aria-label='street address'>{streetAddress}</h2>
			<h3 
				className='text-slate-300 font-light text-sm'
				aria-label='phone number'>{phone}</h3>
			<h4 
				className='text-slate-300 font-light text-xs'
				aria-label='email'>{email}</h4>
		</div>
	)
}

export default LocationAddress