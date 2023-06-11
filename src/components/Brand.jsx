import React from 'react'

const Brand = ({brandLogo, brandName}) => {
    return (
        <div aria-label='featured brand' >
            <img 
                className='p-2 rounded-md brand bg-slate-300'
                src={brandLogo} alt={brandName} />
        </div>
    )
}

export default Brand