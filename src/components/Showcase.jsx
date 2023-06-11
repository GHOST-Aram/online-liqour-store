import React from 'react'
import Heading from './Heading'
import frenchWine from '../images/drinks/french_wine_cahhteu_lattiffe.png'
import amarula from '../images/drinks/amarula-cream.png'
import scotchWhisky from '../images/drinks/black-and-white-whisky.png'
import canadianHunters from '../images/drinks/hunters_choice_canadian.png'
import Button from './Button'


const Showcase = () => {
  return (
    <div>
        <Heading level = {1}>We deliver your favorite whisky and wine to your door step</Heading>
        <div>
            <img src={frenchWine} alt="French Wine" />
            <img src={amarula} alt="Amarula" />
            <img src={scotchWhisky} alt="Scotch Whisky" />
            <img src={canadianHunters} alt="Canadian Hunters" />
        </div>
        <Button>Order Now</Button>
        <Heading level={3}>Excessive consumption of alcohol is harmfull to your health</Heading>
        <Heading level={4}>Drink Responsibly</Heading>
        <Heading level={5}>Not For sale to Persons under the age of 21 yrs</Heading>
    </div>
  )
}

export default Showcase