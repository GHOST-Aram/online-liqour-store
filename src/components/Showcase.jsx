import React from 'react'
import Heading from './Heading'
import canadianHunters from '../images/drinks/hunters_choice_canadian.png'
import Button from './Button'
import Section from './Section'
import { useNavigate } from 'react-router-dom'


const Showcase = () => {
    const navigate = useNavigate()
    return (
        <Section>
            <div className='py-4 showcase flex flex-col items-center lg:flex-row'>
                <div className=' flex flex-col items-center'>
                    <Heading 
                    level = {1}
                    className={'font-bold text-xxl text-center'}
                    >
                        We deliver your favorite whisky and wine to your door step
                    </Heading>
                    <Button handleClick={()=>navigate('/shop')}
                        className = {'my-4'}
                    >Order Now</Button>
                    <Heading 
                        level={2}
                        className={'font-bold text-xl text-center'}
                    >
                        Excessive consumption of alcohol is harmfull to your health
                    </Heading>
                    <Heading className={'text-lg font-md text-green-900 pt-4'} level={3}>
                        Drink Responsibly
                    </Heading>
                    <Heading className={'text-sm text-red-900 py-4'} level={4}>
                        Not For sale to Persons under the age of 21 yrs
                    </Heading>
                </div>
                <div className='flex showcase-'>
                    <img
                        className='position-absolute showcase-img' 
                    src={canadianHunters} alt="Canadian Hunters" />
                </div>
            </div>
        </Section>
    )
}

export default Showcase