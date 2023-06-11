import Heading from './Heading'
import React from 'react'
import FeaturedBrand from './Brand'
import Section from './Section'
import amarula from '../images/partner_brands/amarula_logo_medium.png'
import black_and_white from '../images/partner_brands/black_and_white_logo_large.png'
import glendffidich from '../images/partner_brands/glenfiddich_logo_large.jpg'
import jack_daniels from    '../images/partner_brands/Jack-Daniels-logo-large.png'
import jameson from '../images/partner_brands/jameson_logo_medium.png'
import jonnie_walker from '../images/partner_brands/jonnie_walker_logo_large.png'
import remy_martin from '../images/partner_brands/remy_martin_logo_large.png'

const brands = [
    { id:'brand-bw', name: 'Black and White Whisky',logo: black_and_white,},
    { id:'brand-jd', name: 'Jack Daniels',logo: jack_daniels,},
    { id:'brand-jw', name: 'Jonnie Walker',logo: jonnie_walker},
    { id:'brand-ama', name: 'Amarula',logo: amarula, },
    { id:'brand-gfd', name: 'Glendffidich', logo: glendffidich},
    { id:'brand-jms', name: 'Jameson', logo: jameson},
    { id:'brand-rmart', name: 'Remy Martin', logo: remy_martin}
]
const FeaturedBrands = () => {
    return (
        <Section>
            <Heading level={1}
                className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
            >
                The Brands we Deal In
            </Heading>
            <div aria-label='featured brands' className='mt-8 featured-brands'>
                {
                    brands.map(brand => 
                        <FeaturedBrand 
                            key={brand.id}
                            brandLogo={brand.logo}
                            brandName={brand.name}
                        />
                        )
                }
            </div>
        </Section>
    )
}

export default FeaturedBrands