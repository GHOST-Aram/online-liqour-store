import React from 'react'

const Brand = ({brandLogo, brandName}) => {
    return (
        <div aria-label='featured brand'>
            <img src={brandLogo} alt={brandName} />
        </div>
    )
}

export default Brand