import React from 'react'

const Review = (props) => {
    const {customerName, customerImage, message} = props
	return (
		<div aria-label='customer review'>
			<img src={customerImage} alt={customerName} />
			<h1 aria-label="customer's name">{customerName}</h1>
			<p aria-label='message' >{message}</p>
		</div>
	)
}

export default Review