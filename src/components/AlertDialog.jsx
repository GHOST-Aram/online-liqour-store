import React from 'react'
import Button from './Button'

const AlertDialog = ({message, closeDialog}) => {
    return (
        <div role = 'alertdialog' aria-live='assertive'
           className={
            'p-4 rounded-md bg-white absolute'+
            ' left-96 top-44 text-center'
            }
        >
            <div className="text-red-700 font-bold py-4">
                {message}
            </div>
            <Button handleClick={closeDialog}>Close</Button>
        </div>
    )
}

export default AlertDialog