import black_and_white from '../images/drinks/black-and-white-whisky.png'
import Heading from './Heading'
import React from 'react'
import Section from './Section'
import Review from './Review'

const reviews = [
    {
        id: 'review-1',
        name: 'Raymond Reddington', image: black_and_white, 
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                + ' Aperiam id dolorem sint accusantium placeat perspiciatis'  
                + 'voluptas impedit, alias sapiente earum.'
    },
    {
        id: 'review-2',
        name: 'Dembe Zuma', image: black_and_white, 
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                + ' Aperiam id dolorem sint accusantium placeat perspiciatis'  
                + 'voluptas impedit, alias sapiente earum.'
    },
    {
        id: 'review-3',
        name: 'Elizabeth Keen', image: black_and_white, 
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                + ' Aperiam id dolorem sint accusantium placeat perspiciatis'  
                + 'voluptas impedit, alias sapiente earum.'
    },
    {
        id: 'review-4',
        name: 'Tom Keen', image: black_and_white, 
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                + ' Aperiam id dolorem sint accusantium placeat perspiciatis'  
                + 'voluptas impedit, alias sapiente earum.'
    }
]

const CustomerReviews = () => {
  return (
    <Section>
        
        <Heading level={1}
            className={'font-bold my-4 text-slate-300 pl-4 py-2 bg-red-700'}
        >{'Our Customers Say'}</Heading>
        <div aria-label='customer reviews' className="reviews mt-8">
            {
                reviews.map( review => 
                    <Review 
                        key = {review.id}
                        customerName = {review.name}
                        customerImage = {review.image}
                        message = {review.message}
                    />
                    )
            }
        </div>
        
    </Section>
  )
}

export default CustomerReviews