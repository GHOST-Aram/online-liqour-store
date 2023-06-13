import React from 'react'

const HomeItem = ({item}) => {

    return (
        <div className='item p-2 rounded-md bg-slate-300'>
            <img src={item.image} alt='' />
            <h2 aria-label='product name'className='font-bold text-red-700 text-start'
            >{item.name}</h2>
            <div className='my-2'>
                <h1 className="font-medium py-2">
                Was: <span aria-label='previous price'
                    className='text-crossed text-slate-500'
                >Ksh {item.previousPrice}</span>
                
                </h1>
                <h1 aria-label='current price'
                    className='font-bold py-2'
                >Now: Ksh. {item.currentPrice}</h1>
            </div>
        </div>
    )
}

export default HomeItem