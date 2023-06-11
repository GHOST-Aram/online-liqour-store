import React from 'react'
import LocationAddress from './LocationAddress'

const locations = [
	{
		id:'location-msa',
		name: 'Valhala Mombasa', 
		street: 'Nyali Beach, Mombasa', 
		phone:'+254 099 997 007',
		email: 'msa@valhala.com'
	},
	{
		id:'location-ksm',
		name: 'Valhala Kisumu',
		street: 'Winam Gulf, Kisumu',
		phone: '+254 990 889 887',
		email: 'ksm@valhala.com'
	},
	{
		id:'location-nkr',
		name: 'Valhala Nakuru',
		street: 'Old Nakuru Golf Club, Nakuru',
		phone: '+254 667 228 889',
		email: 'naks@valhala.com',
	},
	{
		id:'location-nrb',
		name: 'Valhala Nairobi',
		street: 'Kings Reeves, Outer Ring Road',
		phone: '+254 553 443 223',
		email: 'nrb@valahala.com'
	}
]
const Footer = () => {
	return (
		<footer>
			<div className="mt-4 bg-zinc-900 p-4">
				<div aria-label = 'where to find us' className="locations mb-4">
					{
						locations.map(location =>
							<LocationAddress 
								key={location.id}
								addressName={location.name}
								streetAddress={location.street}
								phone={location.phone}
								email={location.email}
							/>
							)
					}	
				</div>
				<p className="text-center text-slate-300 text-xs">
					Copyright &copy; Valahala {new Date().getFullYear()}
				</p>
			</div>
			</footer>
	)
}

export default Footer