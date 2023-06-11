import React from 'react'

const Section = ({children}) => {
	return (
		<section>
			{children}
			<div className="my-4 border-b-2 border-solid border-zinc-900"></div>
		</section>
	)
}

export default Section