import React from 'react'

const ProductPreview = ({item}) => {
    return (
        <>
            <div aria-label='cart item' 
                className={
                    'cart-item flex flex-row border-b-2 border-zinc-900'
                    +'lg:flex-row  w-full p-2 rounded-md bg-slate-300'
                }>
                <img src={item.image} alt={item.name} />
                <div className= {'pl-2 border-l-2 border-zinc-900 w-full space-y-2'}>
                    <h1 aria-label='name'className='font-bold text-red-700'>
                        {item.name}
                    </h1>
                    <h1 className="font-medium">
                        Was: <span aria-label='previous price'
                            className='text-crossed text-slate-500'
                        >Ksh {item.previousPrice}</span>
                    </h1>
                    <h2 aria-label='price'className='font-bold'>
                        Now: Ksh. {item.currentPrice}
                    </h2>
                    
                </div>
            </div>
            <p aria-label='description' className='text-sm font-light py-4'
                >{item.desc}
            </p>
        </>
    )
}

export default ProductPreview