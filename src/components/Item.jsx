import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';



const Item = ({item}) => {
    const navigate = useNavigate()

    return (
        <div className='item p-2 rounded-md bg-slate-300'>
            <img src={item.image} alt='' />
            <h2 aria-label='product name'className='font-bold text-red-700 text-start'
            >{item.name}</h2>
            <div className='flex flex-row gap-4 my-2'>
                <h1 aria-label='current price'
                    className='font-bold'
                >Ksh. {item.currentPrice}</h1>
                <p aria-label='previous price'
                    className='text-crossed text-slate-500'
                >Ksh {item.previousPrice}</p>
                <span aria-label='discount'
                    className='text-red-400'
                >{'-20'}%</span>
            </div>
            <Button className={'w-full font-bold'}
                handleClick={() => navigate('/details',{state: item})}
            >VIEW ITEM</Button>
        </div>
    )
}

export default Item