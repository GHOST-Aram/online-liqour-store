import React from 'react'

const Review = (props) => {
    const {customerName, customerImage, message} = props
	return (
		<div 
			aria-label='customer review' 
			className='review flex flex-col items-center p-2 rounded-md'
		>
			<img 
				className='rounded-full bg-white'
				src={customerImage} 
				alt={customerName} 
			/>
			<h1 
				aria-label="customer's name"
				className='font-bold mt-2'
			>{customerName}</h1>
			<p 	
				aria-label='message' 
				className='text-center text-sm font-light mt-2' 
			>{message}</p>
		</div>
	)
}

export default Review